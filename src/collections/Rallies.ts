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
      label: "Zaproszenie na rajd",
      admin: {
        description: "Pełny tekst zaproszenia wyświetlany na początku strony rajdu",
      },
    },
    {
      name: "purpose",
      type: "textarea",
      label: "Cele rajdu - tekst wprowadzający",
      admin: {
        description: "Tekst wyświetlany przed listą celów",
      },
    },
    {
      name: "purposeList",
      type: "array",
      label: "Cele rajdu - lista",
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
      label: "Informacja o warunkach uczestnictwa",
      labels: {
        singular: "Warunek",
        plural: "Warunki",
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
      label: "Warunki turystyczne szlaku i zalecenia dla uczestników",
      labels: {
        singular: "Zalecenie",
        plural: "Zalecenia",
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
      label: "Trofea i nagrody",
      labels: {
        singular: "Nagroda/Trofeum",
        plural: "Nagrody i trofea",
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
      label: "Transport i miejsce startu - nagłówek",
      admin: {
        description: "Tekst wyświetlany przed listą informacji o transporcie",
      },
    },
    {
      name: "transportList",
      type: "array",
      label: "Transport i miejsce startu - lista",
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
      label: "UWAGA - ważne informacje",
      admin: {
        description: "Ważne ostrzeżenia lub informacje dla uczestników",
      },
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
      label: "Organizatorzy zapewniają",
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
      label: "Zadania przedrajdowe - tekst wprowadzający",
      admin: {
        description: "Tekst wyświetlany przed listą zadań przedrajdowych",
      },
    },
    {
      name: "tasks",
      type: "array",
      label: "Zadania przedrajdowe - lista",
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
  ],
};