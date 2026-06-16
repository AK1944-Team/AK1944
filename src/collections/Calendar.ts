import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Calendar: CollectionConfig = {
  slug: "calendar",
  labels: {
    singular: "wydarzenie",
    plural: "Kalendarz wydarzeń",
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
      name: "date",
      type: "date",
      label: "Data wydarzenia",
      required: true,
    },
    {
      name: "isEveryYear",
      type: "checkbox",
      label: "Czy wydarzenie powtarza się co roku?",
    },
    {
      name: "description",
      type: "richText",
      label: "Opis wydarzenia",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Obraz tytułowy",
      relationTo: "media",
    },
  ],
};
