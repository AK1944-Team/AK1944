import { SupportSection } from "../SupportSection";
import { VolunteerCard } from "./VolunteerCard";

export const VolunteerSection = () => (
  <SupportSection
    id="volunteer-section"
    title="Zostań wolontariuszem"
    card={<VolunteerCard />}
  >
    <p>
      Dołącz do osób, które z pasją i sercem wspierają naszą misję. Jako
      wolontariusz możesz pomóc przy organizacji wydarzeń, współtworzyć
      materiały edukacyjne, wspierać nas w działaniach online – także przy
      aktualizacji strony internetowej czy tworzeniu treści.
    </p>
    <p id="volunteer-list-heading">Dlaczego warto zostać wolontariuszem?</p>
    <ul
      aria-labelledby="volunteer-list-heading"
      className="-mt-6 list-disc pl-6"
    >
      <li>Bierzesz udział w żywej lekcji historii,</li>
      <li>
        Spotykasz ludzi, których łączy wspólna idea i nawiązujesz wartościowe
        relacje,
      </li>
      <li>Zyskujesz cenne doświadczenie i rozwijasz swoje umiejętności,</li>
      <li>Dajesz coś od siebie – i realnie zmieniasz świat wokół.</li>
    </ul>
  </SupportSection>
);
