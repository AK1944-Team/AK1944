import type { CollectionConfig } from "payload";
import { formatSlug } from "@/utils";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";
import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
  },
  labels: {
    singular: "Aktualność",
    plural: "Aktualności",
  },
  access: {
    read: () => true,
  },

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (
          (operation === "create" || operation === "update") &&
          doc.createGallery === true &&
          doc.galleryOption === "create" &&
          doc.galleryImages &&
          Array.isArray(doc.galleryImages) &&
          doc.galleryImages.length > 0
        ) {
          try {
            const existingGalleries = await req.payload.find({
              collection: "galleries",
              where: {
                sourceNews: {
                  equals: doc.id,
                },
              },
              limit: 1,
            });

            let galleryId: string;

            if (existingGalleries.docs.length > 0) {
              const existingGallery = existingGalleries.docs[0];
              const result = await req.payload.update({
                collection: "galleries",
                id: existingGallery.id,
                data: {
                  title: doc.galleryTitle || doc.title,
                  description: doc.galleryDescription,
                  sourceType: "news",
                  sourceNews: doc.id,
                  publishedAt: doc.publishedAt || new Date().toISOString(),
                  images: doc.galleryImages,
                },
                depth: 0,
              });
              galleryId = result.id;
            } else {
              const result = await req.payload.create({
                collection: "galleries",
                data: {
                  title: doc.galleryTitle || doc.title,
                  description: doc.galleryDescription,
                  sourceType: "news" as const,
                  sourceNews: doc.id,
                  publishedAt: doc.publishedAt || new Date().toISOString(),
                  images: doc.galleryImages,
                },
              });
              galleryId = result.id;
            }

            if (!doc.linkedGallery) {
              await req.payload.update({
                collection: "news",
                id: doc.id,
                data: {
                  linkedGallery: galleryId,
                },
                depth: 0,
              });
            }
          } catch (error) {
            console.error("Error creating gallery from news:", error);
          }
        }
      },
      async () => {
        await revalidatePayloadCollection("news");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("news");
      },
    ],
  },

  fields: [
    {
      name: "title",
      type: "text",
      label: "Tytuł",
      required: true,
    },

    {
      name: "content",
      type: "richText",
      label: "Treść",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
      required: true,
    },

    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "Obraz tytułowy",
    },

    {
      name: "publishedAt",
      type: "date",
      label: "Data publikacji",
      defaultValue: () => new Date(),
      admin: {
        date: {
          displayFormat: "dd/MM/yyyy",
        },
      },
    },

    {
      name: "slug",
      type: "text",
      label: "Slug",
      unique: true,
      admin: {
        description: "Generowany automatycznie na podstawie tytułu.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.title),
        ],
      },
    },

    {
      name: "createGallery",
      type: "checkbox",
      label: "Czy stworzyć galerię?",
      defaultValue: false,
    },
    {
      name: "galleryOption",
      type: "radio",
      label: "Opcje galerii",
      options: [
        { label: "Stwórz nową galerię", value: "create" },
        { label: "Wybierz z istniejących", value: "select" },
      ],
      admin: {
        condition: (values) => values.createGallery === true,
      },
    },
    {
      name: "galleryTitle",
      type: "text",
      label: "Tytuł galerii",
      admin: {
        condition: (values) =>
          values.createGallery === true && values.galleryOption === "create",
      },
    },
    {
      name: "galleryDescription",
      type: "textarea",
      label: "Opis galerii",
      admin: {
        description: "Dodatkowy opis galerii, opcjonalnie",
        condition: (values) =>
          values.createGallery === true && values.galleryOption === "create",
      },
    },
    {
      name: "galleryImages",
      type: "upload",
      relationTo: "media",
      label: "Zdjęcia do galerii",
      hasMany: true,
      admin: {
        condition: (values) =>
          values.createGallery === true && values.galleryOption === "create",
      },
    },
    {
      name: "linkedGallery",
      type: "relationship",
      relationTo: "galleries",
      label: "Wybierz istniejącą galerię",
      hasMany: false,
      admin: {
        placeholder: "Wybierz galerię z listy...",
        condition: (values) =>
          values.createGallery === true && values.galleryOption === "select",
      },
    },
  ],
};
