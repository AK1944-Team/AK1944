import React from "react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Suspense } from "react";
import { mainTextFirst, mainTextTwo } from "./data/rallyTextData";
import { RallyList } from "./_components/RallyList";
import { SearchParamsProps } from "@/types";
import { Routes } from "@/routes";

export default function RalliesPage({ searchParams }: SearchParamsProps) {
  const params = React.use(searchParams);
  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  return (
    <div className="pb-20">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Rajdy
        </Heading>
        <div>
          <p className="py-3 font-sourceSans text-18">{mainTextFirst}</p>
          <p className="font-sourceSans text-18">{mainTextTwo}</p>
        </div>
        <Button
          label="Zapisz się na rajd"
          href={Routes.SIGN_TO_RALLY}
          ariaDescription="Zapisz się na rajd"
          variant="primary"
        />
        <Suspense fallback={<p>Ładowanie listy rajdów...</p>}>
          <RallyList currentPage={currentPage} />
        </Suspense>
      </Container>
    </div>
  );
}
