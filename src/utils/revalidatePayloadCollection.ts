import {
  getPayloadCollectionCacheTag,
  PAYLOAD_GLOBAL_CACHE_TAG,
  type PayloadRevalidatedCollection,
} from "@/dataAccess/cacheTags";
import { triggerFrontendTagRevalidation } from "@/utils/triggerFrontendTagRevalidation";

export const revalidatePayloadCollection = async (
  collection: PayloadRevalidatedCollection,
) => {
  const collectionTag = getPayloadCollectionCacheTag(collection);

  await Promise.all([
    triggerFrontendTagRevalidation(collectionTag),
    triggerFrontendTagRevalidation(PAYLOAD_GLOBAL_CACHE_TAG),
  ]);
};
