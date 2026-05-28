import { cracowBrigadeSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

const { cracowBrigadeTitle, content } = cracowBrigadeSection;

const renderText = (text: string) => {
  const parts = text.split(/\*([^*]+)\*/g);

  return parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
};
const firstPart = content.slice(0, 2);
const secondPart = content.slice(2);

export const CracowBrigadeSection = () => (
  <section className="flex flex-col gap-6 text-lg">
    <Heading variant="h4" color="green" contrast="yellow">
      {cracowBrigadeTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstPart.map((paragraph) => (
          <p key={paragraph}>{renderText(paragraph)}</p>
        ))}
        <div className="relative m-auto aspect-[1.4] w-full max-w-[600px] desktop:hidden desktop:w-1/2">
          <Image
            src="/images/history/regiment/regiment.webp"
            alt="Musztra paradna podczas święta 5. Pułku Strzelców Konnych w Dębicy w 1938 r."
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {secondPart.map((paragraph) => (
          <p key={paragraph}>{renderText(paragraph)}</p>
        ))}
      </div>
    </div>
  </section>
);
