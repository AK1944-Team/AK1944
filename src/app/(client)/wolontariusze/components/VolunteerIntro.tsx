import { Heading } from "@/components/shared/Heading/Heading";
import { SupportSection } from "../../wesprzyj/_components/SupportSection";
import { VolunteerCard } from "../../wesprzyj/_components/VolunteerSection/VolunteerCard";

export const VolunteerIntro = () => (
  <SupportSection
    id="volunteer-main-section"
    title="Zostań wolontariuszem"
    card={
      <VolunteerCard buttonText="Wypełnij formularz" href="#volunteer-form" />
    }
  >
    <div className="space-y-6">
      <div className="mt-5 space-y-4">
        <Heading color="green" contrast="yellow" variant="h3" className="mb-10">
          Dlaczego warto zostać wolontariuszem ŚZŻAK?
        </Heading>
        <p>
          Historia nie przetrwa sama – potrzebuje ludzi. Potrzebuje Ciebie.
          Każde wspomnienie, które dziś żyje, każda opowieść, którą możemy
          usłyszeć – to coś więcej niż przeszłość i podręczniki. To świadectwo
          odwagi, poświęcenia i miłości do ojczyzny. Jako Światowy Związek
          Żołnierzy Armii Krajowej czujemy odpowiedzialność, by tę pamięć nieść
          dalej – prawdziwie, z szacunkiem, w sposób, który nie przemija.
        </p>
      </div>

      <div className="space-y-6">
        <p>
          Wolontariat w naszej organizacji to nie tylko pomoc – to
          współtworzenie żywej historii. To obecność tam, gdzie przeszłość
          spotyka się z przyszłością. Twoje zaangażowanie pomoże nam docierać do
          kolejnych pokoleń, pokazywać, czym jest patriotyzm, i dawać
          świadectwo, które nie przemija.
        </p>
      </div>
      <p>To również szansa dla Ciebie!</p>
    </div>
  </SupportSection>
);
