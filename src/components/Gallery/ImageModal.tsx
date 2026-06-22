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

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  }, []);

  const onTouchEnd = useCallback(() => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  }, [handleNext, handlePrev]);

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
          className="hover:text-gray-300 absolute right-2 top-2 z-30 text-white sm:right-4 sm:top-4"
          aria-label="Zamknij modal"
          onClick={onClose}
        >
          <ModalCloseIcon className="h-10 w-10 sm:h-12 sm:w-12" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hover:bg-green-800 contrast:hover:bg-yellow-400 absolute left-2 z-20 rounded-sm bg-greenB p-2 contrast:bg-yellowContrast sm:left-4 sm:p-3"
          aria-label="Poprzednie zdjęcie"
        >
          <Image
            src="/images/icons/left-arrow-alt.svg"
            alt=""
            aria-hidden="true"
            className="h-5 w-5 contrast:brightness-0 sm:h-6 sm:w-6"
            width={24}
            height={24}
          />
        </button>

        <div
          className="relative flex h-full w-full items-center justify-center px-12 sm:px-20"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative h-[75vh] w-full sm:h-[85vh]">
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

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-greenB px-3 py-1 text-xs font-semibold text-white contrast:bg-yellowContrast contrast:text-black00 sm:bottom-8 sm:px-4 sm:py-2 sm:text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hover:bg-green-800 contrast:hover:bg-yellow-400 absolute right-2 z-20 rounded-sm bg-greenB p-2 contrast:bg-yellowContrast sm:right-4 sm:p-3"
          aria-label="Następne zdjęcie"
        >
          <Image
            src="/images/icons/right-arrow-alt.svg"
            alt=""
            aria-hidden="true"
            className="h-5 w-5 contrast:brightness-0 sm:h-6 sm:w-6"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};
