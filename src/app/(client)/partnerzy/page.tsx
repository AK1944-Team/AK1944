import { Metadata } from "next";

import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { ThankYou } from "@/components/shared/ThankYou";

import { Paragraph } from "./_components/Paragraph";
import { BulletList } from "./_components/BulletList/BulletList";
import { Partnership } from "./_components/Partnership";
import { OurPartners } from "./_components/OurPartners";

import { ThreadIcon } from "@/icons/ThreadIcon";

import { AK_DATA } from "@/data/akData";

export const metadata: Metadata = {
  description:
    "Dziękujemy partnerom Armii Krajowej za wsparcie naszej misji upamiętniania bohaterów.",
};

export default function PartnersPage() {
  return (
    <div className="text-textDarkGreen tablet:pb-20">
      <Container as="main" className="space-y-10">
        <Breadcrumbs />

        <h2 className="mb-10 mt-5 font-lora text-3xl font-bold desktop:mt-10">
          Partnerzy
        </h2>

        <div className="flex flex-col items-center desktop:flex-row desktop:gap-20">
          <div className="w-full space-y-8">
            <Paragraph title="Dziękujemy za wsparcie">
              Nasza misja –{" "}
              <strong>upamiętnianie bohaterów Armii Krajowej</strong> – nie
              byłaby możliwa bez wsparcia naszych partnerów. Dziękujemy
              instytucjom, organizacjom i firmom, które pomagają nam w
              edukowaniu kolejnych pokoleń o historii Polski i jej bohaterach.
            </Paragraph>

            <div className="tablet:hidden">
              <Partnership />
            </div>

            <Paragraph title="Jak zostać partnerem?">
              Jeśli chcesz dołączyć do grona naszych partnerów i wspólnie
              działać na rzecz upamiętnienia historii Armii Krajowej, zapraszamy
              do kontaktu. Współpracujemy z instytucjami, organizacjami, firmami
              oraz osobami prywatnymi, które podzielają naszą misję
              pielęgnowania pamięci o bohaterach walczących o wolność Polski.
            </Paragraph>

            <BulletList points={points} />

            <Paragraph>
              Jeśli masz pomysł na współpracę lub chcesz dowiedzieć się więcej,
              napisz do nas na adres e-mail <strong>{AK_DATA.email}</strong> lub
              skontaktuj się telefonicznie <strong>{AK_DATA.phone}</strong>.
            </Paragraph>
          </div>

          <div className="hidden tablet:block">
            <Partnership />
          </div>
        </div>

        <div className="overflow-hidden">
          <ThreadIcon className="mx-auto p-2" />
        </div>

        <OurPartners />

        <ThankYou title="Serdecznie dziękujemy za owocną współpracę!" />
      </Container>
    </div>
  );
}

const points = [
  "Wsparcie wydarzeń edukacyjnych i historycznych.",
  "Patronaty medialne i promowanie inicjatyw związanych z historią AK.",
  "Wspólne projekty badawcze i publikacje.",
  "Wsparcie finansowe lub rzeczowe na cele upamiętnienia i edukacji.",
];
