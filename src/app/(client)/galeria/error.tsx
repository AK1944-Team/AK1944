"use client";

import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";
import { Button } from "@/components/shared/Button/Button";

export default function GalleryError({ reset }: { reset: () => void }) {
  return (
    <Container className="py-5">
      <Breadcrumbs />
      <div className="mb-8 mt-5">
        <Heading variant="h2" color="green" contrast="yellow">
          Galeria zdjęć
        </Heading>
      </div>

      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6">
        <div className="text-center">
          <h3 className="mb-4 font-lora text-2xl font-bold text-textDarkGreen">
            Ups! Coś poszło nie tak
          </h3>
          <p className="text-gray-600 mb-6 font-sourceSans text-18">
            Nie udało się załadować galerii. Spróbuj ponownie za chwilę.
          </p>
        </div>

        <Button
          label="Spróbuj ponownie"
          onClick={reset}
          variant="primary"
          ariaDescription="Odśwież galerię"
        />
      </div>
    </Container>
  );
}
