import { Heading } from "@/components/shared/Heading/Heading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { IconMapPin } from "@/icons/IconMapPin";

export const MemorialHeadingSection = ({
  name,
  location,
}: {
  name: string;
  location: string;
}) => (
  <>
    <div className="mb-10 mt-10">
      <Breadcrumbs />
    </div>
    <Heading
      variant="h3"
      contrast="yellow"
      color="green"
      className="mb-8 mt-16 font-bold desktop:text-32"
    >
      {name}
    </Heading>
    <p className="mb-8 flex items-center gap-2 text-textLightGreen">
      <IconMapPin className="size-5" aria-hidden="true" />
      <strong className="font-lora text-24 font-bold">{location}</strong>
    </p>
  </>
);
