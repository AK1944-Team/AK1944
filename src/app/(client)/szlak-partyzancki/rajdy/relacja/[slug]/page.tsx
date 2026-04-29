import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { RallyRelation } from "../../_components/RallyRelation";
import { getRallyRelationBySlug, getRallies } from "@/dataAccess/rallies";

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
  const rally = await getRallyRelationBySlug(slug || "");

  if (!rally) {
    return <ComingSoon />;
  }

  return <RallyRelation rally={rally} />;
}