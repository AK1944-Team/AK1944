import { Heading } from "@/components/shared/Heading/Heading";

export const VolunteerBenefits = () => (
  <section className="mt-6 space-y-6">
    <Heading color="green" contrast="yellow" variant="h3" className="mb-6">
      Jako wolontariusz/ka:
    </Heading>
    <ul className="max-w-[716px] list-disc space-y-2 pl-6 text-20">
      <li>
        Zdobędziesz doświadczenie przy projektach edukacyjnych, medialnych i
        organizacyjnych,
      </li>
      <li>
        Rozwiniesz swoje umiejętności – od pracy z mediami społecznościowymi po
        organizację wydarzeń,
      </li>
      <li>
        Poznasz niezwykłych ludzi – kombatantów, pasjonatów historii, innych
        wolontariuszy,
      </li>
      <li>Zyskasz poczucie sensu – robisz coś, co naprawdę ma wartość,</li>
      <li>
        Otrzymasz zaświadczenie o wolontariacie, możliwość poleceń, a w wielu
        przypadkach także wsparcie mentorskie.
      </li>
    </ul>
  </section>
);
