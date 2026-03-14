import { AK_DATA } from "@/data/akData";
import { DonateModal } from "../DonateModal";
import { CardHeader } from "../SupportCard/CardHeader";
import { SupportCard } from "../SupportCard";

export const DonationCard = () => (
  <SupportCard>
    <CardHeader>Wpłać darowiznę:</CardHeader>
    <div className="mt-3 space-y-2 desktop:mt-4">
      <p>Nr konta bankowego:</p>
      <p>
        <strong className="select-all">{AK_DATA.bank.name}</strong>
      </p>
      <p>
        <strong className="select-all">{AK_DATA.bank.accountNumber}</strong>
      </p>
    </div>
    <DonateModal />
  </SupportCard>
);
