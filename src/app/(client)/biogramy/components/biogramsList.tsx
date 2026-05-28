import type { Biogram } from "@/payload-types";
import Link from "next/link";
import { formatBiogramDate } from "@/utils";

type BiogramsListProps = {
  people: Biogram[];
  onBiogramSelect: () => void;
};

export const BiogramsList = ({
  people,
  onBiogramSelect,
}: BiogramsListProps) => {
  return (
    <div className="relative mx-auto w-full max-w-md tablet:max-w-4xl desktop:max-w-6xl">
      {/* Linie dla tabletu */}
      <div
        className="absolute inset-y-0 hidden w-[2px] bg-greenMain tablet:block desktop:hidden"
        style={{ left: "calc(100% - 400px - 1rem)" }}
      />
      <div
        className="absolute inset-y-0 hidden w-[2px] bg-greenMain tablet:block desktop:hidden"
        style={{ left: "calc(100% - 200px - 1rem)" }}
      />

      {/* Linie dla desktopu */}
      <div
        className="absolute inset-y-0 hidden w-[2px] bg-greenMain desktop:block"
        style={{ left: "calc(100% - 560px - 1rem)" }}
      />
      <div
        className="absolute inset-y-0 hidden w-[2px] bg-greenMain desktop:block"
        style={{ left: "calc(100% - 280px - 1rem)" }}
      />

      <div className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-2 pb-6 font-courier text-18 tablet:grid-cols-[1fr_200px_200px] tablet:gap-x-0 desktop:grid-cols-[1fr_280px_280px]">
        <div className="flex min-w-[120px] flex-wrap gap-2 text-left text-xl font-bold tablet:text-14">
          <span>L.p.</span>
          <span>Nazwisko i imię</span>
        </div>

        <div className="hidden justify-center text-xl font-bold tablet:flex tablet:py-1 tablet:text-14">
          <p>Data urodzenia</p>
        </div>

        <div className="hidden justify-center text-xl font-bold tablet:flex tablet:py-1 tablet:text-14">
          <p>Data śmierci</p>
        </div>
      </div>

      {people.map((person, index) => (
        <div
          key={person.id}
          className={`grid grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-2 font-courier text-18 font-bold contrast:text-black00 tablet:grid-cols-[1fr_200px_200px] tablet:gap-x-0 tablet:text-14 desktop:grid-cols-[1fr_280px_280px] ${
            index % 2 === 0 ? "bg-greenLight" : "bg-backgroundB"
          }`}
        >
          <div className="flex min-w-[120px] gap-2">
            <span>{index + 1}.</span>

            <span className="tablet:hidden">{person.name}</span>

            <Link
              href={`/biogramy/${person.slug}`}
              onClick={onBiogramSelect}
              className="hidden tablet:inline tablet:underline"
            >
              {person.name}
            </Link>
          </div>

          <Link
            href={`/biogramy/${person.slug}`}
            onClick={onBiogramSelect}
            className="mr-4 text-xl tablet:hidden"
          >
            &rsaquo;
          </Link>

          <div className="hidden px-4 py-1 text-center tablet:block">
            {formatBiogramDate(person.birthDate)}
          </div>

          <div className="hidden py-1 pl-4 text-center tablet:block">
            {formatBiogramDate(person.deathDate)}
          </div>
        </div>
      ))}
    </div>
  );
};
