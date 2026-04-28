"use client";

import { CalendarHeader } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarHeader";
import { CalendarTable } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarTable";
import { EventsList } from "@/app/(client)/zwiazek/kalendarz/_components/Events/EventsList";
import { addMonth } from "@/app/(client)/zwiazek/kalendarz/_utils/Dates/Dates";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import { Pagination } from "@/components/shared/Pagination";
import type { CalendarEvent } from "@/dataAccess/calendar";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  currentPage: number;
  eventDates: string[];
  events: CalendarEvent[];
  eventForToday?: CalendarEvent;
  initialDate: Date;
  totalPages: number;
}

export const CalendarMain = ({
  currentPage,
  eventDates,
  events,
  eventForToday,
  initialDate,
  totalPages,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(initialDate);

  useEffect(() => {
    setCurrentDate(initialDate);
  }, [initialDate]);

  const updateMonth = (nextDate: Date) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("month", String(nextDate.getMonth() + 1));
    params.set("year", String(nextDate.getFullYear()));
    params.set("page", "1");

    router.push(`/zwiazek/kalendarz?${params.toString()}`, { scroll: false });
  };

  const handleNextMonth = () => {
    const nextDate = addMonth(currentDate, 1);

    setCurrentDate(nextDate);
    updateMonth(nextDate);
  };

  const handlePrevMonth = () => {
    const nextDate = addMonth(currentDate, -1);

    setCurrentDate(nextDate);
    updateMonth(nextDate);
  };

  return (
    <>
      <section className="flex w-full items-center justify-center bg-greenMain">
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-10 py-9 tablet:justify-center tablet:px-10 lg:flex-row desktop:justify-between desktop:px-28">
          <CalendarTable
            currentDate={currentDate}
            eventsDates={eventDates}
            prevMonth={handlePrevMonth}
            nextMonth={handleNextMonth}
          />
          <CalendarCard eventForToday={eventForToday} />
        </div>
      </section>
      <section className="flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 pb-10 tablet:gap-16 tablet:px-10 desktop:px-28">
        <CalendarHeader
          className="items-center justify-center text-24 tablet:w-full tablet:justify-between tablet:text-32"
          iconClassName="stroke-greenMain contrast:stroke-yellowContrast h-7 w-7 tablet:h-10 tablet:w-10"
          currentDate={currentDate}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
        />
        <EventsList events={events} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/zwiazek/kalendarz"
          />
        )}
      </section>
    </>
  );
};
