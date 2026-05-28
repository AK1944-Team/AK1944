import type { Metadata } from "next";
import localFont from "next/font/local";
import { Routes } from "@/routes";
import { Button } from "@/components/shared/Button/Button";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { NotFoundIcon } from "@/icons/NotFoundIcon";
import { cn } from "@/utils";
import "./(client)/globals.css";
import ThemeProvider from "@/context/ThemesProvider";

const figtree = localFont({
  src: "./(client)/fonts/Figtree-Variable.woff2",
  variable: "--font-figtree",
  weight: "400",
});

const lora = localFont({
  src: "./(client)/fonts/Lora-Variable.woff2",
  variable: "--font-lora",
  weight: "700",
});

const sourceSans = localFont({
  src: "./(client)/fonts/SourceSans3-Variable.woff2",
  variable: "--font-source-sans",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
  description: "Nie znaleziono żądanej strony w serwisie AK1944.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="pl"
      data-lt-installed="true"
      className="scroll-pt-20 scroll-smooth tablet:scroll-pt-[136px]"
    >
      <body
        className={cn(
          figtree.variable,
          lora.variable,
          sourceSans.variable,
          "bg-backgroundMain text-textDarkGreen antialiased",
        )}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-grow flex-col items-center justify-center px-4 pb-[5%] pt-[5%] text-center font-lora font-bold">
              <h1 className="mb-10 text-20 desktop:mb-20 desktop:text-40">
                Zapis nie został odnaleziony…
              </h1>

              <div className="relative mb-20 w-full px-4 tablet:max-w-[500px] desktop:max-w-[700px] largeDesktop:max-w-[900px]">
                <NotFoundIcon />
              </div>

              <p className="mb-10 max-h-[72px] text-12 leading-relaxed desktop:mb-20 desktop:text-28">
                W kronikach tej witryny nie ma śladu po wskazanej stronie.
                <br />
                Możliwe, że została usunięta lub jej historia jeszcze nie
                została napisana.
              </p>

              <p className="mb-10 text-20 desktop:mb-20 desktop:text-40">
                Przeglądaj inne rozdziały historii.
                <br />
                <span className="tekst-12 desktop:text-28">
                  (wróć na stronę główną)
                </span>
              </p>

              <Button
                variant="primary"
                label="Strona główna"
                ariaDescription="Powrót do strony głównej"
                href={Routes.HOME}
                className="mobile: text-8 mb-6 max-h-12 min-w-40 text-center font-normal desktop:text-16"
              />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
