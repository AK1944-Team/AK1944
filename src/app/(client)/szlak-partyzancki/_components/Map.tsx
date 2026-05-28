"use client";

import { useEffect, useState } from "react";

type MapProps = {
  map: {
    iframeUrl: string;
    externalUrl: string;
  };
};

export const Map = ({ map }: MapProps) => {
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    setIsInteractive(false);
  }, [map.iframeUrl]);

  return (
    <section className="pb-12 pt-6 desktop:pb-20 desktop:pt-10">
      <div
        className="relative overflow-hidden"
        onMouseLeave={() => setIsInteractive(false)}
      >
        <iframe
          title="Mapa szlaku"
          className={`h-[50vh] w-full desktop:h-[816px] ${
            isInteractive ? "pointer-events-auto" : "pointer-events-none"
          }`}
          src={map.iframeUrl}
          loading="lazy"
        ></iframe>
        {!isInteractive && (
          <button
            type="button"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10 px-6 text-center transition-colors hover:bg-black/15"
            onClick={() => setIsInteractive(true)}
            aria-label="Aktywuj interakcję z mapą"
          >
            <span className="rounded-full bg-white/90 px-5 py-3 text-14 font-medium text-black shadow-sm backdrop-blur-sm">
              Kliknij, aby włączyć interakcję z mapą
            </span>
            <span className="rounded-full bg-white/85 px-4 py-2 text-12 text-black shadow-sm backdrop-blur-sm">
              Dopiero po kliknięciu mapa przejmie przewijanie
            </span>
          </button>
        )}
      </div>
      <div className="w-full py-1">
        <a
          className="text-12 text-grayDate"
          href={map.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zobacz trasę w Traseo
        </a>
      </div>
    </section>
  );
};
