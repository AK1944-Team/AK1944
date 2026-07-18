"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PartnerCard } from "./PartnerCard";

interface Partner {
  id: string;
  name: string;
  href?: string | null;
  image?: string;
}

interface Props {
  items: Partner[];
}

export const Carousel = ({ items }: Props) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, slidesToScroll: "auto", align: "start" },
    [Autoplay({ playOnInit: true, delay: 5_000, stopOnInteraction: false })],
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="flex gap-4">
        {items.map(({ id, name, href, image }) => (
          <li
            key={id}
            className="flex min-w-0 flex-shrink-0 flex-grow-0 items-center justify-center hover:brightness-75"
            title={name}
          >
            <PartnerCard name={name} href={href} image={image} />
          </li>
        ))}

        <li id="spacer" className="w-4" />
      </ul>
    </div>
  );
};
