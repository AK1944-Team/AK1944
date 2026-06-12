import type { PlaceDetails } from "@/types";
import type { MemorialPlace } from "@/payload-types";
import { fetchCollection, fetchBySlug } from "./fetchPayloadCollection";
import { extractTextFromRichText } from "@/utils";
import { getMediaUrl } from "@/utils/getMediaUrl";

const mapPayloadMemorialPlaceToPlaceDetails = (
  place: MemorialPlace,
): PlaceDetails => {
  const rawImageUrl =
    typeof place.featuredImage === "object" && place.featuredImage?.url
      ? place.featuredImage.url
      : undefined;

  const imageUrl = getMediaUrl(rawImageUrl) ?? undefined;

  const highlight = place.highlight?.map((h) => ({
    text: h.text || "",
    align: h.align || "left",
  }));

  return {
    id: typeof place.id === "string" ? parseInt(place.id, 10) : place.id || 0,
    slug: place.slug || "",
    name: place.name || "",
    location: place.location || "",
    description: place.description
      ? extractTextFromRichText(place.description)
      : "",
    image: imageUrl,
    highlight,
    descriptionContinuation: place.descriptionContinuation
      ? extractTextFromRichText(place.descriptionContinuation)
      : undefined,
  };
};

export const getMemorialPlaces = async (options?: {
  limit?: number;
  page?: number;
  pagination?: boolean;
}): Promise<{ places: PlaceDetails[]; totalPages: number }> => {
  const { docs, error, totalPages } = await fetchCollection({
    collection: "memorial-places",
    query: {
      limit: options?.limit ?? 100,
      page: options?.page,
      pagination: options?.pagination,
      sort: "-publishedAt",
    },
  });

  if (error) {
    console.error("Error fetching memorial places:", error);
    return { places: [], totalPages: 0 };
  }

  return {
    places: docs.map(mapPayloadMemorialPlaceToPlaceDetails),
    totalPages: totalPages || 0,
  };
};

export const getMemorialPlaceBySlug = async (
  slug: string,
): Promise<PlaceDetails | null> => {
  const { doc, error } = await fetchBySlug("memorial-places", slug);

  if (error || !doc) {
    console.error("Error fetching memorial place by slug:", error);
    return null;
  }

  return mapPayloadMemorialPlaceToPlaceDetails(doc);
};