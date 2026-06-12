import { Heading } from "@/components/shared/Heading/Heading";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";
import type { Media } from "@/payload-types";
import { BIOGRAM_BG_IMAGE } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const CMS_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "https://cms.ak1944.pl";

const BIOGRAM_PLACEHOLDER_IMAGE =
  "/images/biogramy/BiogramPlaceholderImage.webp";

const getMediaUrl = (url?: string | null, fallback = BIOGRAM_PLACEHOLDER_IMAGE) => {
  if (!url) return fallback;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return `${CMS_URL}${normalizedUrl}`;
};

export default async function MorePeopleBiograms({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const { docs: biograms } = await fetchCollection({
    collection: "biograms",
    query: {
      limit: 100,
      pagination: false,
    },
  });

  const filteredPeople = biograms.filter(
    (person) => person.slug !== currentSlug,
  );

  const randomPeople = [...filteredPeople]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="p-4">
      <Heading variant="h2" contrast="yellow" color="green">
        Sprawdź też
      </Heading>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 pt-16 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-14">
        {randomPeople.map(({ id, name, portrait, slug }) => {
          const media =
            portrait && typeof portrait === "object"
              ? (portrait as Media)
              : null;

          const portraitUrl = getMediaUrl(media?.url);
          const hasPortrait = Boolean(media?.url);

          return (
            <div key={id} className="flex flex-col items-center rounded p-4">
              <Link href={`/biogramy/${slug}`}>
                <div className="relative h-[350px] w-[288px]">
                  <Image
                    src={portraitUrl}
                    alt={media?.alt || name}
                    width={288}
                    height={350}
                    className="h-[350px] w-[288px] cursor-pointer rounded object-cover p-4 transition-opacity hover:opacity-80 tablet:h-[350px]"
                  />

                  {hasPortrait && (
                    <Image
                      src={BIOGRAM_BG_IMAGE}
                      alt=""
                      aria-hidden="true"
                      fill
                      className="absolute left-0 top-0 -z-10 h-full w-full rounded object-cover transition-opacity hover:opacity-80"
                    />
                  )}
                </div>
              </Link>

              <Heading
                variant="h4"
                contrast="yellow"
                color="green"
                className="pt-5"
              >
                {name}
              </Heading>
            </div>
          );
        })}
      </div>
    </div>
  );
}