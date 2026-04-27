import { type ElementType, type ReactNode } from "react";

export interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface Image {
  source_url: string;
  title: string;
}

export type IconName =
  | "award"
  | "check"
  | "coffee"
  | "compass"
  | "file"
  | "gift"
  | "help"
  | "info"
  | "send"
  | "target";

export interface IconProps extends DefaultIconProps {
  name: IconName;
}

export interface DefaultIconProps {
  className?: string;
}
export interface SubmenuItem {
  href: string;
  label: string;
}

export interface PlaceDetails {
  id: number;
  slug: string;
  name: string;
  location: string;
  description: string;
  highlight?: string | { text: string; align: "left" | "center" | "right" }[];
  descriptionContinuation?: string;
  image?: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export interface NavItem {
  href: string;
  label: string;
}

export type ActionState =
  | { status: "idle"; message?: string }
  | { status: "success"; message?: string }
  | { status: "error"; message?: string; issues?: Record<string, string[]> };

export type PageProps = {
  currentPage: number;
};

export type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

// Gallery types
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  id: string;
  subtitle: string;
  date: string;
  images: GalleryImage[];
}
