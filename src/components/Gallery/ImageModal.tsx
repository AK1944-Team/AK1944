"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ModalCloseIcon } from "@/icons/ModalCloseIcon";
import type { GalleryImage } from "@/types";
import { getMediaUrl } from "@/utils/getMediaUrl";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex: number;
}

export const ImageModal = ({
  isOpen,
  onClose,
  images,
  initialIndex,
}: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [onClose, handlePrev, handleNext],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const currentImageSrc = getMediaUrl(currentImage?.src);

  if (!currentImageSrc) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex={-1}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto flex h-[90vh] w-[90vw] max-w-7xl flex-col items-center justify-center"
      >
        <button
          className="hover:text-gray-300 absolute right-4 top-4 z-30 text-white"
          aria-label="Zamknij modal"
          onClick={onClose}
        >
          <ModalCloseIcon className="h-12 w-12" />
        </button>

        <button
          onClick={handlePrev}
          className="hover:bg-green-800 contrast:hover:bg-yellow-400 absolute left-4 z-20 rounded-sm bg-greenB p-3 contrast:bg-yellowContrast"
          aria-label="Poprzednie zdjęcie"
        >
          <Image
            src="/images/icons/left-arrow-alt.svg"
            alt=""
            aria-hidden="true"
            className="h-6 w-6 contrast:brightness-0"
            width={24}
            height={24}
          />
        </button>

        <div className="relative flex h-full w-full items-center justify-center px-20">
          <div className="relative h-[70%] w-full">
            <Image
              src={currentImageSrc}
              alt={currentImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded bg-greenB px-4 py-2 text-sm font-semibold text-white contrast:bg-yellowContrast contrast:text-black00">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={handleNext}
          className="hover:bg-green-800 contrast:hover:bg-yellow-400 absolute right-4 z-20 rounded-sm bg-greenB p-3 contrast:bg-yellowContrast"
          aria-label="Następne zdjęcie"
        >
          <Image
            src="/images/icons/right-arrow-alt.svg"
            alt=""
            aria-hidden="true"
            className="h-6 w-6 contrast:brightness-0"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};
