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
      name: "description",
      type: "textarea",
      label: "Opis",
    },
    {
      name: "sourceType",
      type: "select",
      label: "Źródło galerii",
      required: true,
      defaultValue: "manual",
      options: [
        {
          label: "Ręcznie",
          value: "manual",
        },
        {
          label: "Z aktualności",
          value: "news",
        },
      ],
    },
    {
      name: "sourceNews",
      type: "relationship",
      label: "Źródłowa aktualność",
      relationTo: "news",
      admin: {
        condition: (_, siblingData) => siblingData?.sourceType === "news",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Data publikacji",
    },
    {
      name: "images",
      type: "array",
      label: "Zdjęcia",
      labels: {
        singular: "Zdjęcie",
        plural: "Zdjęcia",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Zdjęcie",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
          label: "Podpis",
        },
      ],
    },
  ],
};
