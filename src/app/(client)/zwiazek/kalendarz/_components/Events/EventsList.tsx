import { EventCard } from "@/app/(client)/zwiazek/kalendarz/_components/Events/EventCard";
import type { CalendarEvent } from "@/dataAccess/calendar";

interface Props {
  events: CalendarEvent[];
}

export const EventsList = ({ events }: Props) => {
  return (
    <article className="flex w-full flex-col items-center gap-10">
      {events.map((card, index, filteredCards) => {
        const [day, month] = card.date.split(".");
        return (
          <EventCard
            key={index}
            anchorId={`event-${day}-${month}`}
            calendar={card}
            isLast={index === filteredCards.length - 1}
          />
        );
      })}
    </article>
  );
};
