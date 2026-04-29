import config from "@payload-config";
import type { Rally as PayloadRally } from "@/payload-types";
import { Rally } from "@/app/(client)/szlak-partyzancki/rajdy/_models/rally";
import { RallyData } from "@/app/(client)/szlak-partyzancki/rajdy/_models/rallyData";
import type { GalleryImage } from "@/types";
import { extractTextFromRichText } from "@/utils";
import { fetchCollection, fetchBySlug } from "./fetchPayloadCollection";
import { getPayload } from "payload";

const mapPayloadRallyToRally = (rally: PayloadRally): Rally => {
  const media = typeof rally.featuredImage === "string" ? null : rally.featuredImage;
  
  return {
    id: rally.id,
    slug: rally.slug || "",
    title: rally.title,
    date: rally.date || undefined,
    description: rally.description || undefined,
    imageUrl: media?.url || undefined,
  };
};

export const getRallies = async (): Promise<Rally[]> => {
  const { docs, error } = await fetchCollection({
    collection: "rallies",
    query: {
      limit: 100,
      sort: "-publishedAt",
    },
  });

  if (error) {
    console.error("Error fetching rallies:", error);
    throw new Error(error);
  }
    
  return docs.map(mapPayloadRallyToRally);
};

export const getRallyBySlug = async (slug: string): Promise<Rally | null> => {
  const { doc, error } = await fetchBySlug("rallies", slug);

  if (error) {
    console.error("Error fetching rally by slug:", error);
    throw new Error(error);
  }

  return doc ? mapPayloadRallyToRally(doc) : null;
};

const mapPayloadRallyToRallyData = (rally: PayloadRally): RallyData => {
  return {
    id: rally.id,
    slug: rally.slug || "",
    title: rally.title,
    date: rally.date || undefined,
    invite: rally.invite ? extractTextFromRichText(rally.invite) : undefined,
    purpose: rally.purpose || undefined,
    purposeList: rally.purposeList?.map((item) => item.item || "").filter(Boolean),
    rulesList: rally.rulesList?.map((item) => item.item || "").filter(Boolean),
    adviceList: rally.adviceList?.map((item) => item.item || "").filter(Boolean),
    rewards: rally.rewards?.map((item) => item.item || "").filter(Boolean),
    transportHeader: rally.transportHeader || undefined,
    transportList: rally.transportList?.map((item) => item.item || "").filter(Boolean),
    warning: rally.warning || undefined,
    programList: rally.programList?.map((item) => item.item || "").filter(Boolean),
    organizators: rally.organizators?.map((item) => item.item || "").filter(Boolean),
    partners: rally.partners?.map((item) => item.item || "").filter(Boolean),
    taskInfo: rally.taskInfo || undefined,
    tasks: rally.tasks?.map((item) => item.item || "").filter(Boolean),
  };
};

export const getRallyDataBySlug = async (slug: string): Promise<RallyData | null> => {
  const { doc, error } = await fetchBySlug("rallies", slug);

  if (error) {
    console.error("Error fetching rally data by slug:", error);
    throw new Error(error);
  }

  return doc ? mapPayloadRallyToRallyData(doc) : null;
};

// Rally relation data (for relation pages)
export interface RallyRelationData {
  id: string;
  slug: string;
  title: string;
  date?: string;
  relation: string[];
  images: GalleryImage[];
}

const mapPayloadRallyToRelationData = (rally: PayloadRally): RallyRelationData => {
  const gallery = typeof rally.linkedGallery === "string" ? null : rally.linkedGallery;
  
  const images: GalleryImage[] = (gallery?.images || [])
    .map((item) => {
      const media = typeof item.image === "string" ? null : item.image;
      if (!media) return null;

      return {
        src: media.url || "",
        alt: media.alt || item.caption || gallery?.title || "",
      };
    })
    .filter((img): img is GalleryImage => img !== null);

  return {
    id: rally.id,
    slug: rally.slug || "",
    title: rally.title,
    date: rally.date || undefined,
    relation: rally.relation?.map((item) => item.item || "").filter(Boolean) || [],
    images,
  };
};

export const getRallyRelationBySlug = async (slug: string): Promise<RallyRelationData | null> => {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "rallies",
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 2,
    });
    
    if (result.docs.length === 0) {
      return null;
    }

    return mapPayloadRallyToRelationData(result.docs[0]);
  } catch (error) {
    console.error("Error fetching rally relation by slug:", error);
    throw error;
  }
};