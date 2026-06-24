import { formatSlug } from "@/utils";
import type { CollectionConfig } from "payload";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";

export const Biograms: CollectionConfig = {
  slug: "biograms",
  labels: {
    singular: "biogram",
    plural: "Biogramy",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        await revalidatePayloadCollection("biograms");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("biograms");
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Imię i nazwisko",
      required: true,
    },
    {
      name: "pseudonym",
      type: "text",
      label: "Pseudonim",
    },
    {
      name: "birthDate",
      type: "text",
      label: "Data urodzenia",
      admin: {
        description:
          "Format daty wygląda następująco: 1 stycznia 1900, Miejsce urodzenia(jeśli jest znane)",
      },
    },
    {
      name: "deathDate",
      type: "text",
      label: "Data śmierci",
      admin: {
        description:
          "Format daty wygląda następująco: 1 stycznia 1900, Miejsce śmierci(jeśli jest znane)",
      },
    },
    {
      name: "burialPlace",
      type: "text",
      label: "Miejsce pochówku",
    },
    {
      name: "biography",
      type: "textarea",
      label: "Biografia",
    },
    {
      name: "portrait",
      type: "upload",
      label: "Portret",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      admin: {
        description:
          "Generowany automatycznie na podstawie imienia i nazwiska.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => formatSlug(value, siblingData?.name),
        ],
      },
      unique: true,
    },
  ],
};
