import { Heading } from "@/components/shared/Heading/Heading";
import { GratitudeIcon } from "@/icons/GratitudeIcon";

interface Props {
  title: string;
}

export const ThankYou = ({ title }: Props) => (
  <section
    aria-labelledby="gratitude-heading"
    className="flex flex-col items-center justify-center gap-y-6 pb-10 tablet:gap-y-8 desktop:gap-y-10 desktop:pb-0"
  >
    <Heading
      id="gratitude-heading"
      variant="h3"
      color="green"
      contrast="yellow"
      className="text-center text-2xl tablet:text-26 desktop:text-28"
    >
      {title}
    </Heading>

    <GratitudeIcon />
  </section>
);
