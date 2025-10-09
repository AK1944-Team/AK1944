import { Heading } from "@/components/shared/Heading/Heading";
import { IconBullet } from "@/icons/IconBullet";
import Image from "next/image";

export const VolunteerSupport = () => (
  <section className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
    <div className="space-y-6 desktop:min-w-[716px]">
      <Heading color="green" contrast="yellow" variant="h3">
        Jak możesz pomóc? - Formy wsparcia
      </Heading>
      <div className="text-20">
        <p>
          Wolontariat to nie tylko obecność – to konkretne działania, które mają
          znaczenie.
          <br /> Obecnie szczególnie potrzebujemy osób, które:
        </p>
        <ul className="mt-5 space-y-[20px] font-bold">
          {[
            "Pomogą w aktualizowaniu treści na stronie internetowej.",
            "Wesprą prowadzenie naszych mediów społecznościowych.",
            "Zajmą się fotografowaniem wydarzeń i tworzeniem materiałów wizualnych.",
            "Poprowadzą warsztaty lub spotkania z młodzieżą.",
            "Pomogą w przygotowaniu i obsłudze wydarzeń historycznych i patriotycznych.",
            "Wezmą udział w rajdach szlakiem partyzanckim.",
            "Będą promować działalność Związku w swoim otoczeniu i lokalnej społeczności.",
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-2">
              <IconBullet
                className="mt-[3px] flex-shrink-0 text-redMain contrast:text-yellowContrast"
                aria-hidden="true"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <Image
        src="/images/volunteers/volunteers.png"
        alt="Ludzie"
        width={480}
        height={280}
      />
    </div>
  </section>
);
