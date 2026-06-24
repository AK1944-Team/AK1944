import { formatSlug } from "@/utils";
import type { CollectionConfig } from "payload";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";

export const Literature: CollectionConfig = {
  slug: "literature",
  admin: {},
  labels: {
    singular: "Książka",
    plural: "Literatura",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        await revalidatePayloadCollection("literature");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("literature");
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
      name: "author",
      type: "text",
      label: "Autor",
      required: true,
    },
    {
      name: "aboutAuthor",
      type: "textarea",
      label: "O autorze",
    },
    {
      name: "publisher",
      type: "text",
      label: "Wydawca",
    },
    {
      name: "isbn",
      type: "text",
      label: "ISBN",
    },
    {
      name: "format",
      type: "text",
      label: "Format",
    },
    {
      name: "cover",
      type: "text",
      label: "Okładka",
      admin: {
        description: "Rodzaj okładki (np. miękka, twarda).",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      label: "Zdjęcie okładki",
      relationTo: "media",
    },
    {
      name: "edition",
      type: "text",
      label: "Wydanie",
    },
    {
      name: "language",
      type: "text",
      label: "Język",
    },
    {
      name: "numberOfPages",
      type: "number",
      label: "Liczba stron",
    },
    {
      name: "chapters",
      type: "array",
      label: "Rozdziały",
      fields: [
        {
          name: "chapterTitle",
          type: "text",
          label: "Tytuł rozdziału",
        },
      ],
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
  ],
};
