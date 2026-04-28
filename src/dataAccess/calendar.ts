import config from "@payload-config";
import type { Calendar } from "@/payload-types";
import { getPayload } from "payload";

export type CalendarEvent = Omit<Calendar, "date"> & {
  date: string;
};

export const CALENDAR_ITEMS_PER_PAGE = 20;

type CalendarMonthPageParams = {
  month: number;
  page: number;
};

const formatCalendarDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const sortEventsByNewest = (docs: Calendar[]) =>
  [...docs].sort(
    (firstEvent, secondEvent) =>
      new Date(secondEvent.date).getTime() -
      new Date(firstEvent.date).getTime(),
  );

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
  page,
}: CalendarMonthPageParams) {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "calendar",
    pagination: false,
    sort: "-date",
  });
  const monthDocs = sortEventsByNewest(
    (result.docs as Calendar[]).filter(
      (doc) => new Date(doc.date).getMonth() + 1 === month,
    ),
  );

  const totalDocs = monthDocs.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalDocs / CALENDAR_ITEMS_PER_PAGE),
  );
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * CALENDAR_ITEMS_PER_PAGE;
  const paginatedDocs = monthDocs.slice(
    startIndex,
    startIndex + CALENDAR_ITEMS_PER_PAGE,
  );

  return {
    allEvents: mapCalendarDocsToEvents(monthDocs),
    events: mapCalendarDocsToEvents(paginatedDocs),
    totalDocs,
    totalPages,
    currentPage,
  };
}

export async function getTodayEvent() {
  const payload = await getPayload({ config });
  const today = new Date();
  const rangeStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const rangeEnd = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );
  const result = await payload.find({
    collection: "calendar",
    limit: 1,
    sort: "date",
    where: {
      and: [
        {
          date: {
            greater_than_equal: rangeStart,
          },
        },
        {
          date: {
            less_than: rangeEnd,
          },
        },
      ],
    },
  });

  return mapCalendarDocsToEvents(result.docs as Calendar[])[0];
}
