import type { CollectionConfig } from "payload";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Plik multimedialny",
    plural: "Media",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        await revalidatePayloadCollection("media");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("media");
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Tekst alternatywny",
    },
  ],
  upload: true,
};
