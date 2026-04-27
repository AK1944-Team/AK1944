"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { GalleryImage } from "@/types";

interface GallerySliderProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export const GallerySlider = ({ images, onImageClick }: GallerySliderProps) => {
  const [index, setIndex] = useState(0);
  
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

  return (
    <div className="relative w-full overflow-hidden py-6">
      {showArrows && (
        <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="rounded-sm bg-greenB p-3 hover:bg-green-800 disabled:opacity-50 contrast:bg-yellowContrast contrast:hover:bg-yellow-400"
            aria-label="Poprzednie zdjęcia"
            disabled={index === 0}
          >
            <Image
              src="/images/icons/left-arrow-alt.svg"
              alt="Strzałka w lewo"
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
            className="rounded-sm bg-greenB p-3 hover:bg-green-800 disabled:opacity-50 contrast:bg-yellowContrast contrast:hover:bg-yellow-400"
            aria-label="Następne zdjęcia"
            disabled={index === pageCount - 1}
          >
            <Image
              src="/images/icons/right-arrow-alt.svg"
              alt="Strzałka w prawo"
              className="h-6 w-6 contrast:brightness-0"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}

      <div className={clsx("w-full overflow-hidden", showArrows ? "px-12" : "px-0")}>
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((image, id) => {
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
                  <div className="relative aspect-square w-full bg-gray-200">
                    <Image
                      src={image.src}
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
    </div>
  );
};
