import { Heading } from "@/components/shared/Heading/Heading";
import { genesisSection } from "@/data/historyData";
import { commandersSection } from "@/data/historyData";
import Image from "next/image";
import Link from "next/link";

const { genesisTitle, content, regimentTitle, description } = genesisSection;
const { commandersTitle, people } = commandersSection;

const renderText = (text: string) => {
  const parts = text.split(/\*([^*]+)\*/g);

  return parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
};
const firstPart = content.slice(0, 1);
const secondPart = content.slice(1);

const CommandersAsideContent = () => (
  <>
    <Heading variant="h4" color="green" contrast="yellow">
      {commandersTitle}
    </Heading>
    <p className="hidden text-lg desktop:block">
      W okresie międzywojennym dowódcami pułku byli kolejno:
    </p>
    <ul className="relative flex flex-col gap-2 text-lg desktop:-translate-x-5">
      {people.map((commander, index) => (
        <li
          key={index}
          className="relative flex flex-col gap-1 pl-5 desktop:flex-row"
        >
          {index !== people.length - 1 && (
            <div className="absolute left-0 top-4 h-full w-[2px] bg-greenC contrast:bg-yellowContrast" />
          )}
          <Link
            href={commander.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 underline"
          >
            <span className="absolute left-[1px] top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-greenMain contrast:bg-yellowContrast" />
            <span>{commander.name}</span>
          </Link>
          <span>{commander.date}</span>
        </li>
      ))}
    </ul>
  </>
);

export const GenesisSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {genesisTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row desktop:gap-[128px]">
      <div className="flex flex-col gap-6 text-lg">
        <p className="desktop:mb-5">{renderText(firstPart[0])}</p>
        <div className="relative m-auto aspect-[0.81] w-full max-w-[350px] desktop:hidden">
          <Image
            src="/images/history/regiment/officers.webp"
            alt="Obraz przedstawiający żołnierza salutującego oficerom."
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            className="object-cover"
            priority
          />
        </div>
        {secondPart.map((paragraph) => (
          <p className="desktop:mb-5" key={paragraph}>
            {renderText(paragraph)}
          </p>
        ))}
        <aside className="flex flex-col gap-6 desktop:hidden">
          <CommandersAsideContent />
        </aside>
        <div className="mt-5 flex flex-col gap-5">
          <Heading variant="h4" color="green" contrast="yellow">
            {regimentTitle}
          </Heading>
          <div className="flex flex-col gap-6 text-lg">
            {description.map((paragraph) => (
              <p key={paragraph}>{renderText(paragraph)}</p>
            ))}
          </div>
        </div>
      </div>
      <aside className="hidden flex-shrink-0 flex-col gap-6 desktop:flex">
        <div className="relative m-auto h-full w-full mobile:hidden desktop:block">
          <Image
            src="/images/history/regiment/officers.webp"
            alt="Obraz przedstawiający żołnierza salutującego oficerom."
            fill
            sizes="(max-width: 768px) 100vw, 394px"
            className="object-cover"
            priority
          />
        </div>
        <CommandersAsideContent />
      </aside>
    </div>
  </section>
);
