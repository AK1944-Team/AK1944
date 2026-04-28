import { CalendarHeader } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarHeader";
import { weekdays } from "@/app/(client)/zwiazek/kalendarz/_utils/Dates/Dates";
import { generateCalendar } from "@/app/(client)/zwiazek/kalendarz/_utils/generateCalendar";
import { CalendarTableCell } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarTableCell";

type CalendarTableProps = {
  currentDate: Date;
  eventsDates: string[];
  prevMonth: () => void;
  nextMonth: () => void;
};

export const CalendarTable = ({
  currentDate,
  eventsDates,
  prevMonth,
  nextMonth,
}: CalendarTableProps) => {
  const calendarDays = generateCalendar(currentDate);

  return (
    <div className="flex flex-col items-center gap-5 font-lora tablet:rounded tablet:border-2 tablet:border-textLightGreen tablet:px-10 tablet:py-10 desktop:px-18">
      <CalendarHeader
        className="w-full items-center justify-between px-1.5 text-24 text-white tablet:text-32"
        iconClassName="stroke-white tablet:w-8 tablet:h-8 "
        currentDate={currentDate}
        handlePrevMonth={prevMonth}
        handleNextMonth={nextMonth}
      />
      <table className="flex flex-col items-center gap-5 desktop:gap-4">
        <thead>
          <tr className="flex items-center border-b-2 border-textLightGreen text-textLightGreen tablet:gap-6">
            {weekdays.map((day) => (
              <td
                key={day}
                aria-label={day}
                className="h-10 w-10 text-center text-18 tablet:w-11 tablet:text-24"
              >
                {day}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="text-center tablet:flex tablet:flex-col tablet:gap-y-6">
          {calendarDays.map((week, weekIndex) => (
            <tr
              key={weekIndex}
              className="flex items-center gap-0.5 tablet:gap-6"
            >
              {week.map((day, dayIndex) => (
                <CalendarTableCell
                  key={dayIndex}
                  day={day}
                  dayIndex={dayIndex}
                  currentDate={currentDate}
                  eventsDates={eventsDates}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
