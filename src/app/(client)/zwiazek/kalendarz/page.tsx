import { CalendarPageHeader } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarPageHeader";
import { CalendarMain } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarMain";
import Container from "@/components/shared/Container";
import { getCalendarMonthData, getTodayEvent } from "@/dataAccess/calendar";

type PageProps = {
  searchParams: Promise<{
    month?: string;
    year?: string;
    page?: string;
  }>;
};

const getCalendarParams = async (searchParams: PageProps["searchParams"]) => {
  const params = await searchParams;
  const now = new Date();
  const monthParam = Number(params.month);
  const yearParam = Number(params.year);
  const pageParam = Number(params.page);

  return {
    month:
      Number.isInteger(monthParam) && monthParam >= 1 && monthParam <= 12
        ? monthParam
        : now.getMonth() + 1,
    year:
      Number.isInteger(yearParam) && yearParam >= 1900
        ? yearParam
        : now.getFullYear(),
    page: Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1,
  };
};

export default async function CalendarPage({ searchParams }: PageProps) {
  const { month, year, page } = await getCalendarParams(searchParams);
  const [{ allEvents, events, currentPage, totalPages }, eventForToday] =
    await Promise.all([getCalendarMonthData({ month, page }), getTodayEvent()]);

  return (
    <Container className="flex flex-col items-center gap-5 p-0 tablet:gap-16 tablet:pb-20 desktop:max-w-full desktop:px-0 desktop:pb-150">
      <CalendarPageHeader />
      <CalendarMain
        currentPage={currentPage}
        eventDates={allEvents.map((event) => event.date)}
        eventForToday={eventForToday}
        events={events}
        initialDate={new Date(year, month - 1, 1)}
        totalPages={totalPages}
      />
    </Container>
  );
}
