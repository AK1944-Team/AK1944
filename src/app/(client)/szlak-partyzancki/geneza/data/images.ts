export type Images = {
  id: string;
  src: string;
  alt: string;
  mobileOrder?: number;
};

// ToDo: images and alts to update - https://app.clickup.com/t/8698wcd0t
export const sideImages: Images[] = [
  {
    id: "map",
    src: "/images/partisan-trail-origin/trail-origin-image.webp",
    alt: "Zdjęcie mapy Szlaku Partyzanckiego",
    mobileOrder: 1,
  },
  {
    id: "opening-ceremony",
    src: "/images/partisan-trail-origin/Otwarcie_szlaku_045_wynik.webp",
    alt: "Zdjęcie z otwarcia Szlaku Partyzanckiego",
    mobileOrder: 2,
  },
  {
    id: "maciej-maloziec",
    src: "/images/partisan-trail-origin/P7220451_wynik.webp",
    alt: "Maciej Małozięć na szlaku partyzanckim",
    mobileOrder: 3,
  },
  {
    id: "pamiatki",
    src: "/images/partisan-trail-origin/Szlak5_3_wynik.webp",
    alt: "Wręczenie pamiątek uczestnikom Szlaku Partyzanckiego",
    mobileOrder: 4,
  },
  {
    id: "pamiiatki-2",
    src: "/images/partisan-trail-origin/Szlak5_4_wynik.webp",
    alt: "Wręczenie pamiątek uczestnikom Szlaku Partyzanckiego",
  },
  {
    id: "group-photo",
    src: "/images/partisan-trail-origin/7_6_wynik.webp",
    alt: "Zdjęcie grupowe uczestników Szlaku Partyzanckiego",
  },
];
