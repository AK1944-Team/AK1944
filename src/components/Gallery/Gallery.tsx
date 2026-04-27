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
  itemsPerPage?: number;
}

export const Gallery = ({
  title,
  galleries,
  currentPage,
  itemsPerPage = 4,
}: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState<
    GalleryImage[]
  >([]);

  const totalPages = Math.ceil(galleries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGalleries = galleries.slice(startIndex, endIndex);

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
          {currentGalleries.map((gallery) => (
            <GalleryItem
              key={gallery.id}
              subtitle={gallery.subtitle}
              date={gallery.date}
              images={gallery.images}
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
