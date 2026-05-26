import { separationSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { separationTitle, content } = separationSection;

export const SeparationSection = () => (
  <section className="flex flex-col gap-6 text-lg desktop:flex-row">
    <div className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {separationTitle}
      </Heading>
      <p className="">{content}</p>
    </div>
    <div className="relative m-auto aspect-[1.4] h-full w-full max-w-[604px] flex-shrink-0">
      <Image
        src="/images/history/regiment/independence.webp"
        alt="Obchody Święta Niepodległości w Dębicy. Ppor. Mieczysław Rakoczy na czele II plutonu 3. szwadronu 5. Pułku Strzelców Konnych. Dębica, 11 listopada 1938 r."
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
    </div>
  </section>
);
