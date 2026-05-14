import { heroicDefenceSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { FootnoteReferenceText } from "./FootnoteReferenceText";
import Image from "next/image";

const { heroicDefenceTitle, content } = heroicDefenceSection;
const firstPart = content.slice(0, 3);
const secondPart = content.slice(3);

export const HeroicDefenceSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg">
    <Heading variant="h4" color="green" contrast="yellow">
      {heroicDefenceTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {firstPart.map((paragraph) => (
          <p key={paragraph}>
            <FootnoteReferenceText text={paragraph} />
          </p>
        ))}
      </div>
      <Image
        src="/images/history/burza/kaluzowka.webp"
        alt="Punkt sanitarny na Kałużówce. Od lewej: dr Kazimierz Gradziński, Maria Szewczyk, Teresa Langer, dr Jan Szymaszek, Władysława Gubernat, Lucyna Dykier."
        width={2000}
        height={1300}
        className="m-auto w-full max-w-[600px] desktop:hidden"
      />
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {secondPart.map((paragraph) => (
          <p key={paragraph}>
            <FootnoteReferenceText text={paragraph} />
          </p>
        ))}
      </div>
    </div>
  </section>
);
