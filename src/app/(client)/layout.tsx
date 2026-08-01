import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import ThemeProvider from "@/context/ThemesProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner";
import { cn } from "@/utils";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/Figtree-Variable.woff2",
  variable: "--font-figtree",
  weight: "400",
});

const lora = localFont({
  src: "./fonts/Lora-Variable.woff2",
  variable: "--font-lora",
  weight: "700",
});

const sourceSans = localFont({
  src: "./fonts/SourceSans3-Variable.woff2",
  variable: "--font-source-sans",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: {
    default: "Światowy Związek Żołnierzy Armii Krajowej",
    template: "%s | AK1944",
  },
  description: "AK1944 - Strona poświęcona działalności Armii Krajowej",
  keywords:
    "Armia Krajowa, Dębica, AK Dębica, Szlak Partyzancki, Szlak II Zgrupowania, Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica, Deser, Adam Lazarowicz, Środowisko 5 Pułku Strzelców Konnych Armii Krajowej, ŚZŻAK, Światowy Związek Żołnierzy AK, 5 Pułk Strzelców Konnych, 5 psk, AK, powiat dębicki, ziemia dębicka, Maciej Małozięć, weterani AK, kombatanci, Polskie Państwo Podziemne, Dziekania, Braciejowa, Gumniska, biogramy żołnierzy, Gdzie Karpat progi, Dziesiątka w akcji, Wojenne losy uczniów",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  openGraph: {
    title: "Światowy Związek Żołnierzy Armii Krajowej",
    description: "AK1944 - Strona poświęcona działalności Armii Krajowej",
    url: "https://ak1944.pl",
    siteName: "Światowy Związek Żołnierzy Armii Krajowej",
    images: [
      {
        url: "https://ak1944.pl/public/images/AK_Logo_OG.webp",
        width: 1200,
        height: 630,
        alt: "Światowy Związek Żołnierzy Armii Krajowej",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Światowy Związek Żołnierzy Armii Krajowej",
    description: "AK1944 - Strona poświęcona działalności Armii Krajowej",
    images: ["https://ak1944.pl/public/images/AK_Logo_OG.webp"],
  },
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      data-lt-installed="true"
      data-scroll-behavior="smooth"
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
            <main className="flex-grow">{children}</main>
            <Footer />
            <CookieBanner />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
