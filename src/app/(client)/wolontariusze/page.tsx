import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { VolunteerIntro } from "./components/VolunteerIntro";
import { VolunteerBenefits } from "./components/VolunteerBenefits";
import { VolunteerSupport } from "./components/VolunteerSupport";
import { VolunteerJoin } from "./components/VolunteerJoin";
import { VolunteerGallery } from "./components/VolunteerGallery";
import { volunteersData } from "../../../data/volunteersData";

export const metadata: Metadata = {
  title: "Zostań wolontariuszem",
  description: "Dołącz do naszej organizacji jako wolontariusz",
};

export default function VolunteersPage() {
  return (
    <div className="tablet:pb-20 desktop:pb-150">
      <Container as="main" className="space-y-20">
        <Breadcrumbs currentPageLabel="Zostań wolontariuszem" />
        <VolunteerIntro />
        <VolunteerBenefits />
        <VolunteerSupport />
        <VolunteerJoin />
        <VolunteerGallery volunteers={volunteersData} />
      </Container>
    </div>
  );
}
