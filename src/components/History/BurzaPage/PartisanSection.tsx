import { partisanSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { FootnoteReferenceText } from "./FootnoteReferenceText";
import Image from "next/image";

const { partisanTitle, content } = partisanSection;

export const PartisanSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {partisanTitle}
    </Heading>
    <div className="flex flex-col gap-6 font-sourceSans text-lg desktop:flex-row-reverse">
      <div className="relative aspect-[0.78] w-full desktop:w-1/2">
        <Image
          src="/images/history/burza/battles.webp"
          alt="Ostatnie pożegnanie jednego z poległych żołnierzy AK. Gumniska, 1944 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        {content.map((paragraph, index) => (
          <p key={index}>
            <FootnoteReferenceText text={paragraph} />
          </p>
        ))}
      </div>
    </div>
  </section>
);
