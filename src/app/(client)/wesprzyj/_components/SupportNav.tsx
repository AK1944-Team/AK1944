import { PartnerIcon } from "@/icons/PartnerIcon";
import { VoluntaryIcon } from "@/icons/VoluntaryIcon";
import { ContactIcon } from "./icons/ContactIcon";
import { DonationIcon } from "./icons/DonationIcon";
import { TaxIcon } from "./icons/TaxIcon";
import { SupportNavItem } from "./SupportNavItem";

export const SupportNav = () => (
  <nav aria-labelledby="support-nav-heading">
    <h2 id="support-nav-heading" className="mb-10 font-lora text-2xl font-bold">
      Formy wsparcia:
    </h2>
    <ul className="mx-auto grid items-end justify-center gap-x-11 gap-y-6 tablet:grid-cols-2 desktop:grid-cols-5">
      {navItems.map(({ label, icon, href }) => (
        <SupportNavItem key={label} href={href} label={label} icon={icon} />
      ))}
    </ul>
  </nav>
);

const navItems = [
  {
    label: "Przekaż 1,5% podatku",
    icon: <TaxIcon />,
    href: "#podatek",
  },
  {
    label: "Wpłać darowiznę",
    icon: <DonationIcon />,
    href: "#dotacja",
  },
  {
    label: "Zostań partnerem",
    icon: <PartnerIcon />,
    href: "#partner",
  },
  {
    label: "Zostań wolontariuszem",
    icon: <VoluntaryIcon />,
    href: "#volunteer-section",
  },
  {
    label: "Skontaktuj się",
    icon: <ContactIcon />,
    href: "#kontakt",
  },
] as const;
