"use client";

import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";
import ContrastSwitcher from "@/components/Switcher/ContrastSwitcher";
import IconXCircle from "@/icons/IconXCircle";
import { Routes } from "@/routes";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileNavigation } from "./HeaderMobileNavigation";
import type { SocialMedia } from "@/payload-types";

interface Props {
  onClose: () => void;
  socialMediaLinks: SocialMedia[];
}

export const HeaderMobileMenu = ({ onClose, socialMediaLinks }: Props) => (
  <Container>
    <div
      className="relative size-full w-screen bg-greenB"
      aria-label="Menu"
      aria-roledescription="Menu"
    >
      <div className="mt-5 flex content-center justify-around">
        <HeaderLogo />

        <p
          className="h-10 w-[135px] text-center font-courier text-14 text-white transition duration-300"
          aria-label="Światowy Związek Żołnierzy Armii Krajowej"
        >
          Światowy Związek Żołnierzy AK
        </p>

        <button
          className="size-6"
          type="button"
          aria-label="Zamknij menu"
          onClick={onClose}
        >
          <IconXCircle className="text-textLightGreen transition duration-300 active:scale-110" />
        </button>
      </div>

      <SocialMediaTray
        className="flex items-center justify-center gap-4 py-7"
        socialMediaLinks={socialMediaLinks}
      />

      <HeaderMobileNavigation />

      <div className="flex items-center justify-center gap-6 py-8">
        <Button
          label="Wesprzyj"
          ariaDescription="Kliknij, aby wesprzeć fundację"
          href={Routes.SUPPORT}
          className="self-center"
          variant="primary"
        />
        <ContrastSwitcher />
      </div>
    </div>
  </Container>
);
