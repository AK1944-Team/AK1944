"use client";

import Link from "next/link";
import { GallerySlider } from "./GallerySlider";
import type { GalleryImage, GalleryData } from "@/types";

interface GalleryItemProps {
  subtitle: string;
  date: string;
  images: GalleryImage[];
  link?: string;
  onImageClick: (index: number) => void;
}

export const GalleryItem = ({
  subtitle,
  date,
  images,
  link,
  onImageClick,
}: GalleryItemProps) => {
  return (
    <div className="border-gray-200 border-b pb-8 last:border-b-0">
      <div className="mb-6">
        {link ? (
          <h3 className="font-lora text-2xl font-bold">
            <Link
              href={link}
              className="hover:text-green-700 transition-colors"
            >
              {subtitle}
            </Link>
          </h3>
        ) : (
          <h3 className="font-lora text-2xl font-bold">{subtitle}</h3>
        )}
        <p className="text-gray-600 mt-2 font-sourceSans text-lg">{date}</p>
      </div>

      <GallerySlider images={images} onImageClick={onImageClick} />
    </div>
  );
};
