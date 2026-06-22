import { ParticipationRules } from "../_components/ParticipationRules";
import { getRallyDataBySlug, getRallies } from "@/dataAccess/rallies";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { rallies } = await getRallies({ limit: 100, pagination: false });
  return rallies.map((rally) => ({
    slug: rally.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const rally = await getRallyDataBySlug(slug || "");

  if (!rally) {
    return notFound();
  }

  return <ParticipationRules rally={rally} />;
}
