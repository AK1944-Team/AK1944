"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { GalleryImage } from "@/types";
import { getMediaUrl } from "@/utils/getMediaUrl";

interface GallerySliderProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export const GallerySlider = ({ images, onImageClick }: GallerySliderProps) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const isDesktop = useMediaQuery("(min-width: 1280px)", false);
  const isTablet = useMediaQuery("(min-width: 768px)", false);

  const visibleSlides = isDesktop ? 4 : isTablet ? 3 : 2;
  const showArrows = isTablet;

  const pageCount = Math.ceil(images.length / visibleSlides);

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, pageCount - 1));
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const distance = touchStartX.current - e.changedTouches[0].screenX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {showArrows && (
        <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="hover:bg-green-800 contrast:hover:bg-yellow-400 rounded-sm bg-greenB p-3 disabled:opacity-50 contrast:bg-yellowContrast"
            aria-label="Poprzednie zdjęcia"
            disabled={index === 0}
          >
            <Image
              src="/images/icons/left-arrow-alt.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6 contrast:brightness-0"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}

      {showArrows && (
        <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <button
            onClick={handleNext}
            className="hover:bg-green-800 contrast:hover:bg-yellow-400 rounded-sm bg-greenB p-3 disabled:opacity-50 contrast:bg-yellowContrast"
            aria-label="Następne zdjęcia"
            disabled={index === pageCount - 1}
          >
            <Image
              src="/images/icons/right-arrow-alt.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6 contrast:brightness-0"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}

      <div
        className={clsx(
          "w-full overflow-hidden",
          showArrows ? "px-12" : "px-0",
        )}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((image, id) => {
            const imageSrc = getMediaUrl(image.src);

            if (!imageSrc) return null;

            return (
              <div
                key={id}
                style={{ width: `${100 / visibleSlides}%` }}
                className="flex-shrink-0 px-2"
              >
                <button
                  onClick={() => onImageClick(id)}
                  className="h-full w-full cursor-pointer transition-opacity hover:opacity-80"
                >
                  <div className="bg-gray-200 relative aspect-square w-full">
                    <Image
                      src={imageSrc}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {pageCount > 1 && (
        <div className="mt-6 flex justify-center gap-1">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={clsx(
                "h-2 w-2 rounded-full transition-colors",
                index === i ? "bg-greenMain" : "bg-greenLight",
              )}
              aria-label={`Przejdź do slajdu ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
