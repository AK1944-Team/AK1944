import { Routes } from "@/routes";

export const navData = [
  { href: "", label: "Światowy Związek Żołnierzy AK" },
  { href: Routes.GALLERY, label: "Galeria" },
  { href: Routes.PARTNERS, label: "Partnerzy" },
  { href: Routes.CONTACT, label: "Kontakt" },
  { href: "", label: "Historia" },
  { href: "", label: "Szlak Partyzancki" },
  { href: Routes.GRAVES_INVENTORY, label: "Inwentarz grobów" },
  { href: Routes.BIOGRAMS, label: "Biogramy" },
];

export const homeArmyUnionNavData = [
  { href: Routes.ABOUT, label: "O nas" },
  { href: Routes.BOARD, label: "Zarząd" },
  { href: Routes.UNION_HISTORY, label: "Historia Związku" },
  { href: Routes.CALENDAR, label: "Kalendarz uroczystości" },
  // { href: Routes.ONGOING_PROJECTS, label: "Realizowane projekty" },
  { href: Routes.MEMORIALS, label: "Miejsca pamięci" },
];

export const historyNavData = [
  { href: Routes.HISTORY, label: "Historia" },
  { href: Routes.REGIMENT, label: "5. Pułk Strzelców Konnych" },
  { href: Routes.DEBICA_DISTRICT, label: "Obwód Dębica SZP-ZWZ-AK" },
  { href: Routes.OPERATION, label: "Akcja \„Burza\”" },
  { href: Routes.LITERATURE, label: "Literatura" },
];

export const partisanTrailData = [
  { href: Routes.PARTISAN_TRAIL, label: "Szlak Partyzancki" },
  { href: Routes.ORIGIN, label: "Geneza" },
  { href: Routes.RAIDS, label: "Rajdy" },
];

export const footerNavData = [
  { href: Routes.ABOUT, label: "O nas" },
  { href: Routes.PARTISAN_TRAIL, label: "Szlak Partyzancki" },
  { href: Routes.GRAVES_INVENTORY, label: "Inwentarz grobów" },
  { href: Routes.PARTNERS, label: "Partnerzy" },
  { href: Routes.CONTACT, label: "Kontakt" },
  { href: Routes.SUPPORT, label: "Wesprzyj" },
];
