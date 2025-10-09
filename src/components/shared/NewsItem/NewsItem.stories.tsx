import { Meta, StoryObj } from "@storybook/react";
import { NewsItem } from "./NewsItem";

const meta: Meta<typeof NewsItem> = {
  title: "Components/shared/NewsItem",
  component: NewsItem,
  argTypes: {
    post: {
      control: "object",
      description: "Obiekt zawierający dane artykułu",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NewsItem>;

export const Default: Story = {
  args: {
    post: {
      createdAt_tz: "Europe/Berlin",
      createdAt: "2025-10-02T21:37:57.863Z",
      updatedAt: "2025-10-02T21:37:57.863Z",
      published: true,
      id: "post-id",
      title: "This is another example that we created for testing purposes",
      teaser:
        "Sapiente amet nostrum veniam enim repellendus hic, porro molestias deleniti quod quasi quis, tempora cumque rerum tempore maxime? Quibusdam veniam in a, repellat quam ullam similique vitae voluptate quas nobis! Labore placeat vero veritatis modi ex? Sed facilis nam consequuntur ipsam, unde veritatis perferendis, eaque repudiandae repellendus quas magni? Laudantium similique ullam architecto laborum officia ex obcaecati dolorum odit culpa.",
      // TBH this structure is messy
      content: {
        root: {
          type: "",
          children: [{ type: "", version: 1 }],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        },
      },
      heroImage: {
        createdAt: "2025-10-02T21:37:16.169Z",
        updatedAt: "2025-10-02T21:37:16.169Z",
        alt: "Some alt text",
        filename: "filename.jpg",
        mimeType: "image/jpeg",
        filesize: 2137,
        width: 2048,
        height: 1365,
        focalX: 50,
        focalY: 50,
        id: "img-id",
        url: "/public/images/news_placeholder.png",
        thumbnailURL: null,
      },
    },
  },
};
