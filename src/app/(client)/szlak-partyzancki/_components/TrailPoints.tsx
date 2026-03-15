import { useState } from "react";
import { trails, TrailSlug } from "../data/trails";
import { Button } from "@/components/shared/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { Heading } from "@/components/shared/Heading/Heading";

interface TrailPointsProps {
  activeTrail: TrailSlug;
}

export const TrailPoints = ({ activeTrail }: TrailPointsProps) => {
  const points = trails[activeTrail].trailPoints;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const goToNext = () =>
    setActiveIndex((prev) =>
      prev !== null && prev < points.length - 1 ? prev + 1 : prev,
    );

  return (
    <section className="pb-12 desktop:pb-20">
      <Heading
        align="start"
        color="green"
        contrast="yellow"
        className="pb-5 desktop:pb-10"
      >
        Punkty Szlaku Partyzanckiego:
      </Heading>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {points.map((point, index) => (
          <Button
            key={index}
            label={point.point}
            iconName="info"
            variant="secondary"
            size="large"
            ariaDescription={`Zobacz opis punktu ${point.point}`}
            onClick={() => openModal(index)}
            className="mx-auto min-h-[108px] !w-[260px] font-bold text-redMain"
            align="start"
          />
        ))}
      </div>

      <Modal
        isOpen={activeIndex !== null}
        onClose={closeModal}
        className="desktop:min-h-[520px]"
      >
        {activeIndex !== null && (
          <div className="flex min-h-[500px] max-w-[600px] flex-col px-2 tablet:px-5 desktop:min-h-[420px]">
            <Heading variant="h3" color="white" contrast="yellow">
              {points[activeIndex].point}
            </Heading>
            <div className="mt-4 overflow-y-auto pr-2">
              <p className="pb-6 text-white">
                {points[activeIndex].description}
              </p>
            </div>
            <div className="mx-auto mt-auto flex flex-col gap-5 tablet:flex-row tablet:justify-between">
              <Button
                label="Poprzedni punkt"
                ariaDescription="Zobacz poprzedni punkt szlaku"
                variant="secondary"
                onClick={goToPrev}
                disabled={activeIndex === 0}
                className="w-[175px]"
              />
              <Button
                label="Następny punkt"
                ariaDescription="Zobacz następny punkt szlaku"
                variant="primary"
                onClick={goToNext}
                disabled={activeIndex === points.length - 1}
                className="w-[175px]"
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
