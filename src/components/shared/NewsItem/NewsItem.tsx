import { NewsHeader } from "../NewsHeader/NewsHeader";
import { NewsContent } from "../NewsContent/NewsContent";

import type { Media, News } from "@/payload-types";
import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";

type NewsItemProps = {
  newsItem: News & { image?: Media };
};

export const NewsItem = ({ newsItem }: NewsItemProps) => {
  const safeSlug = newsItem.slug || newsItem.id;
  return (
    <article
      key={newsItem.id}
      className="flex w-full flex-col items-start justify-start gap-3 text-20 tablet:grid tablet:gap-x-6 tablet:gap-y-3"
    >
      <NewsHeader title={newsItem.title} date={newsItem.publishedAt} />
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg tablet:col-start-1 tablet:row-span-2 tablet:row-start-1 tablet:w-[22rem] desktop:w-[20rem]">
        <FeaturedImage
          featuredImage={newsItem.featuredImage}
          fallbackAlt={newsItem.title}
          fill
          sizes="(min-width: 1280px) 20rem, (min-width: 768px) 22rem, 100vw"
          className="object-cover"
        />
      </div>
      <NewsContent
        content={newsItem.content}
        slug={safeSlug}
        title={newsItem.title}
      />
    </article>
  );
};
