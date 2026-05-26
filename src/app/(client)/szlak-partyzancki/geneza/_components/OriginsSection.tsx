import React from "react";
import { Heading } from "@/components/shared/Heading/Heading";
import { Paragraph } from "../data/paragraphs";
import { BlockSwitch } from "./BlockSwitch";

export const OriginsSection = ({ title, content }: Paragraph) => {
  return (
    <section className="flex flex-col">
      <Heading
        contrast="yellow"
        color="green"
        className="py-6 !text-28 leading-8 tablet:!text-32"
      >
        {title}
      </Heading>

      {content.map((block) => (
        <BlockSwitch key={block.key} block={block} />
      ))}
    </section>
  );
};
