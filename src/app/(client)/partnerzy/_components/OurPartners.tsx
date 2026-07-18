import { Heading } from "@/components/shared/Heading/Heading";
import { Carousel } from "./Carousel/Carousel";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";
import type { Media } from "@/payload-types";

export const OurPartners = async () => {
  const { docs: partnersData } = await fetchCollection({
    collection: "partners",
    query: { sort: "-createdAt", limit: 0, pagination: false },
  });

  const partners = partnersData.map((p) => ({
    id: p.id,
    name: p.name,
    href: p.href,
    image:
      p.image && typeof p.image === "object"
        ? ((p.image as Media).url ?? undefined)
        : undefined,
  }));

  return (
    <section aria-labelledby="our-partners-heading" className="space-y-6 py-10">
      <Heading
        id="our-partners-heading"
        variant="h4"
        color="green"
        contrast="yellow"
        className="text-center text-2xl tablet:text-26 desktop:text-28"
      >
        Wspierają nas:
      </Heading>

      <Carousel items={partners} />
    </section>
  );
};
