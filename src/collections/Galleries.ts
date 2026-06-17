import type { CollectionConfig } from "payload";
import { slugify } from "@/utils";

const formatSlug = (value?: string, fallback?: string) =>
  slugify(value || fallback) || value;

export const Galleries: CollectionConfig = {
  slug: "galleries",
  labels: {
    singular: "Galeria",
    plural: "Galerie",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === "update" && doc.images?.length > 0) {
          try {
            if (doc.sourceType === "news" && doc.sourceNews) {
              await req.payload.update({
                collection: "news",
                id:
                  typeof doc.sourceNews === "object"
                    ? doc.sourceNews.id
                    : doc.sourceNews,
                data: {
                  linkedGallery: doc.id,
                },
                depth: 0,
              });
            } else if (doc.sourceType === "rally" && doc.sourceRally) {
              await req.payload.update({
                collection: "rallies",
                id:
                  typeof doc.sourceRally === "object"
                    ? doc.sourceRally.id
                    : doc.sourceRally,
                data: {
                  linkedGallery: doc.id,
                },
                depth: 0,
              });
            }
          } catch (error) {
            console.error(
              "Error updating source document from gallery:",
              error,
            );
          }
        }
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
      name: "slug",
      type: "text",
      label: "Slug",
      unique: true,
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.title),
        ],
      },
      admin: {
        description: "Generowany automatycznie na podstawie tytułu.",
      },
    },

    {
      name: "description",
      type: "textarea",
      label: "Opis",
    },

    {
      name: "sourceType",
      type: "select",
      label: "Źródło galerii",
      defaultValue: "manual",
      options: [
        { label: "Ręcznie", value: "manual" },
        { label: "Z aktualności", value: "news" },
        { label: "Z rajdu", value: "rally" },
      ],
    },

    {
      name: "sourceNews",
      type: "relationship",
      relationTo: "news",
      label: "Źródłowa aktualność",
      admin: {
        condition: (values) => values.sourceType === "news",
      },
    },

    {
      name: "sourceRally",
      type: "relationship",
      relationTo: "rallies",
      label: "Źródłowy rajd",
      admin: {
        condition: (values) => values.sourceType === "rally",
      },
    },

    {
      name: "publishedAt",
      type: "date",
      label: "Data publikacji",
    },

    {
      name: "images",
      type: "upload",
      relationTo: "media",
      label: "Zdjęcia",
      hasMany: true,
    },
  ],
};
