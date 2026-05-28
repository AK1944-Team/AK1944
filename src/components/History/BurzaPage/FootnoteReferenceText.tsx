import { Fragment } from "react";

type Props = {
  text: string;
};

export const BURZA_FOOTNOTES_SECTION_ID = "burza-footnotes";

export const getBurzaFootnoteId = (footnoteNumber: number | string) =>
  `burza-footnote-${footnoteNumber}`;

export const FootnoteReferenceText = ({ text }: Props) => {
  const parts = text.split(/(\[\d+\])/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[(\d+)\]$/);

    if (!match) {
      return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
    }

    const footnoteNumber = match[1];

    return (
      <a
        key={`${footnoteNumber}-${index}`}
        href={`#${getBurzaFootnoteId(footnoteNumber)}`}
        aria-label={`Przejdz do przypisu ${footnoteNumber}`}
        className="underline decoration-textDarkGreen underline-offset-2 transition-opacity hover:opacity-70"
      >
        {part}
      </a>
    );
  });
};
