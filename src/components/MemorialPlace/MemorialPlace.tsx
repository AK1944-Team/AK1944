import { PlaceDetails } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import { IconMapPin } from "@/icons/IconMapPin";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { getMediaUrl } from "@/utils/getMediaUrl";

export const MemorialPlace = ({ place }: { place: PlaceDetails }) => {
  const imageUrl = getMediaUrl(place.image);

  return (
    <article className="flex w-full flex-col gap-6 border-b border-textDarkGreen pb-8 font-lora tablet:grid tablet:grid-cols-[1.6fr_1fr] tablet:border-b-4 desktop:grid-cols-[1fr_1.2fr_0.8fr]">
      <div className="order-1 text-left tablet:order-1 tablet:col-start-1 tablet:col-span-1 desktop:order-2 desktop:col-start-2 desktop:col-span-2">
        <Heading
          variant="h2"
          contrast="yellow"
          color="green"
          className="text-[1.5rem] font-bold tablet:text-[1.75rem] desktop:text-[2rem]"
        >
          {place.name}
        </Heading>

        <div className="mt-4 flex items-center gap-2 text-textLightGreen">
          <IconMapPin className="size-4" aria-hidden="true" />
          <p className="font-sourceSans text-[1.25rem] font-bold text-textLightGreen tablet:text-[1.75rem] desktop:text-[1.5rem]">
            {place.location}
          </p>
        </div>
      </div>

      <div className="order-2 w-full tablet:order-2 tablet:col-start-2 tablet:col-span-1 desktop:order-1 desktop:col-start-1 desktop:col-span-1 desktop:row-span-2 desktop:items-start">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={place.name}
            width={288}
            height={191}
            className="rounded-desktop size-[191px] w-full object-cover transition-all duration-300 tablet:size-[200px] desktop:size-[250px]"
          />
        ) : (
          <figure className="rounded-desktop flex h-[200px] items-center justify-center bg-gray-200 text-gray-600 contrast:bg-yellowContrast contrast:text-yellowContrast">
            <figcaption className="text-center text-sm italic">
              zdjęcie nie jest dostępne
            </figcaption>
          </figure>
        )}
      </div>

      <div className="order-3 flex flex-col gap-4 text-left tablet:order-3 tablet:col-start-1 tablet:col-span-1 desktop:order-3 desktop:col-start-2 desktop:col-span-1">
        <p className="line-clamp-3 font-sourceSans text-xl">
          {place.description}
        </p>

        <div className="mt-4 flex w-full justify-center tablet:hidden">
          <Button
            label="Czytaj więcej"
            variant="secondary"
            className="rounded-desktop min-w-[150px]"
            ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
            href={`/zwiazek/miejsca-pamieci/${place.slug}`}
          />
        </div>
      </div>

      <div className="order-4 hidden tablet:flex tablet:col-start-2 tablet:col-span-1 tablet:items-start tablet:justify-center desktop:flex desktop:col-start-3 desktop:items-right desktop:justify-right">
        <Button
          label="Czytaj więcej"
          variant="secondary"
          className="rounded-desktop min-w-[150px]"
          ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
          href={`/zwiazek/miejsca-pamieci/${place.slug}`}
        />
      </div>
    </article>
  );
};