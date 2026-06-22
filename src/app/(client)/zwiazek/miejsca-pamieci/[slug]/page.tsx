import {
  getMemorialPlaces,
  getMemorialPlaceBySlug,
} from "@/dataAccess/memorialPlaces";
import Container from "@/components/shared/Container";
import { MemorialHeadingSection } from "@/components/MemorialPlace/MemorialHeadingSection";
import { MemorialContentSection } from "@/components/MemorialPlace/MemorialContentSection";
import { MemorialRelatedPlaces } from "@/components/MemorialPlace/MemorialRelatedPlaces";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { places } = await getMemorialPlaces({ limit: 100, pagination: false });
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const place = await getMemorialPlaceBySlug(slug || "");

  if (!place) {
    notFound();
  }

  return (
    <Container className="mx-auto max-w-5xl p-4 pb-20">
      <MemorialHeadingSection name={place.name} location={place.location} />
      <MemorialContentSection place={place} />
      <MemorialRelatedPlaces currentSlug={place.slug} />
    </Container>
  );
}
