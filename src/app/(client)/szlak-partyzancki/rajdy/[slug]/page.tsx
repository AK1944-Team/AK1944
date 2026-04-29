import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { ParticipationRules } from "../_components/ParticipationRules";
import { getRallyDataBySlug, getRallies } from "@/dataAccess/rallies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const rallies = await getRallies();
  return rallies.map((rally) => ({
    slug: rally.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const rally = await getRallyDataBySlug(slug || "");

  // Jeśli brak danych, ale ścieżka istnieje => pokaż ComingSoon
  if (!rally) {
    return <ComingSoon />;
  }

  return <ParticipationRules rally={rally} />;
}