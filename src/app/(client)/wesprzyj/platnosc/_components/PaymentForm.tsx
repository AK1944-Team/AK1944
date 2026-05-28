"use client";

import { PaymentElement } from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/shared/Button/Button";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { LoaderIcon } from "@/icons/LoaderIcon";
import { useCheckout } from "./useCheckout";

export const PaymentForm = () => {
  const { handleSubmit, isLoading, message, stripe, elements } = useCheckout();
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") ?? "";
  const email = searchParams?.get("email") ?? "";

  return (
    <section className="mx-auto max-w-lg py-16">
      <h1 className="sr-only">Wesprzyj nas</h1>

      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-6"
      >
        <PaymentElement
          id="payment-element"
          className="p-4"
          options={{
            defaultValues: {
              billingDetails: { name, email },
            },
          }}
        />

        <Button
          type="submit"
          disabled={!stripe || isLoading || !elements}
          size="large"
          label="Zapłać"
          ariaDescription="Zapłać"
          className="mx-auto"
        >
          {isLoading && <LoaderIcon className="animate-spin" />}
          {isLoading ? "Przetwarzanie..." : "Zapłać"}
        </Button>

        {message && <ErrorMessage>{message}</ErrorMessage>}
      </form>
    </section>
  );
};
