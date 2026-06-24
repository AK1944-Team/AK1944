import type { CollectionConfig } from "payload";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";

import { slugify } from "@/utils";
import {
  lexicalEditor,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";

const formatSlug = (value?: string, fallback?: string) =>
  slugify(value || fallback) || value;

export const MemorialPlaces: CollectionConfig = {
  slug: "memorial-places",
  labels: {
    singular: "Miejsce pamięci",
    plural: "Miejsca pamięci",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        await revalidatePayloadCollection("memorial-places");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("memorial-places");
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nazwa",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      admin: {
        description: "Generowany automatycznie na podstawie nazwy.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.name),
        ],
      },
      unique: true,
    },
    {
      name: "location",
      type: "text",
      label: "Lokalizacja",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: "Opis",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
      admin: {
        description: "Główny opis miejsca pamięci",
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Zdjęcie główne",
      relationTo: "media",
    },
    {
      name: "highlight",
      type: "array",
      label: "Wyróżnione teksty",
      labels: {
        singular: "Tekst",
        plural: "Teksty",
      },
      admin: {
        description: "Teksty do wyróżnienia (np. napisy z tablicy)",
      },
      fields: [
        {
          name: "text",
          type: "textarea",
          label: "Treść",
          required: true,
        },
        {
          name: "align",
          type: "select",
          label: "Wyrównanie",
          defaultValue: "left",
          options: [
            {
              label: "Do lewej",
              value: "left",
            },
            {
              label: "Do środka",
              value: "center",
            },
            {
              label: "Do prawej",
              value: "right",
            },
          ],
        },
      ],
    },
    {
      name: "descriptionContinuation",
      type: "richText",
      label: "Kontynuacja opisu",
      admin: {
        description: "Dodatkowy opis wyświetlany po wyróżnionych tekstach",
      },
    },
  ],
};
