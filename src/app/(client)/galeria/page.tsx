import { Gallery } from "@/components/Gallery/Gallery";
import { getGalleries } from "@/dataAccess/galleries";
import { SearchParamsProps } from "@/types";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria zdjęć",
  description: "Galeria zdjęć Związku Strzelców II Zgrupowania Armii Krajowej",
};

export default async function GalleryPage({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  const galleries = await getGalleries();

  if (galleries.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="font-sourceSans text-18 text-textDarkGreen">
          Brak galerii do wyświetlenia.
        </p>
      </div>
    );
  }

  return (
    <Gallery
      title="Galeria zdjęć"
      galleries={galleries}
      currentPage={currentPage}
    />
  );
}
