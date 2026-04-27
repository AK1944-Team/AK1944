import { Button } from "@/components/shared/Button/Button";
import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";
import { extractTextFromRichText, getExcerpt } from "@/utils";
import type { News } from "@/payload-types";

const EXCERPT_WORD_LIMIT = 70;

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const Card = ({ newsItem }: { newsItem: News }) => {
  const extractedText = extractTextFromRichText(newsItem.content);
  const newsContent = getExcerpt(extractedText, EXCERPT_WORD_LIMIT);

  return (
    <li className="w-full border-b-4 border-greenMain pb-10">
      <div className="grid gap-6 tablet:grid-cols-[22rem_minmax(0,1fr)] tablet:gap-x-10 tablet:gap-y-6 desktop:grid-cols-[26rem_minmax(0,1fr)]">
        <h2 className="font-lora text-28 font-bold leading-none tablet:col-start-2 tablet:row-start-1 tablet:text-32">
          {newsItem.title}
        </h2>
        <div className="relative aspect-[4/3] w-full overflow-hidden tablet:col-start-1 tablet:row-span-2 tablet:row-start-1 tablet:w-[22rem] desktop:w-[26rem]">
          <FeaturedImage
            featuredImage={newsItem.featuredImage}
            fallbackAlt={newsItem.title}
            fill
            sizes="(min-width: 1280px) 26rem, (min-width: 768px) 22rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="tablet:col-start-2 tablet:row-start-2">
          <p className="text-xl">{newsContent}</p>
          <div className="mt-10 flex flex-col gap-4 tablet:flex-row tablet:items-end tablet:justify-between">
            <p className="text-xl text-greenMain opacity-80">
              Opublikowano:{" "}
              {newsItem.publishedAt &&
                dateFormatter.format(new Date(newsItem.publishedAt))}
            </p>
            <Button
              className="self-center"
              variant="secondary"
              href={`/archiwum/${newsItem.slug}`}
              label="Czytaj dalej"
              ariaDescription="Czytaj dalej"
            >
              Czytaj dalej
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
