"use client";
import { useState } from "react";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { cn } from "@/utils";

interface Props {
  id: string;
  name: string;
  description: string;
}

export const PlaceItem = ({ place }: { place: Props }) => {
  const [openDescription, setOpenDescription] = useState<Set<string>>(
    new Set(),
  );
  const toggleDescription = (id: string) => {
    setOpenDescription((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <li key={place.id}>
      <button
        type="button"
        className="flex items-center gap-3 md:pointer-events-none desktop:items-baseline"
        onClick={() => toggleDescription(place.id)}
        aria-label={`Rozwiń opis dla: ${place.name}`}
        aria-expanded={openDescription.has(place.id) ? "true" : "false"}
        aria-controls={`place-description-${place.id}`}
      >
        <div className="h-4 w-4 flex-shrink-0 rounded-full bg-redMain contrast:bg-yellowContrast" />
        <p className="text-start text-lg">
          {place.name}
          <span className="hidden md:inline">{" " + place.description}</span>
        </p>
        <IconChevronDown
          className={cn(
            "size-7 transition-transform tablet:hidden desktop:hidden",
            openDescription.has(place.id) ? "rotate-180" : "rotate-0",
          )}
          aria-hidden="true"
        />
      </button>
      <p
        className={cn(
          "mt-2 text-lg",
          !openDescription.has(place.id) ? "hidden" : "inline",
        )}
      >
        <span className="md:hidden">{place.description}</span>
      </p>
    </li>
  );
};
