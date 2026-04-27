"use client";

import { GallerySlider } from "./GallerySlider";
import type { GalleryImage } from "@/types";

interface GalleryItemProps {
  subtitle: string;
  date: string;
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export const GalleryItem = ({
  subtitle,
  date,
  images,
  onImageClick,
}: GalleryItemProps) => {
  return (
    <div className="border-b border-gray-200 pb-8 last:border-b-0">
      <div className="mb-6">
        <h3 className="font-lora text-2xl font-bold">{subtitle}</h3>
        <p className="mt-2 font-sourceSans text-lg text-gray-600">{date}</p>
      </div>

      <GallerySlider images={images} onImageClick={onImageClick} />
    </div>
  );
};
