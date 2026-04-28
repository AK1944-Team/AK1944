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
      name: "description",
      type: "richText",
      label: "Opis wydarzenia",
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Obraz tytułowy",
      relationTo: "media",
    },
  ],
};
