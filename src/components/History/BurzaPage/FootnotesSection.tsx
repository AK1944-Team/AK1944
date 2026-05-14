import { footnotesSection } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import {
  BURZA_FOOTNOTES_SECTION_ID,
  getBurzaFootnoteId,
} from "./FootnoteReferenceText";

const { footnotesTitle, footnotes } = footnotesSection;

export const FootnotesSection = () => (
  <section
    id={BURZA_FOOTNOTES_SECTION_ID}
    className="flex scroll-mt-24 flex-col gap-6 text-16"
  >
    <Heading
      variant="h4"
      color="green"
      contrast="yellow"
      className="justify-self-start"
    >
      {footnotesTitle}
    </Heading>
    <ol className="flex flex-col gap-4 font-courier">
      {footnotes.map((footnote, index) => (
        <li
          key={index}
          id={getBurzaFootnoteId(index + 1)}
          className="scroll-mt-24"
        >
          <p>{footnote}</p>
        </li>
      ))}
    </ol>
  </section>
);
