import { Heading } from "@/components/shared/Heading/Heading";
import { genesisSection } from "@/data/historyData";
import { commandersSection } from "@/data/historyData";
import Image from "next/image";

const { genesisTitle, content } = genesisSection;
const firstPart = content.slice(0, 1);
const secondPart = content.slice(1);
const { commandersTitle, people } = commandersSection;

export const GenesisSection = () => (
  <section className="flex flex-col gap-6">
    <Heading variant="h4" color="green" contrast="yellow">
      {genesisTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row desktop:gap-[128px]">
      <div className="flex flex-col gap-6 text-lg">
        <p>{firstPart}</p>
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
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <aside className="flex flex-shrink-0 flex-col gap-6">
        <div className="relative m-auto aspect-[1.1] w-full mobile:hidden desktop:block">
          <Image
            src="/images/history/regiment/officers.webp"
            alt="Obraz przedstawiający żołnierza salutującego oficerom."
            fill
            sizes="(max-width: 768px) 100vw, 394px"
            className="object-cover"
            priority
          />
        </div>
        <Heading variant="h4" color="green" contrast="yellow">
          {commandersTitle}
        </Heading>
        <p className="hidden desktop:block">
          W okresie międzywojennym dowódcami pułku byli kolejno:
        </p>
        <ul className="relative flex flex-col gap-2 desktop:-translate-x-5">
          {people.map((commander, index) => (
            <li
              key={index}
              className="relative flex flex-col gap-1 pl-5 desktop:flex-row"
            >
              {index !== people.length - 1 && (
                <div className="absolute left-0 top-4 h-full w-[2px] bg-greenC" />
              )}
              <a
                href={commander.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex underline"
              >
                <span className="absolute left-[1px] top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-greenMain" />
                <p>{commander.name}</p>{" "}
              </a>

              <p>{commander.date}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);
