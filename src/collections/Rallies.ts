import type { CollectionConfig } from "payload";
import { slugify } from "@/utils";
import {
  lexicalEditor,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";

const formatSlug = (value?: string, fallback?: string) =>
  slugify(value || fallback) || value;

export const Rallies: CollectionConfig = {
  slug: "rallies",
  admin: {
    useAsTitle: "title",
  },
  labels: {
    singular: "Rajd",
    plural: "Rajdy",
  },
  access: {
    read: () => true,
  },

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (
          (operation === "create" || operation === "update") &&
          doc.galleryOption === "create" &&
          doc.galleryImages &&
          Array.isArray(doc.galleryImages) &&
          doc.galleryImages.length > 0
        ) {
          try {
            const existingGalleries = await req.payload.find({
              collection: "galleries",
              where: {
                sourceRally: {
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
                  sourceType: "rally" as const,
                  sourceRally: doc.id,
                  publishedAt: doc.rallyDate || new Date().toISOString(),
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
                  sourceType: "rally" as const,
                  sourceRally: doc.id,
                  publishedAt: doc.rallyDate || new Date().toISOString(),
                  images: doc.galleryImages,
                },
              });
              galleryId = result.id;
            }

            if (!doc.linkedGallery) {
              await req.payload.update({
                collection: "rallies",
                id: doc.id,
                data: {
                  linkedGallery: galleryId,
                },
                depth: 0,
              });
            }
          } catch (error) {
            console.error("Error creating gallery from rally:", error);
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
      admin: {
        description: "Generowany automatycznie na podstawie tytułu.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.title),
        ],
      },
      unique: true,
    },
    {
      name: "rallyDate",
      type: "date",
      label: "Data rajdu",
      admin: {
        date: {
          displayFormat: "dd/MM/yyyy",
        },
        description: "Np. '10 lutego, 2024'",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Krótki opis",
      admin: {
        description: "Opis wyświetlany na liście rajdów",
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Zdjęcie główne",
      relationTo: "media",
    },
    {
      name: "invite",
      type: "richText",
      label: "Zaproszenie na rajd",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
      admin: {
        description:
          "Pełny tekst zaproszenia wyświetlany na początku strony rajdu",
      },
    },
    {
      name: "purpose",
      type: "textarea",
      label: "Cele rajdu - tekst wprowadzający",
      admin: {
        description: "Tekst wyświetlany przed listą celów",
      },
    },
    {
      name: "purposeList",
      type: "array",
      label: "Cele rajdu - lista",
      labels: {
        singular: "Cel",
        plural: "Cele",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Cel",
        },
      ],
    },
    {
      name: "rulesList",
      type: "array",
      label: "Informacja o warunkach uczestnictwa",
      labels: {
        singular: "Warunek",
        plural: "Warunki",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Zasada",
        },
      ],
    },
    {
      name: "adviceList",
      type: "array",
      label: "Warunki turystyczne szlaku i zalecenia dla uczestników",
      labels: {
        singular: "Zalecenie",
        plural: "Zalecenia",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Wskazówka",
        },
      ],
    },
    {
      name: "rewards",
      type: "array",
      label: "Trofea i nagrody",
      labels: {
        singular: "Nagroda/Trofeum",
        plural: "Nagrody i trofea",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Nagroda",
        },
      ],
    },
    {
      name: "transportHeader",
      type: "text",
      label: "Transport i miejsce startu - nagłówek",
      admin: {
        description: "Tekst wyświetlany przed listą informacji o transporcie",
      },
    },
    {
      name: "transportList",
      type: "array",
      label: "Transport i miejsce startu - lista",
      labels: {
        singular: "Informacja",
        plural: "Informacje",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Informacja",
        },
      ],
    },
    {
      name: "warning",
      type: "textarea",
      label: "UWAGA - ważne informacje",
      admin: {
        description: "Ważne ostrzeżenia lub informacje dla uczestników",
      },
    },
    {
      name: "programList",
      type: "array",
      label: "Program rajdu",
      labels: {
        singular: "Punkt programu",
        plural: "Program",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Punkt programu",
        },
      ],
    },
    {
      name: "organizators",
      type: "array",
      label: "Organizatorzy zapewniają",
      labels: {
        singular: "Organizator",
        plural: "Organizatorzy",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Organizator",
        },
      ],
    },
    {
      name: "partners",
      type: "array",
      label: "Partnerzy",
      labels: {
        singular: "Partner",
        plural: "Partnerzy",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Partner",
        },
      ],
    },
    {
      name: "taskInfo",
      type: "textarea",
      label: "Zadania przedrajdowe - tekst wprowadzający",
      admin: {
        description: "Tekst wyświetlany przed listą zadań przedrajdowych",
      },
    },
    {
      name: "tasks",
      type: "array",
      label: "Zadania przedrajdowe - lista",
      labels: {
        singular: "Zadanie",
        plural: "Zadania",
      },
      fields: [
        {
          name: "item",
          type: "textarea",
          label: "Zadanie",
        },
      ],
    },
    {
      name: "relation",
      type: "richText",
      label: "Relacja z rajdu",
    },
    {
      name: "galleryOption",
      type: "radio",
      label: "Opcje galerii",
      options: [
        { label: "Stwórz nową galerię", value: "create" },
        { label: "Wybierz z istniejących", value: "select" },
      ],
      defaultValue: "create",
    },
    {
      name: "galleryImages",
      type: "upload",
      relationTo: "media",
      label: "Zdjęcia do galerii",
      hasMany: true,
      admin: {
        condition: (values) => values.galleryOption === "create",
      },
    },
    {
      name: "galleryTitle",
      type: "text",
      label: "Tytuł galerii",
      admin: {
        description: "Opcjonalnie - domyślnie używany będzie tytuł rajdu",
        condition: (values) => values.galleryOption === "create",
      },
    },
    {
      name: "galleryDescription",
      type: "textarea",
      label: "Opis galerii",
      admin: {
        description: "Opcjonalnie",
        condition: (values) => values.galleryOption === "create",
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
        condition: (values) => values.galleryOption === "select",
        sortOptions: "title",
      },
    },
  ],
};
