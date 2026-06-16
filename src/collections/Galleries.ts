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
      ],
    },

    {
      name: "sourceNews",
      type: "relationship",
      relationTo: "news",
      label: "Źródłowa aktualność",
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
    },
  ],
};
