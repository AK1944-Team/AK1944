import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import LogoAK from "@/icons/LogoAK";

export const Hero = () => (
  <section className="relative h-[597px] overflow-hidden tablet:h-[614px] desktop:h-[651px]">
    <BackgroundImage
      alt="background image"
      src="/images/hero_background.webp"
      priority
      quality={100}
      className="object-center contrast:hidden tablet:object-[80%]"
    >
      <Container className="mx-auto flex h-full flex-col items-center justify-center gap-6 pb-5 pt-20 text-center text-white tablet:pt-32 desktop:pt-28">
        <Heading
          variant="h1"
          contrast="yellow"
          color="white"
          underline
          className="mb-5 w-[70%] mobile:text-24 tablet:text-32 desktop:text-40"
        >
          Światowy Związek Żołnierzy Armii Krajowej
        </Heading>
        <Heading
          variant="h4"
          contrast="yellow"
          color="white"
          className="mx-auto w-[65%] mobile:text-20 tablet:text-28 desktop:text-32"
        >
          Środowisko 5. Pułku Strzelców Konnych Armii Krajowej w Dębicy
        </Heading>
        <LogoAK className="mt-2 h-[32px] w-[88px] opacity-[33%] tablet:mt-44 desktop:mt-48" />
      </Container>
    </BackgroundImage>
  </section>
);
