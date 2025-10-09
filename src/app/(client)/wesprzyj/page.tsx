import { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { ContactSection } from "./_components/ContactSection";
import { DonationSection } from "./_components/DonationSection";
import { PartnerSection } from "./_components/PartnerSection";
import { SupportNav } from "./_components/SupportNav";
import { TaxSection } from "./_components/TaxSection";
import { VolunteerSection } from "./_components/VolunteerSection";
import { ThankYou } from "@/components/shared/ThankYou";

export const metadata: Metadata = {
  title: "Wesprzyj",
  description: "Wesprzyj naszą działalność",
};

export default function SupportPage() {
  return (
    <div className="tablet:pb-20 desktop:pb-150">
      <Container as="main" className="space-y-20">
        <div className="space-y-4 desktop:space-y-10">
          <Breadcrumbs />
          <SupportNav />
        </div>
        <TaxSection />
        <DonationSection />
        <PartnerSection />
        <VolunteerSection />
        <ContactSection />
        <ThankYou title="Z głębi serca dziękujemy za okazane wsparcie!" />
      </Container>
    </div>
  );
}
