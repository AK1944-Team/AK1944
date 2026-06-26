"use client";

import { Routes } from "@/routes";
import { BackgroundMedia } from "@/components/shared/BackgroundMedia/BackgroundMedia";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { getTodaysNameDays } from "@/app/(client)/zwiazek/kalendarz/_components/Events/dataNameDays";
import type { CalendarEvent } from "@/dataAccess/calendar";
import { useEffect, useRef, useState } from "react";

interface Props {
  withButton?: boolean;
  eventForToday?: CalendarEvent;
}

const formatCurrentDate = (date: Date) =>
  date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export const CalendarCard = ({ withButton = false, eventForToday }: Props) => {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const updateCurrentDate = () => {
      setCurrentDate(new Date());
    };

    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
    );
    const timeoutMs = nextMidnight.getTime() - now.getTime();

    const timeoutId = window.setTimeout(() => {
      updateCurrentDate();
      intervalRef.current = window.setInterval(
        updateCurrentDate,
        24 * 60 * 60 * 1000,
      );
    }, timeoutMs);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentDateString = formatCurrentDate(currentDate);
  const currentEvent =
    eventForToday?.date === currentDateString ? eventForToday : undefined;
  const [, , eventYear] = currentEvent?.date.split(".") || [""];
  const currentMonth = currentDate.toLocaleString("pl-PL", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const dayInNumbers = currentDate.getDate();
  const dayInWords = currentDate.toLocaleString("pl-PL", { weekday: "long" });

  return (
    <div className="flex items-center justify-center overflow-hidden px-0 contrast:border-2 contrast:border-b-yellowContrast tablet:px-0 desktop:px-0">
      <BackgroundMedia
        alt="calendar background"
        src="/images/calendar_background.webp"
        className="contrast:hidden"
      >
        <Container className="flex min-h-[400px] w-[284px] flex-col items-center justify-start py-4 font-lora">
          <h4 className="text-24 font-bold" aria-label="Rok i miesiąc">
            {currentMonth} {currentYear}
          </h4>
          <hr
            className="mt-5 w-full border border-solid border-redMain contrast:border-yellowContrast"
            aria-hidden
          />
          <p
            className="my-4 text-96 font-bold leading-none"
            aria-label="Dzień miesiąca"
          >
            {dayInNumbers}
          </p>
          <p className="text-24 font-bold" aria-label="Dzień tygodnia">
            {dayInWords}
          </p>
          <hr
            className="my-5 w-full border border-solid border-redMain contrast:border-yellowContrast"
            aria-hidden
          />
          {currentEvent?.title ? (
            <div className="flex flex-col items-center">
              <p className="relative mb-5 font-sans text-16 leading-normal tracking-tight">
                <b>{eventYear}</b> - {currentEvent.title}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="relative mb-5 font-sans text-16 leading-normal tracking-tight">
                Imieniny obchodzą:
              </p>
              <p className="relative mb-5 font-sans text-16 leading-normal tracking-tight">
                {getTodaysNameDays().join(", ")}
              </p>
            </div>
          )}
          {withButton && (
            <Button
              variant="primary"
              label="Kalendarz uroczystości"
              ariaDescription="Kalendarz uroczystości"
              href={Routes.CALENDAR}
            />
          )}
        </Container>
      </BackgroundMedia>
    </div>
  );
};
