import type { CollectionConfig } from "payload";
import { formatSlug } from "@/utils";
import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "Aktualność",
    plural: "Aktualności",
  },
  access: {
    read: () => true,
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
      label: "Utwórz galerię",
      defaultValue: false,
    },
    {
      name: "linkedGallery",
      type: "relationship",
      relationTo: "galleries",
      label: "Galeria",
      admin: {
        condition: (_, siblingData) => !siblingData?.createGallery,
      },
    },
  ],
};
