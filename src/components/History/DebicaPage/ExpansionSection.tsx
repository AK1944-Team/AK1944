import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { expansionSection } from "@/data/historyData";

const { expansionTitle, content } = expansionSection;
const firstPart = content.slice(0, 3);
const secondPart = content.slice(3);

export const ExpansionSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {expansionTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="relative m-auto aspect-[1.6] w-full max-w-[500px] desktop:hidden">
        <Image
          src="/images/history/debica/school.webp"
          alt="Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica."
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 text-lg">
        <div>
          {firstPart.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="relative m-auto aspect-[1.6] w-full max-w-[500px] desktop:hidden">
          <Image
            src="/images/history/debica/people.webp"
            alt="Uśmiechnięci mężczyźni"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
        </div>
        <div>
          {secondPart.map((paragraph) => (
            <p className="desktop:first:mb-5" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="hidden w-full max-w-[500px] shrink-0 flex-col justify-center gap-6 desktop:flex">
        <div className="relative m-auto aspect-[1.6] w-full">
          <Image
            src="/images/history/debica/school.webp"
            alt="Szkoła w Gumniskach - siedziba komendy Obwodu ZWZ-AK Dębica."
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
        </div>
        <div className="relative m-auto aspect-[1.6] w-full">
          <Image
            src="/images/history/debica/people.webp"
            alt="Uśmiechnięci mężczyźni"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
