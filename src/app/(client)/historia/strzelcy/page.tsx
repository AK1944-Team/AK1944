import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { GenesisSection } from "@/components/History/RegimentPage/GenesisSection";
import { RegimentSection } from "@/components/History/RegimentPage/RegimentSection";
import { CracowBrigadeSection } from "@/components/History/RegimentPage/CracowBrigadeSection";
import { SeparationSection } from "@/components/History/RegimentPage/SeparationSection";
import { WoznikiSection } from "@/components/History/RegimentPage/WoznikiSection";
import { EscapeSection } from "@/components/History/RegimentPage/EscapeSection";
import { RegroupSection } from "@/components/History/RegimentPage/RegroupSection";
import { BilgorajSection } from "@/components/History/RegimentPage/BilgorajSection";
import { FinalClashSection } from "@/components/History/RegimentPage/FinalClashSection";
import { SummarySection } from "@/components/History/RegimentPage/SummarySection";

export default function RegimentPage() {
  return (
    <div>
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-14 tablet:pb-20 desktop:px-24 desktop:pb-150"
      >
        <Breadcrumbs />
        <Heading variant="h3" color="green" contrast="yellow">
          5. Pułk Strzelców Konnych
        </Heading>
        <GenesisSection />
        <RegimentSection />
        <CracowBrigadeSection />
        <SeparationSection />
        <WoznikiSection />
        <EscapeSection />
        <RegroupSection />
        <BilgorajSection />
        <FinalClashSection />
        <SummarySection />
      </Container>
    </div>
  );
}
