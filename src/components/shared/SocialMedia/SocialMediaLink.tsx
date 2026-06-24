import type { Media } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_IMAGE } from "../../../utils/constants";

interface Props {
  size?: number;
  url?: string;
  name?: string;
  svg?: string | Media | null;
}

export const SocialMediaLink = ({ size = 32, url, name, svg }: Props) => {
  if (!url || !svg || typeof svg === "string" || !svg.url) {
    return null;
  }

  return (
    <Link
      href={url}
      title={name}
      aria-label={`Oficjalna strona Szlaku Partyzanckiego na ${name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <Image
        src={svg.url ? svg.url : DEFAULT_IMAGE}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
      />
    </Link>
  );
};
