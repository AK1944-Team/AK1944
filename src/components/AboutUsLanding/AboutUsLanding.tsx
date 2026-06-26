import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import AboutUsLandingCard from "../shared/AboutUsLandingCard/AboutUsLandingCard";
import { Routes } from "@/routes";

export const AboutUsLanding = () => (
  <section className="pb-10">
    <Container className="flex flex-col items-center gap-10 py-10 tablet:gap-6 tablet:px-9 tablet:py-12 desktop:px-[314px]">
      <Heading color="green" contrast="yellow" underline>
        O nas
      </Heading>
      <p className="font-sourceSans text-base tablet:text-center desktop:pb-4 desktop:text-18">
        Światowy Związek Żołnierzy Armii Krajowej (ŚZŻAK) to organizacja
        skupiająca byłych żołnierzy Armii Krajowej oraz ich sympatyków. Powstała
        w 1990 roku i ma na celu upamiętnienie dziedzictwa AK, ochronę dobrego
        imienia żołnierzy oraz krzewienie patriotyzmu. Obecnie działalność
        związku koncentruje się na działaniach edukacyjnych, organizacji
        uroczystości rocznicowych oraz upamiętnianiu miejsc walki i męczeństwa.
      </p>
      <Button
        label="Poznajmy się"
        href={Routes.ABOUT}
        ariaDescription="Poznajmy się"
        variant="primary"
      />
    </Container>
    <div className="flex w-full flex-col gap-10 tablet:snap-mandatory tablet:flex-row tablet:overflow-x-auto tablet:scroll-smooth tablet:px-11 desktop:mx-auto desktop:max-w-[1440px] desktop:items-center desktop:justify-center desktop:gap-6 desktop:overflow-x-hidden desktop:px-28">
      <AboutUsLandingCard
        heading="Historia AK"
        description="ŚZŻAK powstał w 1990 roku w Polsce z inicjatywy byłych żołnierzy
            Armii Krajowej, którzy pragnęli upamiętnić działalność jednej z
            największych podziemnych armii II wojny światowej."
        buttonLabel="Poznaj historię"
        href={Routes.HISTORY}
        image={{
          src: "/images/history_AK.webp",
          alt: "Historia AK. Sanitariuszki szpitala polowego III Zgrupowania.",
          width: 350,
          height: 190,
        }}
      />
      <AboutUsLandingCard
        heading="Szlak Partyzancki"
        description="Jest propozycją dla Wszystkich rozmiłowanych w pieszych wędrówkach i historii oraz cenną pomocą dydaktyczną dla nauczycieli i rodziców w wychowaniu patriotycznym dzieci i młodzieży."
        buttonLabel="Czytaj więcej"
        href={Routes.PARTISAN_TRAIL}
        image={{
          src: "/images/partisan_trail.webp",
          alt: "Szlak Partyzancki. Zdjęcie mapy: Zbliżenie na starą, szczegółową mapę topograficzną z oznaczeniami rzek, dróg i granic.",
          width: 350,
          height: 190,
        }}
      />
      <AboutUsLandingCard
        heading="Inwentarz grobów"
        description="Dbamy o zachowanie pamięci o żołnierzach AK, dokumentując miejsca ich spoczynku. Tworzymy szczegółowy rejestr grobów kombatantów, umożliwiający ich odnalezienie i upamiętnienie."
        buttonLabel="Znajdź grób"
        href={Routes.GRAVES_INVENTORY}
        image={{
          src: "/images/graves.webp",
          alt: "Inwentarz grobów. Zdjęcie krzyża pamiątkowego: Metalowy krzyż na pomniku w otoczeniu drzew. Krzyż zdobią polskie flagi, a w tle widać zalesiony krajobraz.",
          width: 350,
          height: 190,
        }}
      />
    </div>
  </section>
);
