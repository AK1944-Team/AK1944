import Image from "next/image";
import Link from "next/link";
import IconLinkedIn from "@/icons/IconLinkedIn";
import { Volunteer } from "@/data/volunteersData";
import { Heading } from "@/components/shared/Heading/Heading";

type Props = {
  volunteers: Volunteer[];
};

export const VolunteerGallery = ({ volunteers }: Props) => {
  return (
    <section className="mt-16">
      <div className="inline-block">
        <Heading
          color="green"
          contrast="yellow"
          variant="h3"
          className="mb-10 mt-6"
        >
          Zespół sercem zaangażowany w pamięć
        </Heading>
      </div>
      <div className="mb-20 max-w-3xl text-20 text-greenMain">
        <p className="mb-8">
          Z ogromną wdzięcznością przedstawiamy wolontariuszy, którzy pomogli
          nam opowiedzieć historię Armii Krajowej w nowoczesny, dostępny
          sposób.{" "}
        </p>

        <p className="mb-8">
          Dzięki ich zaangażowaniu powstała nowa odsłona strony internetowej AK
          1944. To nie tylko projekt graficzny – to wspólne działanie na rzecz
          pamięci.{" "}
        </p>
        <p className="mb-8">
          Dziękujemy za Waszą pracę na rzecz Światowego Związku Żołnierzy Armii
          Krajowej.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mobile:grid-cols-2 desktop:grid-cols-5">
        {volunteers.map((person) => (
          <div
            key={person.name}
            className="mb-10 flex flex-col font-courier desktop:items-start"
          >
            <div className="group relative max-h-[200px] w-full max-w-[200px] overflow-hidden rounded shadow-md">
              <Link href={person.linkedin || "#"} target="_blank">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              {person.linkedin && (
                <Link
                  href={person.linkedin}
                  target="_blank"
                  className="absolute bottom-2 right-2 transition-opacity hover:opacity-90"
                  aria-label={`Profil LinkedIn ${person.name}`}
                >
                  <IconLinkedIn size={24} />
                </Link>
              )}
            </div>
            <p className="mt-3 text-18">{person.name}</p>
            <p className="text-18 text-greenMain">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
