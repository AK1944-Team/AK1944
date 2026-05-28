import { epilogSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { FootnoteReferenceText } from "./FootnoteReferenceText";
import Image from "next/image";

const { epilogTitle, content } = epilogSection;
const firstPart = content.slice(0, 4);
const secondPart = content.slice(4);

export const EpilogSection = () => (
  <section className="flex flex-col gap-6 font-sourceSans text-lg">
    <Heading variant="h4" color="green" contrast="yellow">
      {epilogTitle}
    </Heading>
    <div className="relative m-auto aspect-[1.7] w-full max-w-[684px] desktop:hidden">
      <Image
        src="/images/history/burza/funeral.webp"
        alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
    </div>
    <div className="flex flex-col gap-6 desktop:flex-row">
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
    <div className="m-auto flex w-full justify-center gap-6">
      <div className="relative m-auto hidden aspect-[1.7] w-full max-w-[684px] shrink-0 desktop:block">
        <Image
          src="/images/history/burza/funeral.webp"
          alt="Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="relative m-auto aspect-[1.7] w-full max-w-[684px] shrink-0">
        <Image
          src="/images/history/burza/logistics.webp"
          alt="Kwatermistrzostwo II Zgrupowania 5. Pułku Strzelców Konnych AK na Kałużówce. Od lewej siedzą: sierż. Adam Zdeb, Mieczysław Szczygieł, Andrzej Szumliński ps. Rdzawy, NN. Stoją NN."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);
