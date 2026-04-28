import config from "@payload-config";
import type { Config } from "@/payload-types";
import { getPayload, type FindArgs } from "payload";

type CollectionMap = Pick<Config["collections"], "calendar" | "news">;
type CollectionQuery = Pick<
  FindArgs,
  "limit" | "page" | "pagination" | "sort" | "where"
> & {
  locale?: Config["locale"] | "all";
};
type CollectionQueries = {
  [K in keyof CollectionMap]: CollectionQuery;
};

type FetchResult<T> = {
  docs: T[];
  error: string | null;
};

export async function fetchCollection<K extends keyof CollectionMap>({
  collection,
  query,
}: {
  collection: K;
  query?: CollectionQueries[K];
}): Promise<FetchResult<CollectionMap[K]>> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection,
      ...(query ?? {}),
    });

    return {
      docs: result.docs,
      error: null,
    };
  } catch (error) {
    console.error(`Failed to fetch ${collection}`, error);

    return {
      docs: [],
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
