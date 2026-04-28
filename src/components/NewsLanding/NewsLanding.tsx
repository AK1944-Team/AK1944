import Container from "../shared/Container";
import { Button } from "../shared/Button/Button";
import { Heading } from "../shared/Heading/Heading";
import { NewsItem } from "../shared/NewsItem/NewsItem";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";
import { Routes } from "@/routes";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import { getTodayEvent } from "@/dataAccess/calendar";

export const NewsLanding = async () => {
  const { docs: posts } = await fetchCollection({
    collection: "news",
    query: { limit: 2 },
  });

  const eventForToday = await getTodayEvent();

  return (
    <section>
      <div className="flex items-center justify-center bg-white py-10 text-textDarkGreen contrast:bg-black00">
        <Heading variant="h2" color="green" contrast="yellow" underline>
          Aktualności
        </Heading>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 bg-greenMain py-10">
        <Container className="flex flex-col items-center justify-center gap-10 tablet:px-11 desktop:flex-row-reverse desktop:gap-36 desktop:px-32">
          <div>
            <CalendarCard withButton eventForToday={eventForToday} />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 tablet:gap-10">
            {posts.map((post) => (
              <NewsItem key={post.id} newsItem={post} />
            ))}
          </div>
        </Container>
        <Button
          variant="primary"
          label="Przejdź do archiwum"
          ariaDescription="Przejdź do archiwum"
          className="bg-transparent contrast:bg-transparent py-0 underline shadow-none"
          href={Routes.ARCHIVE}
        />
      </div>
    </section>
  );
};
