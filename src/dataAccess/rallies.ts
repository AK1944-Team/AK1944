import { Rally } from "@/app/(client)/szlak-partyzancki/rajdy/_models/rally";
import { RallyData } from "@/app/(client)/szlak-partyzancki/rajdy/_models/rallyData";
import type { GalleryImage } from "@/types";
import { extractTextFromRichText } from "@/utils";

type RichTextNode = {
  [key: string]: unknown;
  text?: string;
  root?: RichTextNode | null;
  children?: RichTextNode[] | null;
};

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

interface PayloadMedia {
  id: string;
  alt: string;
  url: string;
  filename: string;
}

interface PayloadArrayItem {
  item: string;
  id: string;
}

interface PayloadGallery {
  id: string;
  title: string;
  slug: string;
  images?: {
    image: PayloadMedia;
    caption?: string;
    id: string;
  }[];
}

interface PayloadRally {
  id: string;
  title: string;
  slug: string;
  date?: string;
  description?: string;
  featuredImage?: PayloadMedia;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface PayloadRallyDetailed extends PayloadRally {
  invite?: RichTextNode;
  purpose?: string;
  purposeList?: PayloadArrayItem[];
  rulesList?: PayloadArrayItem[];
  adviceList?: PayloadArrayItem[];
  rewards?: PayloadArrayItem[];
  transportHeader?: string;
  transportList?: PayloadArrayItem[];
  warning?: string;
  programList?: PayloadArrayItem[];
  organizators?: PayloadArrayItem[];
  partners?: PayloadArrayItem[];
  taskInfo?: string;
  tasks?: PayloadArrayItem[];
  relation?: PayloadArrayItem[];
  linkedGallery?: PayloadGallery | string;
}

interface PayloadResponse {
  docs: PayloadRally[];
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

const mapPayloadRallyToRally = (rally: PayloadRally): Rally => {
  return {
    id: parseInt(rally.id, 10) || 0,
    slug: rally.slug,
    title: rally.title,
    date: rally.date,
    description: rally.description,
    imageUrl: rally.featuredImage
      ? rally.featuredImage.url.startsWith('http')
        ? rally.featuredImage.url
        : `${PAYLOAD_API_URL}${rally.featuredImage.url}`
      : undefined,
  };
};

export const getRallies = async (): Promise<Rally[]> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/rallies?limit=100&sort=-publishedAt`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch rallies: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    
    return data.docs.map(mapPayloadRallyToRally);
  } catch (error) {
    console.error("Error fetching rallies:", error);
    throw error;
  }
};

export const getRallyBySlug = async (slug: string): Promise<Rally | null> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/rallies?where[slug][equals]=${slug}&limit=1`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch rally: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    
    if (data.docs.length === 0) {
      return null;
    }

    return mapPayloadRallyToRally(data.docs[0]);
  } catch (error) {
    console.error("Error fetching rally by slug:", error);
    throw error;
  }
};

// Detailed rally data for participation rules and relation pages
interface PayloadDetailedResponse {
  docs: PayloadRallyDetailed[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
}

const mapPayloadRallyToRallyData = (rally: PayloadRallyDetailed): RallyData => {
  return {
    id: parseInt(rally.id, 10) || 0,
    slug: rally.slug,
    title: rally.title,
    date: rally.date,
    invite: rally.invite ? extractTextFromRichText(rally.invite) : undefined,
    purpose: rally.purpose,
    purposeList: rally.purposeList?.map((item) => item.item),
    rulesList: rally.rulesList?.map((item) => item.item),
    adviceList: rally.adviceList?.map((item) => item.item),
    rewards: rally.rewards?.map((item) => item.item),
    transportHeader: rally.transportHeader,
    transportList: rally.transportList?.map((item) => item.item),
    warning: rally.warning,
    programList: rally.programList?.map((item) => item.item),
    organizators: rally.organizators?.map((item) => item.item),
    partners: rally.partners?.map((item) => item.item),
    taskInfo: rally.taskInfo,
    tasks: rally.tasks?.map((item) => item.item),
  };
};

export const getRallyDataBySlug = async (slug: string): Promise<RallyData | null> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/rallies?where[slug][equals]=${slug}&limit=1`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch rally data: ${response.statusText}`);
    }

    const data: PayloadDetailedResponse = await response.json();
    
    if (data.docs.length === 0) {
      return null;
    }

    return mapPayloadRallyToRallyData(data.docs[0]);
  } catch (error) {
    console.error("Error fetching rally data by slug:", error);
    throw error;
  }
};

// Rally relation data (for relation pages)
export interface RallyRelationData {
  id: number;
  slug: string;
  title: string;
  date?: string;
  relation: string[];
  images: GalleryImage[];
}

const mapPayloadRallyToRelationData = (rally: PayloadRallyDetailed): RallyRelationData => {
  const gallery = typeof rally.linkedGallery === "object" ? rally.linkedGallery : null;
  
  const images: GalleryImage[] = gallery?.images
    ? gallery.images.map((item) => ({
        src: item.image.url.startsWith('http')
          ? item.image.url
          : `${PAYLOAD_API_URL}${item.image.url}`,
        alt: item.image.alt || item.caption || gallery.title,
      }))
    : [];

  return {
    id: parseInt(rally.id, 10) || 0,
    slug: rally.slug,
    title: rally.title,
    date: rally.date,
    relation: rally.relation?.map((item) => item.item) || [],
    images,
  };
};

export const getRallyRelationBySlug = async (slug: string): Promise<RallyRelationData | null> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/rallies?where[slug][equals]=${slug}&depth=2&limit=1`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch rally relation: ${response.statusText}`);
    }

    const data: PayloadDetailedResponse = await response.json();
    
    if (data.docs.length === 0) {
      return null;
    }

    return mapPayloadRallyToRelationData(data.docs[0]);
  } catch (error) {
    console.error("Error fetching rally relation by slug:", error);
    throw error;
  }
};
