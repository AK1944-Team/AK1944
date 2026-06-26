"use client";
import Container from "../shared/Container";
import { BackgroundMedia } from "../shared/BackgroundMedia/BackgroundMedia";
import { Heading } from "../shared/Heading/Heading";
import { history } from "@/data/historyData";
import Image from "next/image";
import { Button } from "../shared/Button/Button";
import { Routes } from "@/routes";

const { title, content } = history.biograms;

export const HistoryBiogramComponent = () => (
  <BackgroundMedia
    alt=""
    src="/images/history/main/paper.png"
    sizes="(max-width: 768px) 100vw, 540px"
    className="absolute object-fill contrast:hidden"
    aria-hidden="true"
  >
    <Container className="relative py-10 contrast:border-2 contrast:border-yellowContrast desktop:px-10">
      <Heading variant="h3" contrast="yellow" color="green">
        {title}
      </Heading>
      <div className="md:flex">
        <p className="my-6 font-courier text-lg md:w-2/3">{content}</p>
        <div className="relative m-auto flex h-[300px] w-full max-w-[300px] items-center">
          <Image
            src="/images/history/main/veteran.webp"
            alt="Zdjęcie weterana Armii Krajowej"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Button
        variant="primary"
        label="Sprawdź"
        ariaDescription="Sprawdź"
        className="m-auto mt-6"
        href={Routes.BIOGRAMS}
      />
    </Container>
  </BackgroundMedia>
);
