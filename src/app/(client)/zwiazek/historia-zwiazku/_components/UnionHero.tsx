import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { BackgroundMedia } from "@/components/shared/BackgroundMedia/BackgroundMedia";
import { Heading } from "@/components/shared/Heading/Heading";

interface Props {
  paragraph: string[];
}

export const UnionHero = ({ paragraph }: Props) => (
  <BackgroundMedia
    src="/images/hero_background.webp"
    alt="Zdjęcie przedstawiające strzelców konnych z biało czerwonymi proporcami"
    className="max-h-[1200px] contrast:invisible tablet:h-[640px] tablet:max-h-[660px]"
    aria-hidden="true"
  >
    <Container
      as="article"
      className="text-16 leading-6 text-white contrast:block tablet:text-18 tablet:leading-7"
    >
      <Breadcrumbs color="white" homeIconColor="green" />
      <Heading
        variant="h2"
        color="white"
        className="py-5 text-28 tablet:pb-10 desktop:text-32"
        contrast="yellow"
        align="start"
      >
        Historia związku
      </Heading>
      <section className="flex flex-col gap-4 pb-10 font-sourceSans tablet:w-[710px] tablet:gap-8">
        {paragraph.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </Container>
  </BackgroundMedia>
);
