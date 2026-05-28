"use client";

import { type ReactNode } from "react";
import { useTheme } from "next-themes";
import { Elements } from "@stripe/react-stripe-js";
import {
  loadStripe,
  type Stripe,
  type StripeElementsOptions,
} from "@stripe/stripe-js";

const COLORS = {
  normal: {
    text: "#163020",
    background: "#FFFFFF",
    placeholder: "#D9D9D9",
    danger: "#D31828",
  },
  contrast: {
    text: "#FFF205",
    background: "#000000",
    placeholder: "rgba(255, 242, 5, 0.5)",
    danger: "#0080ff",
  },
} as const;

const FONT_FAMILY = "figtree, sans-serif";
const FONT_SIZE_SM = "0.875rem";

const buildAppearance = (
  isContrast: boolean,
): StripeElementsOptions["appearance"] => {
  const c = isContrast ? COLORS.contrast : COLORS.normal;

  return {
    labels: "above",
    theme: "flat",
    variables: {
      colorText: c.text,
      colorDanger: c.danger,
      colorBackground: c.background,
      colorPrimary: c.text,
      colorTextPlaceholder: c.placeholder,
      fontFamily: FONT_FAMILY,
      fontSizeSm: FONT_SIZE_SM,
      borderRadius: "0.375rem",
      focusOutline: "none",
      focusBoxShadow: "none",
    },
    rules: {
      ".Input": {
        border: "none",
        padding: "0.375rem 0.75rem",
        transition: "color 200ms ease-in-out",
        boxShadow: `inset 0 0 0 1px ${c.placeholder}`,
      },
      ".Input:focus": {
        boxShadow: `inset 0 0 0 2px ${c.text}`,
      },
      ".Input--invalid": {
        color: c.danger,
        boxShadow: `inset 0 0 0 1px ${c.danger}`,
      },
      ".Input--invalid:focus": {
        boxShadow: `inset 0 0 0 2px ${c.danger}`,
      },
      ".Label": {
        color: c.text,
        fontSize: FONT_SIZE_SM,
        lineHeight: "1.5rem",
        fontWeight: "500",
      },
      ".Error": {
        color: c.danger,
        fontSize: FONT_SIZE_SM,
        lineHeight: "1.5rem",
        marginTop: "0.25rem",
      },
      ".Tab": {
        border: "none",
        boxShadow: `inset 0 0 0 1px ${c.placeholder}`,
        backgroundColor: c.background,
        color: c.text,
      },
      ".Tab--selected": {
        backgroundColor: isContrast ? "#FFF205" : c.background,
        color: isContrast ? "#000000" : c.text,
        boxShadow: isContrast
          ? "inset 0 0 0 2px #000000"
          : `inset 0 0 0 2px ${c.text}`,
      },
      ".Tab:hover": {
        boxShadow: `inset 0 0 0 1px ${c.text}`,
      },
      ".TabLabel": {
        color: "inherit",
      },
      ".RedirectText": {
        color: c.text,
      },
      ".TermsText": {
        color: c.text,
      },
      ".TermsLink": {
        color: c.text,
      },
    },
  };
};

let stripePromise: Promise<Stripe | null>;
const getStripePromise = () => {
  const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
  }

  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

interface Props {
  clientSecret: string;
  children: ReactNode;
}

export const StripeElementsWrapper = ({ clientSecret, children }: Props) => {
  const { resolvedTheme } = useTheme();
  const appearance = buildAppearance(resolvedTheme === "contrast");

  return (
    <Elements
      stripe={getStripePromise()}
      options={{ clientSecret, appearance }}
    >
      {children}
    </Elements>
  );
};
