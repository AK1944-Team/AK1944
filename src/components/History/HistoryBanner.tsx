import { Heading } from "../shared/Heading/Heading";
import { history } from "@/data/historyData";
import { BackgroundMedia } from "../shared/BackgroundMedia/BackgroundMedia";
import Container from "../shared/Container";
import { Breadcrumbs } from "../shared/Breadcrumbs/Breadcrumbs";

const { title, description } = history;

export const HistoryBanner = () => (
  <BackgroundMedia
    alt="Historyczne zdjęcie 5. Pułku Strzelców Konnych"
    src="/images/history/main/history_bg.webp"
    className="absolute z-0 object-cover contrast:hidden desktop:object-fill"
    priority
  >
    <Container className="pb-36 desktop:h-[912px]" as="section">
      <Breadcrumbs />
      <Heading
        variant="h3"
        contrast="yellow"
        color="green"
        className="mb-10 mt-5"
      >
        {title}
      </Heading>
      <div className="max-w-[700px] rounded-md bg-black00/10 p-[15px] font-sourceSans text-lg text-white contrast:bg-black00/40 desktop:flex desktop:flex-col desktop:gap-6">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Container>
  </BackgroundMedia>
);
