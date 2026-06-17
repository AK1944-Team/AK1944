import config from "@payload-config";
import type { Gallery } from "@/payload-types";
import type { GalleryData, GalleryImage } from "@/types";
import { getMediaUrl } from "@/utils/getMediaUrl";
import { getPayload } from "payload";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

const mapGalleryImages = (gallery: Gallery): GalleryImage[] => {
  return (gallery.images || [])
    .map((item) => {
      // When hasMany is true, item is directly string | Media (not wrapped in { image: ... })
      const media = typeof item === "string" ? null : item;

      if (!media) return null;

      const imageUrl = getMediaUrl(media.url);

      if (!imageUrl) return null;

      return {
        src: imageUrl,
        alt: media.alt || gallery.title,
      };
    })
    .filter((img): img is GalleryImage => img !== null);
};

const mapGalleryToGalleryData = (gallery: Gallery): GalleryData => {
  return {
    id: gallery.id,
    subtitle: gallery.title,
    date: formatDate(gallery.publishedAt || gallery.createdAt),
    images: mapGalleryImages(gallery),
  };
};

type GetGalleriesParams = {
  limit?: number;
  page?: number;
  pagination?: boolean;
};

export const getGalleries = async ({
  limit = 4,
  page = 1,
  pagination = true,
}: GetGalleriesParams = {}): Promise<{
  galleries: GalleryData[];
  totalPages: number;
}> => {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "galleries",
      limit,
      page: pagination ? page : undefined,
      pagination,
      sort: "-publishedAt",
      depth: 2,
    });

    const galleries = result.docs.map(mapGalleryToGalleryData);
    const totalPages = result.totalPages || 1;

    return { galleries, totalPages };
  } catch (error) {
    console.error("Error fetching galleries:", error);
    throw error;
  }
};

export interface NewsGallery {
  title: string;
  date: string;
  images: GalleryImage[];
}

const mapGalleryToNewsGallery = (gallery: Gallery): NewsGallery => {
  return {
    title: gallery.title,
    date: formatDate(gallery.publishedAt || gallery.createdAt),
    images: mapGalleryImages(gallery),
  };
};

export const getGalleryByNewsId = async (
  newsId: string,
): Promise<NewsGallery | null> => {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "galleries",
      where: {
        sourceNews: {
          equals: newsId,
        },
      },
      limit: 1,
      depth: 2,
    });

    if (result.docs.length === 0) {
      return null;
    }

    return mapGalleryToNewsGallery(result.docs[0]);
  } catch (error) {
    console.error(`Error fetching gallery for news ${newsId}:`, error);
    return null;
  }
};
