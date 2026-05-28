import { firstDaysSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { FootnoteReferenceText } from "./FootnoteReferenceText";
import Image from "next/image";

const { firstDaysTitle, content } = firstDaysSection;
const firstPart = content.slice(0, 2);
const secondPart = content.slice(2);

export const FirstDaysSection = () => (
  <section className="flex flex-col gap-6">
    <div className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {firstDaysTitle}
      </Heading>
      <div className="flex flex-col gap-6 font-sourceSans text-lg desktop:flex-row">
        <div className="flex flex-col gap-6 desktop:w-1/2">
          {firstPart.map((paragraph) => (
            <p key={paragraph}>
              <FootnoteReferenceText text={paragraph} />
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-6 desktop:w-1/2">
          {secondPart.map((paragraph) => (
            <p key={paragraph}>
              <FootnoteReferenceText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </div>
    <div className="m-auto flex gap-6">
      <Image
        src="/images/history/burza/first-days.webp"
        alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Kondukt pogrzebowy z trumną poległego żołnierza AK w drodze z Gołęczyny na Kałużówkę, 21 sierpnia 1944 r."
        width={2000}
        height={1300}
        className="w-full max-w-[684px]"
      />
      <Image
        src="/images/history/burza/kaluzowka.webp"
        alt="Punkt sanitarny na Kałużówce. Od lewej: dr Kazimierz Gradziński, Maria Szewczyk, Teresa Langer, dr Jan Szymaszek, Władysława Gubernat, Lucyna Dykier."
        width={2000}
        height={1300}
        className="hidden max-w-[684px] desktop:block"
      />
    </div>
  </section>
);
