import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import Container from "@/components/shared/Container";
import { biogramsParagraphs } from "./data/biogramsText";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";
import { BiogramsContainer } from "./components/biogramsContainer";

export default async function BiogramsPage() {
  const { docs: biograms } = await fetchCollection({
    collection: "biograms",
    query: { limit: 0, pagination: false, sort: "name" },
  });

  return (
    <div className="pb-20">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-14 tablet:px-20 tablet:pb-36 desktop:px-24"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Biogramy
        </Heading>
        <div className="max-w-4xl">
          {biogramsParagraphs.map((paragraph, idx) => (
            <p key={idx} className="py-4 font-sourceSans text-18">
              {paragraph}
            </p>
          ))}
          <p className="py-4 font-sourceSans text-18 font-bold">
            Niech pamięć o nich trwa wiecznie!
          </p>
        </div>
        <BiogramsContainer biograms={biograms} />
      </Container>
    </div>
  );
}
