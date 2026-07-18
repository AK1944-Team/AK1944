export const PAYLOAD_GLOBAL_CACHE_TAG = "payload-all";

export const PAYLOAD_COLLECTION_CACHE_TAGS = {
  calendar: "payload-calendar",
  news: "payload-news",
  literature: "payload-literature",
  rallies: "payload-rallies",
  biograms: "payload-biograms",
  "memorial-places": "payload-memorial-places",
  "social-media": "payload-social-media",
  galleries: "payload-galleries",
  media: "payload-media",
  partners: "payload-partners",
} as const;

export type PayloadRevalidatedCollection =
  keyof typeof PAYLOAD_COLLECTION_CACHE_TAGS;

export const getPayloadCollectionCacheTag = (
  collection: PayloadRevalidatedCollection,
) => PAYLOAD_COLLECTION_CACHE_TAGS[collection];

export const SOCIAL_MEDIA_CACHE_TAG =
  PAYLOAD_COLLECTION_CACHE_TAGS["social-media"];
