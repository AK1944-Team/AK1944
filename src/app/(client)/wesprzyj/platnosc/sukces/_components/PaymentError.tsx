import { Button } from "@/components/shared/Button/Button";
import IconXCircle from "@/icons/IconXCircle";

export const PaymentError = () => (
  <div className="flex flex-col items-center gap-6 text-center">
    <IconXCircle className="size-16 text-redError" />
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Wystąpił błąd podczas płatności</h1>
      <p className="text-lg text-grayDate">
        Przepraszamy, ale Twoja płatność nie została zrealizowana.
      </p>
      <p className="text-grayDate">
        Spróbuj ponownie lub skontaktuj się z nami, jeśli problem będzie się
        powtarzał.
      </p>
    </div>
    <div className="flex gap-4">
      <Button
        href="/wesprzyj"
        label="Spróbuj ponownie"
        ariaDescription="Spróbuj dokonać wpłaty ponownie"
      />
      <Button
        href="/kontakt"
        variant="secondary"
        label="Kontakt"
        ariaDescription="Przejdź do strony kontaktowej"
      />
    </div>
  </div>
);
