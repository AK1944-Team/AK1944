import { districtSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { FootnoteReferenceText } from "./FootnoteReferenceText";
import Image from "next/image";

const { districtTitle, content } = districtSection;

export const DistrictSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg desktop:flex-row">
    <div className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {districtTitle}
      </Heading>
      {content.map((paragraph, index) => (
        <p key={index}>
          <FootnoteReferenceText text={paragraph} />
        </p>
      ))}
    </div>
    <Image
      src="/images/history/burza/district.webp"
      alt="Msza św. polowa odprawiana przez ks. Stanisława Bartosza ps. Mieczyk dla żołnierzy II Zgrupowaniu 5. Pułku Strzelców Konnych. Sierpień 1944 r."
      width={3470}
      height={4670}
      className="m-auto w-full max-w-[600px]"
      priority
    />
  </section>
);
