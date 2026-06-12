import Image, { type ImageProps } from "next/image";
import { type Media } from "@/payload-types";
import { DEFAULT_IMAGE } from "@/utils/constants";

interface FeaturedImageProps extends Omit<ImageProps, "src" | "alt"> {
  featuredImage?: string | null | Media;
  fallbackAlt: string;
}

const CMS_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "https://cms.ak1944.pl";

const getMediaUrl = (url?: string | null) => {
  if (!url) return DEFAULT_IMAGE;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return `${CMS_URL}${normalizedUrl}`;
};

export const FeaturedImage = ({
  featuredImage,
  fallbackAlt,
  ...props
}: FeaturedImageProps) => {
  const media =
    featuredImage && typeof featuredImage === "object" ? featuredImage : null;

  const imageSrc = getMediaUrl(media?.url);

  return (
    <Image
      src={imageSrc}
      alt={media?.alt || fallbackAlt}
      {...props}
    />
  );
};