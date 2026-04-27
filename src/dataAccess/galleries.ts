import type { GalleryData, GalleryImage } from "@/types";

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

interface PayloadMedia {
  id: string;
  alt: string;
  url: string;
  filename: string;
}

interface PayloadGalleryImage {
  image: PayloadMedia;
  caption?: string;
  id: string;
}

interface PayloadGallery {
  id: string;
  title: string;
  slug: string;
  description?: string;
  images: PayloadGalleryImage[];
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface PayloadResponse {
  docs: PayloadGallery[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month}, ${year}`;
};

const mapPayloadGalleryToGalleryData = (gallery: PayloadGallery): GalleryData => {
  const images: GalleryImage[] = gallery.images.map((item) => ({
    src: item.image.url.startsWith('http') ? item.image.url : `${PAYLOAD_API_URL}${item.image.url}`,
    alt: item.image.alt || item.caption || gallery.title,
  }));

  return {
    id: gallery.id,
    subtitle: gallery.title,
    date: formatDate(gallery.publishedAt || gallery.createdAt),
    images,
  };
};

export const getGalleries = async (): Promise<GalleryData[]> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/galleries?limit=100&sort=-publishedAt`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch galleries: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    
    return data.docs.map(mapPayloadGalleryToGalleryData);
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

const mapPayloadGalleryToNewsGallery = (gallery: PayloadGallery): NewsGallery => {
  const images: GalleryImage[] = gallery.images.map((item) => ({
    src: item.image.url.startsWith('http') ? item.image.url : `${PAYLOAD_API_URL}${item.image.url}`,
    alt: item.image.alt || item.caption || gallery.title,
  }));

  return {
    title: gallery.title,
    date: formatDate(gallery.publishedAt || gallery.createdAt),
    images,
  };
};

export const getGalleryByNewsId = async (newsId: string): Promise<NewsGallery | null> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/galleries?where[sourceNews][equals]=${newsId}&limit=1`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch gallery for news ${newsId}: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    
    if (data.docs.length === 0) {
      return null;
    }

    return mapPayloadGalleryToNewsGallery(data.docs[0]);
  } catch (error) {
    console.error(`Error fetching gallery for news ${newsId}:`, error);
    return null;
  }
};
