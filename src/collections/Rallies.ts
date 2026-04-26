import type { CollectionConfig } from "payload";

import { slugify } from "@/utils";

const formatSlug = (value?: string, fallback?: string) =>
  slugify(value || fallback) || value;

export const Rallies: CollectionConfig = {
  slug: "rallies",
  labels: {
    singular: "Rajd",
    plural: "Rajdy",
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
    {
      name: "date",
      type: "text",
      label: "Data rajdu",
      admin: {
        description: "Np. '10 lutego, 2024'",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Krótki opis",
      admin: {
        description: "Opis wyświetlany na liście rajdów",
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Zdjęcie główne",
      relationTo: "media",
    },
    {
      name: "invite",
      type: "richText",
      label: "Zaproszenie",
      admin: {
        description: "Pełny tekst zaproszenia na rajd",
      },
    },
    {
      name: "purpose",
      type: "textarea",
      label: "Cel rajdu",
    },
    {
      name: "purposeList",
      type: "array",
      label: "Lista celów",
      labels: {
        singular: "Cel",
        plural: "Cele",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Cel",
        },
      ],
    },
    {
      name: "rulesList",
      type: "array",
      label: "Zasady uczestnictwa",
      labels: {
        singular: "Zasada",
        plural: "Zasady",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Zasada",
        },
      ],
    },
    {
      name: "adviceList",
      type: "array",
      label: "Wskazówki",
      labels: {
        singular: "Wskazówka",
        plural: "Wskazówki",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Wskazówka",
        },
      ],
    },
    {
      name: "rewards",
      type: "array",
      label: "Nagrody",
      labels: {
        singular: "Nagroda",
        plural: "Nagrody",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Nagroda",
        },
      ],
    },
    {
      name: "transportHeader",
      type: "text",
      label: "Nagłówek transportu",
    },
    {
      name: "transportList",
      type: "array",
      label: "Informacje o transporcie",
      labels: {
        singular: "Informacja",
        plural: "Informacje",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Informacja",
        },
      ],
    },
    {
      name: "warning",
      type: "textarea",
      label: "Ważne informacje",
    },
    {
      name: "programList",
      type: "array",
      label: "Program rajdu",
      labels: {
        singular: "Punkt programu",
        plural: "Program",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Punkt programu",
        },
      ],
    },
    {
      name: "organizators",
      type: "array",
      label: "Organizatorzy",
      labels: {
        singular: "Organizator",
        plural: "Organizatorzy",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Organizator",
        },
      ],
    },
    {
      name: "partners",
      type: "array",
      label: "Partnerzy",
      labels: {
        singular: "Partner",
        plural: "Partnerzy",
      },
      fields: [
        {
          name: "item",
          type: "text",
          label: "Partner",
        },
      ],
    },
    {
      name: "taskInfo",
      type: "textarea",
      label: "Informacje o zadaniach",
    },
    {
      name: "tasks",
      type: "array",
      label: "Zadania",
      labels: {
        singular: "Zadanie",
        plural: "Zadania",
      },
      fields: [
        {
          name: "item",
          type: "textarea",
          label: "Zadanie",
        },
      ],
    },
    {
      name: "relation",
      type: "array",
      label: "Relacja z rajdu",
      labels: {
        singular: "Akapit",
        plural: "Relacja",
      },
      fields: [
        {
          name: "item",
          type: "textarea",
          label: "Akapit",
        },
      ],
    },
    {
      name: "linkedGallery",
      type: "relationship",
      label: "Powiązana galeria",
      relationTo: "galleries",
      admin: {
        description: "Galeria zdjęć z rajdu",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Data publikacji",
    },
  ],
};
