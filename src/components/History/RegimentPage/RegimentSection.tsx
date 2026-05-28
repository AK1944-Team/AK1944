import Image from "next/image";

export const RegimentSection = () => (
  <section className="flex flex-col gap-6 text-lg">
    <div className="flex justify-center gap-6">
      <div className="desktop:max-w-1/2 relative m-auto aspect-[1.4] w-full max-w-[684px]">
        <Image
          src="/images/history/regiment/review.webp"
          alt="Dowódca 5. Pułku Strzelców Konnych, płk Kazimierz Kosiarski dokonuje przeglądu oddziałów podczas ostatniego przed wybuchem wojny święta pułku. Dębica, 9 czerwca 1939 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="desktop:max-w-1/2 relative m-auto aspect-[1.4] w-full max-w-[684px] mobile:hidden desktop:block">
        <Image
          src="/images/history/regiment/regiment.webp"
          alt="Musztra paradna podczas święta 5. Pułku Strzelców Konnych w Dębicy w 1938 r."
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);
