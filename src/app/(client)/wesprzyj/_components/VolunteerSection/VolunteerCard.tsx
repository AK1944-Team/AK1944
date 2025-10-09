import { VoluntaryIcon } from "@/icons/VoluntaryIcon";
import { SupportCard } from "../SupportCard";
import { Button } from "@/components/shared/Button/Button";
import { Routes } from "@/routes";

interface Props {
  buttonText?: string;
  href?: string;
}

export const VolunteerCard = ({
  buttonText = "Zostań wolontariuszem",
  href = Routes.VOLUNTEERS,
}: Props) => (
  <SupportCard className="space-y-4">
    <VoluntaryIcon />
    <Button href={href} label={buttonText} ariaDescription={buttonText} />
  </SupportCard>
);
