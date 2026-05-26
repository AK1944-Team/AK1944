import { AK_DATA } from "@/data/akData";

export const DonationInstructions = () => (
  <div className="text-greenMain contrast:text-yellowContrast max-md:max-w-full desktop:text-xl">
    <p>W swoim rocznym zeznaniu podatkowym (PIT)</p>
    <ul
      aria-label="Instrukcja przekazania 1,5% podatku"
      className="list-disc pl-6"
    >
      <li>
        wpisz numer KRS: <strong>{AK_DATA.taxDonation.krs}</strong>
      </li>
      <li>
        Podaj cel szczegółowy: <strong>{AK_DATA.taxDonation.purpose}</strong>
      </li>
      <li>Potwierdź swój wybór i złóż deklarację – to wszystko!</li>
    </ul>
  </div>
);
