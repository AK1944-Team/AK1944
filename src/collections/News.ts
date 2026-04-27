import type { CollectionConfig } from "payload";

import { slugify } from "@/utils";

const formatSlug = (value?: string, fallback?: string) => {
  if (value) return slugify(value);
  if (fallback) return slugify(fallback);
  return undefined;
};

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "Aktualność",
    plural: "Aktualności",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === "create" || operation === "update") {
          if (doc.createGallery && doc.galleryImages && doc.galleryImages.length > 0) {
            if (!doc.linkedGallery) {
              try {
                const newGallery = await req.payload.create({
                  collection: "galleries",
                  data: {
                    title: doc.galleryTitle || `${doc.title} - Galeria`,
                    slug: doc.gallerySlug || `${doc.slug}-galeria`,
                    description: `Galeria zdjęć z aktualności: ${doc.title}`,
                    sourceType: "news",
                    sourceNews: doc.id,
                    images: doc.galleryImages,
                    publishedAt: doc.publishedAt || new Date().toISOString(),
                  },
                });

                await req.payload.update({
                  collection: "news",
                  id: doc.id,
                  data: {
                    linkedGallery: newGallery.id,
                  },
                  depth: 0,
                });
              } catch (error) {
                req.payload.logger.error(
                  `Failed to create gallery for news ${doc.id}: ${error}`
                );
              }
            } else {
              try {
                await req.payload.update({
                  collection: "galleries",
                  id: doc.linkedGallery,
                  data: {
                    title: doc.galleryTitle || `${doc.title} - Galeria`,
                    slug: doc.gallerySlug || `${doc.slug}-galeria`,
                    images: doc.galleryImages,
                    publishedAt: doc.publishedAt,
                  },
                  depth: 0,
                });
              } catch (error) {
                req.payload.logger.error(
                  `Failed to update gallery ${doc.linkedGallery} for news ${doc.id}: ${error}`
                );
              }
            }
          } else if (!doc.createGallery && doc.linkedGallery) {
            try {
              await req.payload.update({
                collection: "news",
                id: doc.id,
                data: {
                  linkedGallery: null,
                },
                depth: 0,
              });
            } catch (error) {
              req.payload.logger.error(
                `Failed to unlink gallery from news ${doc.id}: ${error}`
              );
            }
          }
        }
      },
    ],
    beforeDelete: [
      async ({ req, id }) => {
        try {
          const news = await req.payload.findByID({
            collection: "news",
            id,
            depth: 0,
          });

          if (news.linkedGallery && typeof news.linkedGallery === "string") {
            await req.payload.delete({
              collection: "galleries",
              id: news.linkedGallery,
            });
          }
        } catch (error) {
          req.payload.logger.error(
            `Failed to delete linked gallery for news ${id}: ${error}`
          );
        }
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tytuł",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Treść",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      label: "Obraz tytułowy",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Data publikacji",
      defaultValue: () => new Date(),
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
      name: "createGallery",
      type: "checkbox",
      label: "Utwórz galerię",
      defaultValue: false,
    },
    {
      name: "galleryTitle",
      type: "text",
      label: "Tytuł galerii",
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
    },
    {
      name: "gallerySlug",
      type: "text",
      label: "Slug galerii",
      admin: {
        description: "Generowany automatycznie na podstawie tytułu galerii.",
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) =>
            formatSlug(value, siblingData?.galleryTitle),
        ],
      },
    },
    {
      name: "galleryImages",
      type: "array",
      labels: {
        singular: "Zdjęcie galerii",
        plural: "Zdjęcia galerii",
      },
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.createGallery),
      },
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Zdjęcie",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
          label: "Podpis",
        },
      ],
    },
    {
      name: "linkedGallery",
      type: "relationship",
      label: "Powiązana galeria",
      relationTo: "galleries",
      admin: {
        hidden: true,
      },
    },
  ],
};
