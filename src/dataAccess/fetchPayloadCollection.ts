import config from "@payload-config";
import type { Config } from "@/payload-types";
import { getPayload, type FindArgs } from "payload";
import { unstable_cache } from "next/cache";
import {
  getPayloadCollectionCacheTag,
  PAYLOAD_GLOBAL_CACHE_TAG,
  SOCIAL_MEDIA_CACHE_TAG,
} from "@/dataAccess/cacheTags";

type CollectionMap = Pick<
  Config["collections"],
  | "calendar"
  | "news"
  | "literature"
  | "rallies"
  | "biograms"
  | "memorial-places"
  | "social-media"
  | "partners"
  | "board"
>;
type CollectionQuery = Pick<
  FindArgs,
  "limit" | "page" | "pagination" | "sort" | "where"
> & {
  locale?: Config["locale"] | "all";
};
type CollectionQueries = {
  [K in keyof CollectionMap]: CollectionQuery;
};

export async function fetchCollection<K extends keyof CollectionMap>({
  collection,
  query,
}: {
  collection: K;
  query?: CollectionQueries[K];
}) {
  try {
    const cacheKey = `${collection}:${JSON.stringify(query ?? {})}`;
    const result = await unstable_cache(
      async () => {
        const payload = await getPayload({ config });

        return payload.find({
          collection,
          sort: "-publishedAt",
          ...(query ?? {}),
        });
      },
      [cacheKey],
      {
        tags: [
          PAYLOAD_GLOBAL_CACHE_TAG,
          getPayloadCollectionCacheTag(collection),
        ],
        revalidate: 3600,
      },
    )();

    return {
      ...result,
      error: null,
    };
  } catch (error) {
    console.error(`Failed to fetch ${collection}`, error);

    return {
      docs: [],
      totalPages: 0,
      error: "Błąd podczas pobierania danych.",
    };
  }
}

export async function fetchBySlug<K extends keyof CollectionMap>(
  collection: K,
  slug: string,
) {
  const { docs, error } = await fetchCollection({
    collection,
    query: {
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    },
  });

  return {
    doc: docs[0] ?? null,
    error,
  };
}

const getSocialMediaLinksCached = unstable_cache(
  async () => {
    const payload = await getPayload({ config });
    const data = await payload.find({
      collection: "social-media",
      sort: "createdAt",
    });

    return data.docs;
  },
  [SOCIAL_MEDIA_CACHE_TAG],
  {
    tags: [PAYLOAD_GLOBAL_CACHE_TAG, SOCIAL_MEDIA_CACHE_TAG],
    revalidate: 3600,
  },
);

export async function getSocialMediaLinks() {
  try {
    const data = await getSocialMediaLinksCached();

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch social media links", error);

    return {
      data: [],
      error: "Błąd podczas pobierania danych.",
    };
  }
}
