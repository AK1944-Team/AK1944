import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { converters } from "@/utils/richtext/converters";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { ImageSlider } from "./ImageSlider";
import { RallyRelationData } from "@/dataAccess/rallies";
import { formatRallyDate } from "../utils/formatRalliesDate";

interface RallyRelationProps {
  rally: RallyRelationData;
}

export const RallyRelation = ({ rally }: RallyRelationProps) => {
  const rallyDate = formatRallyDate(rally.date);

  return (
    <div className="pb-20">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-8 tablet:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          {rally.title}
        </Heading>
        <p className="font-lora text-xl font-bold">{rallyDate}</p>
        {rally.relation ? (
          <RichText
            data={rally.relation}
            converters={converters}
            className="min-w-0"
          />
        ) : (
          <p className="font-lora text-xl">
            Relacja z wydarzenia zostanie dodana wkrótce.
          </p>
        )}

        {rally.images && rally.images.length > 0 && (
          <ImageSlider images={rally.images} />
        )}
      </Container>
    </div>
  );
};
