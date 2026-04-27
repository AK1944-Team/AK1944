"use client";

import { useState } from "react";
import { GalleryItem } from "./GalleryItem";
import { ImageModal } from "./ImageModal";
import type { GalleryImage } from "@/types";

interface GallerySectionProps {
  title: string;
  date: string;
  images: GalleryImage[];
}

export const GallerySection = ({ title, date, images }: GallerySectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-12">
        <GalleryItem
          subtitle={title}
          date={date}
          images={images}
          onImageClick={handleImageClick}
        />
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        initialIndex={selectedImageIndex}
      />
    </>
  );
};
