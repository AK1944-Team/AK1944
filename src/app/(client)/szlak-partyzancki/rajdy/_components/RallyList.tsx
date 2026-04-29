import { Button } from "@/components/shared/Button/Button";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { getRallies } from "@/dataAccess/rallies";
import { Pagination } from "@/components/shared/Pagination";
import { PageProps } from "@/types";

export const RallyList = async ({ currentPage }: PageProps) => {
  const allRallies = await getRallies();
  const ITEMS_PER_PAGE = 4;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRallies = allRallies.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="px-4 desktop:px-8">
      {paginatedRallies.map((rally) => (
        <div
          key={rally.id}
          className="relative grid grid-cols-1 items-center gap-6 tablet:grid-cols-2"
        >
          <div className="absolute bottom-0 top-0 z-0 mt-10 mobile:left-[10px] tablet:left-[18px] desktop:left-[-24px]">
            <div className="h-full w-1 bg-textDarkGreen" />
          </div>
          <div className="absolute top-4 z-10 h-4 w-4 rounded-full bg-textDarkGreen mobile:left-[5px] tablet:left-[12px] desktop:left-[-30px]" />
          <div className="relative z-10 order-2 mx-auto h-96 w-[80%] mobile:ml-12 tablet:order-2 desktop:ml-0 desktop:w-[100%]">
            <Image
              src={rally.imageUrl ?? "/images/placeholder_image.webp"}
              alt={rally.title ?? "Brak tytułu"}
              sizes="80vw"
              fill
              className="object-cover pb-20"
            />
          </div>

          <div className="relative z-10 order-1 flex tablet:order-1">
            <article className="ml-14 space-y-4 pb-5 tablet:pb-24">
              <Heading
                variant="h2"
                color="green"
                contrast="yellow"
                className="mb-2"
              >
                {rally.title}
              </Heading>
              <Heading
                variant="h4"
                color="green"
                contrast="yellow"
                className="mb-2"
              >
                {rally.date}
              </Heading>
              <p className="text-gray-700 pb-4 pt-1 font-sourceSans text-18">
                {rally.description}
              </p>
              <div className="flex flex-wrap gap-5">
                <Button
                  label="Zasady uczestnictwa"
                  href={`/szlak-partyzancki/rajdy/${rally.slug}`}
                  ariaDescription={`Zasady uczestnictwa dla ${rally.title}`}
                  variant="secondary"
                  className="text-textDarkGreen"
                />
                <Button
                  label="Zobacz relację"
                  href={`/szlak-partyzancki/rajdy/relacja/${rally.slug}`}
                  ariaDescription={`Zobacz relację dla ${rally.title}`}
                  variant="secondary"
                  className="text-textDarkGreen"
                />
              </div>
            </article>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(allRallies.length / ITEMS_PER_PAGE)}
        basePath="/szlak-partyzancki/rajdy"
      />
    </div>
  );
};