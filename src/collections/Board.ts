import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { revalidatePayloadCollection } from "@/utils/revalidatePayloadCollection";

export const Board: CollectionConfig = {
  slug: "board",
  labels: {
    singular: "Zarząd",
    plural: "Zarządy",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        await revalidatePayloadCollection("board");
      },
    ],
    afterDelete: [
      async () => {
        await revalidatePayloadCollection("board");
      },
    ],
  },
  fields: [
    {
      name: "honoraryPresidents",
      type: "array",
      label: "Prezes Honorowy",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Imię i nazwisko",
          required: true,
        },
      ],
    },
    {
      name: "presidents",
      type: "array",
      label: "Prezes",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Imię i nazwisko",
          required: true,
        },
      ],
    },
    {
      name: "boardMembers",
      type: "array",
      label: "Skład zarządu",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Imię i nazwisko",
          required: true,
        },
        {
          name: "role",
          type: "text",
          label: "Stanowisko / rola",
        },
      ],
    },
    {
      name: "delegates",
      type: "array",
      label: "Delegaci na Walny Zjazd Okręgu",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Imię i nazwisko",
          required: true,
        },
        {
          name: "role",
          type: "text",
          label: "Stanowisko / rola",
        },
      ],
    },
    {
      name: "additionalInfo",
      type: "textarea",
      label: "Dodatkowe informacje",
      admin: {
        description:
          "Np. objaśnienie znacznika * przy nazwiskach członków bez uprawnień kombatanckich.",
      },
    },
    {
      name: "regulations",
      type: "richText",
      label: "Regulacje",
      editor: lexicalEditor({}),
      admin: {
        description:
          "Informacje regulaminowe dotyczące zarządu. Przykładowe wpisy: Zgodnie z § 43 Statutu ŚZŻAK, Zarząd Koła zwołuje Walne Zebranie Członków Środowiska 5. PSK AK ŚZŻAK w Dębicy.",
      },
    },
  ],
};
