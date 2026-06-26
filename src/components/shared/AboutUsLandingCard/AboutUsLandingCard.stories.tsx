import type { Meta, StoryObj } from "@storybook/react";
import AboutUsLandingCard from "./AboutUsLandingCard";

const meta: Meta<typeof AboutUsLandingCard> = {
  title: "Components/Shared/AboutUsLandingCard",
  component: AboutUsLandingCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    image: {
      control: {
        type: "object",
      },
      description: "The image properties",
    },
    heading: {
      control: {
        type: "text",
      },
      description: "The heading text",
    },
    description: {
      control: {
        type: "text",
      },
      description: "The description text",
    },
    buttonLabel: {
      control: {
        type: "text",
      },
      description: "The button label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutUsLandingCard>;

export const Default: Story = {
  args: {
    image: {
      src: "/images/history_AK.webp",
      alt: "Historia AK. Sanitariuszki szpitala polowego III Zgrupowania.",
      width: 350,
      height: 190,
    },
    heading: "Historia AK",
    description:
      "ŚZŻAK powstał w 1990 roku w Polsce z inicjatywy byłych żołnierzy Armii Krajowej, którzy pragnęli upamiętnić działalność jednej z największych podziemnych armii II wojny światowej.",
    buttonLabel: "Poznaj historię",
  },
};
