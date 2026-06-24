import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { SOCIAL_MEDIA_CACHE_TAG } from "@/dataAccess/cacheTags";

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

  hooks: {
    afterChange: [
      async () => {
        revalidateTag(SOCIAL_MEDIA_CACHE_TAG);
      },
    ],
    afterDelete: [
      async () => {
        revalidateTag(SOCIAL_MEDIA_CACHE_TAG);
      },
    ],
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
