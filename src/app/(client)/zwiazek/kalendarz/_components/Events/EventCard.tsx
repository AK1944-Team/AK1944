import { Heading } from "@/components/shared/Heading/Heading";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { converters } from "@/utils/richtext/converters";
import type { CalendarEvent } from "@/dataAccess/calendar";
import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";

interface CardProps {
  anchorId?: string;
  isLast?: boolean;
  calendar: CalendarEvent;
}

export const EventCard = ({
  anchorId,
  calendar: { title, featuredImage, date, description },
  isLast,
}: CardProps) => (
  <div
    id={anchorId}
    className={`flex w-full flex-col items-start gap-2 pb-10 tablet:flex-row tablet:gap-11 ${isLast ? "last:border-b-0" : "border-b-4 border-b-textDarkGreen"} `}
  >
    <div className="relative flex aspect-square h-52 w-52 items-center justify-center self-center tablet:h-52 tablet:w-52">
      <FeaturedImage
        featuredImage={featuredImage}
        fallbackAlt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="col-span-2 flex flex-col items-start gap-2">
      <Heading
        color="green"
        contrast="yellow"
        variant="h4"
        className="tracking-tight tablet:text-32"
      >
        {title}
      </Heading>
      <p className="text-18 tablet:font-lora tablet:text-24 tablet:font-bold">
        {date}
      </p>
      {description && (
        <RichText
          data={description}
          converters={converters}
          className="min-w-0"
        />
      )}
    </div>
  </div>
);
