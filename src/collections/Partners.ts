import type { CollectionConfig } from "payload";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";

export const Partners: CollectionConfig = {
  slug: "partners",
  labels: {
    singular: "Partner",
    plural: "Partnerzy",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "href", "order"],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        await revalidatePayloadCollection("partners");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("partners");
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nazwa partnera",
      required: true,
    },
    {
      name: "href",
      type: "text",
      label: "Link do strony partnera",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Logo / grafika partnera",
    },
  ],
};
