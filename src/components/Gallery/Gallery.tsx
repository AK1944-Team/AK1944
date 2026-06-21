"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { GalleryItem } from "./GalleryItem";
import { ImageModal } from "./ImageModal";
import { Pagination } from "@/components/shared/Pagination";
import type { GalleryImage, GalleryData } from "@/types";

interface GalleryProps {
  title: string;
  galleries: GalleryData[];
  currentPage: number;
  totalPages: number;
}

export const Gallery = ({
  title,
  galleries,
  currentPage,
  totalPages,
}: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState<
    GalleryImage[]
  >([]);

  const handleImageClick = (galleryImages: GalleryImage[], index: number) => {
    setSelectedGalleryImages(galleryImages);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <Container className="py-5">
        <Breadcrumbs />
        <div className="mb-8 mt-5">
          <Heading variant="h2" color="green" contrast="yellow">
            {title}
          </Heading>
        </div>

        <div className="space-y-8">
          {galleries.map((gallery) => (
            <GalleryItem
              key={gallery.id}
              subtitle={gallery.subtitle}
              date={gallery.date}
              images={gallery.images}
              link={gallery.link}
              onImageClick={(index) => handleImageClick(gallery.images, index)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/galeria"
          />
        )}
      </Container>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={selectedGalleryImages}
        initialIndex={selectedImageIndex}
      />
    </>
  );
};
