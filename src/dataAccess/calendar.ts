import config from "@payload-config";
import type { Calendar } from "@/payload-types";
import { getPayload } from "payload";
import { unstable_cache } from "next/cache";
import {
  getPayloadCollectionCacheTag,
  PAYLOAD_GLOBAL_CACHE_TAG,
} from "@/dataAccess/cacheTags";

export type CalendarEvent = Omit<Calendar, "date"> & {
  date: string;
};

export const CALENDAR_ITEMS_PER_PAGE = 20;

type CalendarDoc = Calendar & {
  isEveryYear?: boolean | null;
};

type CalendarMonthPageParams = {
  month: number;
  year: number;
  page: number;
};

const isRecurringEvent = (event: CalendarDoc) => event.isEveryYear !== false;

const formatCalendarDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const sortEventsByCalendarOrder = (docs: CalendarDoc[]) =>
  [...docs].sort((firstEvent, secondEvent) => {
    const firstDate = new Date(firstEvent.date);
    const secondDate = new Date(secondEvent.date);

    const monthDifference = firstDate.getUTCMonth() - secondDate.getUTCMonth();

    if (monthDifference !== 0) {
      return monthDifference;
    }

    const dayDifference = firstDate.getUTCDate() - secondDate.getUTCDate();

    if (dayDifference !== 0) {
      return dayDifference;
    }

    return firstDate.getUTCFullYear() - secondDate.getUTCFullYear();
  });

const filterEventsForMonth = (
  docs: CalendarDoc[],
  month: number,
  year: number,
) =>
  docs.filter((doc) => {
    const eventDate = new Date(doc.date);
    const isSelectedMonth = eventDate.getUTCMonth() + 1 === month;
    const isSelectedYear = eventDate.getUTCFullYear() === year;

    return isSelectedMonth && (isSelectedYear || isRecurringEvent(doc));
  });

const isSameMonthAndDay = (
  firstDate: string | Date,
  secondDate: string | Date,
) => {
  const normalizedFirstDate = new Date(firstDate);
  const normalizedSecondDate = new Date(secondDate);

  return (
    normalizedFirstDate.getUTCDate() === normalizedSecondDate.getUTCDate() &&
    normalizedFirstDate.getUTCMonth() === normalizedSecondDate.getUTCMonth()
  );
};

export const mapCalendarDocsToEvents = (docs: Calendar[]): CalendarEvent[] =>
  docs.map((doc) => ({
    ...doc,
    date: formatCalendarDate(doc.date),
  }));

export const getTodayCalendarEvent = (events: CalendarEvent[]) => {
  const today = formatCalendarDate(new Date());

  return events.find((event) => event.date === today);
};

export async function getCalendarMonthData({
  month,
  year,
  page,
}: CalendarMonthPageParams) {
  const allResult = await unstable_cache(
    async () => {
      const payload = await getPayload({ config });

      return payload.find({
        collection: "calendar",
        pagination: false,
        sort: "date",
      });
    },
    [`calendar-month:${month}:${year}`],
    {
      tags: [
        PAYLOAD_GLOBAL_CACHE_TAG,
        getPayloadCollectionCacheTag("calendar"),
      ],
      revalidate: 3600,
    },
  )();
  const monthDocs = sortEventsByCalendarOrder(
    filterEventsForMonth(allResult.docs as CalendarDoc[], month, year),
  );

  const totalDocs = monthDocs.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalDocs / CALENDAR_ITEMS_PER_PAGE),
  );
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * CALENDAR_ITEMS_PER_PAGE;
  const paginatedMonthDocs = monthDocs.slice(
    startIndex,
    startIndex + CALENDAR_ITEMS_PER_PAGE,
  );

  return {
    allEvents: mapCalendarDocsToEvents(monthDocs),
    events: mapCalendarDocsToEvents(paginatedMonthDocs),
    totalDocs,
    totalPages,
    currentPage,
  };
}

export async function getTodayEvent() {
  const result = await unstable_cache(
    async () => {
      const payload = await getPayload({ config });

      return payload.find({
        collection: "calendar",
        pagination: false,
        sort: "date",
      });
    },
    ["calendar-today"],
    {
      tags: [
        PAYLOAD_GLOBAL_CACHE_TAG,
        getPayloadCollectionCacheTag("calendar"),
      ],
      revalidate: 3600,
    },
  )();

  const today = new Date();
  const todayDocs = sortEventsByCalendarOrder(
    (result.docs as CalendarDoc[]).filter((doc) => {
      const eventDate = new Date(doc.date);

      return (
        isSameMonthAndDay(doc.date, today) &&
        (eventDate.getUTCFullYear() === today.getUTCFullYear() ||
          isRecurringEvent(doc))
      );
    }),
  );

  return mapCalendarDocsToEvents(todayDocs)[0];
}
