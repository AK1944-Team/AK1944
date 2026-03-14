"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { type ActionState } from "@/types";
import { stripe } from "@/utils/stripe";

const paymentSchema = z.object({
  amount: z
    .number()
    .min(2, "Minimalna kwota to 2zł")
    .refine(
      (val) => {
        return val === Number(val.toFixed(2));
      },
      {
        message: "Kwota musi mieć maksymalnie 2 miejsca po przecinku",
      },
    ),
  email: z.string().email("Nieprawidłowy adres email"),
  signature: z
    .string()
    .trim()
    .min(1, "Podpis jest wymagany")
    .max(100, "Podpis może mieć maksymalnie 100 znaków"),
});

export const donateAction = async (
  formAmount: number,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  if (!(formData instanceof FormData)) {
    return {
      status: "error",
      message: "Nieprawidłowe dane formularza",
    };
  }

  const data = Object.fromEntries(formData.entries());
  const result = paymentSchema.safeParse({ amount: formAmount, ...data });

  if (!result.success) {
    return {
      status: "error",
      issues: result.error.flatten().fieldErrors,
    };
  }

  const { amount, email, signature } = result.data;



  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "pln",
    payment_method_types: ["card", "blik", "p24"],
    receipt_email: email,
    metadata: {
      signature,
    },
  });

  if (!paymentIntent.client_secret) {
    return {
      status: "error",
      message: "Nie udało się utworzyć płatności",
    };
  }

  redirect(
    `/wesprzyj/platnosc?clientSecret=${paymentIntent.client_secret}&intentId=${paymentIntent.id}`,
  );
};
