"use client";

import { useEffect, useCallback, useRef } from "react";
import { ModalCloseIcon } from "@/icons/ModalCloseIcon";
import { cn } from "@/utils";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({ children, isOpen, onClose, className }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      lastActiveElement.current = document.activeElement as HTMLElement;

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // Move focus to modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = "auto";

      // Restore focus to the last active element
      if (lastActiveElement.current) {
        lastActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="bg-slate-900/20 fixed inset-0 z-50 flex h-screen items-center justify-center overflow-y-auto backdrop-blur"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex={-1}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "desktop:py-15 relative m-auto flex animate-modalAnimation flex-col items-center rounded bg-greenMain px-3 py-12 text-white shadow-2xl shadow-white desktop:px-10",
          className,
        )}
      >
        <button
          className="absolute right-3 top-3"
          aria-label="Zamknij modal"
          onClick={onClose}
        >
          <ModalCloseIcon className="text-inherit" />
        </button>
        {children}
      </div>
    </div>
  );
};
