"use client";

import { useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useKeyPress } from "@/hooks/useKeyPress";
import HeaderMenuIcon from "@/icons/HeaderMenuIcon";
import { cn } from "@/utils";
import type { SocialMedia } from "@/payload-types";

const HeaderMobileMenu = dynamic(() =>
  import("./HeaderMobileMenu").then((mod) => mod.HeaderMobileMenu),
);

export const HeaderMobileMenuWrapper = ({
  socialMediaLinks,
}: {
  socialMediaLinks: SocialMedia[];
}) => {
  const { isOpen, toggle, close } = useDisclosure();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleEscapeKey = useCallback(() => {
    close();
  }, [close]);

  useKeyPress("Escape", handleEscapeKey);

  useEffect(() => {
    close();
  }, [pathname, close]);

  const handleToggle = () => {
    toggle();
    if (!isOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  };

  return (
    <>
      <button
        type="button"
        data-testid="button"
        aria-label="Otwórz menu"
        onClick={handleToggle}
        ref={menuButtonRef}
      >
        <HeaderMenuIcon className="self-center text-white/90 transition duration-300 active:scale-110" />
      </button>
      <div
        data-testid="mobile-menu"
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out",
          "bg-greenB",
          isOpen ? "translate-x-0 overflow-y-auto" : "translate-x-full",
        )}
      >
        {isOpen && (
          <HeaderMobileMenu
            onClose={close}
            socialMediaLinks={socialMediaLinks}
          />
        )}
      </div>
    </>
  );
};
