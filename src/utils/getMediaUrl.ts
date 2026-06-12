const CMS_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "https://cms.ak1944.pl";

export const getMediaUrl = (
  url?: string | null,
  fallback?: string,
): string | null => {
  if (!url) return fallback ?? null;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return `${CMS_URL}${normalizedUrl}`;
};