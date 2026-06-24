import type { CollectionConfig } from "payload";

export const socialMedia: CollectionConfig = {
  slug: "social-media",

  admin: {
    useAsTitle: "name",
  },

  labels: {
    singular: "Social Media",
    plural: "Social Media",
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: "name",
      type: "text",
      admin: {
        description: "Nazwa platformy społecznościowej",
      },
      required: true,
    },
    {
      name: "url",
      admin: {
        description: "Adres URL profilu na platformie społecznościowej",
      },
      type: "text",
      required: true,
    },
    {
      name: "icon",
      type: "upload",
      admin: {
        description: "Ikona platformy społecznościowej",
      },
      relationTo: "media",
    },
  ],
};
