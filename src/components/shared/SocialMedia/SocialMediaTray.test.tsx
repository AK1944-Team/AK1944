import { render, screen } from "@testing-library/react";
import { SocialMediaTray } from "./SocialMediaTray";
import { SocialMedia, Media } from "@/payload-types";

// Mock SocialMediaLink component
jest.mock("./SocialMediaLink", () => ({
  SocialMediaLink: ({
    url,
    name,
    size,
  }: {
    url: string;
    name: string;
    size?: number;
    svg: Media;
  }) => (
    <a href={url} data-testid={`social-link-${name}`} data-size={size}>
      {name}
    </a>
  ),
}));

describe("SocialMediaTray", () => {
  const mockMediaItem: Media = {
    id: "1",
    alt: "Facebook icon",
    url: "/icons/facebook.svg",
    updatedAt: "2023-01-01T00:00:00.000Z",
    createdAt: "2023-01-01T00:00:00.000Z",
  };

  const mockSocialMediaLinks: SocialMedia[] = [
    {
      id: "1",
      name: "Facebook",
      url: "https://facebook.com",
      icon: mockMediaItem,
      updatedAt: "2023-01-01T00:00:00.000Z",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      id: "2",
      name: "Instagram",
      url: "https://instagram.com",
      icon: mockMediaItem,
      updatedAt: "2023-01-01T00:00:00.000Z",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      id: "3",
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: mockMediaItem,
      updatedAt: "2023-01-01T00:00:00.000Z",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
  ];

  test("renders all social media links when provided", () => {
    render(
      <SocialMediaTray
        socialMediaLinks={mockSocialMediaLinks}
        className="flex gap-4"
      />,
    );

    expect(screen.getByTestId("social-link-Facebook")).toBeInTheDocument();
    expect(screen.getByTestId("social-link-Instagram")).toBeInTheDocument();
    expect(screen.getByTestId("social-link-LinkedIn")).toBeInTheDocument();
  });

  test("renders nothing when socialMediaLinks is undefined", () => {
    const { container } = render(<SocialMediaTray className="flex gap-4" />);

    expect(container.querySelector("nav")).toBeInTheDocument();
    expect(container.querySelector("nav")?.children.length).toBe(0);
  });

  test("renders nothing when socialMediaLinks is empty", () => {
    const { container } = render(
      <SocialMediaTray socialMediaLinks={[]} className="flex gap-4" />,
    );

    expect(container.querySelector("nav")).toBeInTheDocument();
    expect(container.querySelector("nav")?.children.length).toBe(0);
  });

  test("applies className to nav element", () => {
    const { container } = render(
      <SocialMediaTray
        socialMediaLinks={mockSocialMediaLinks}
        className="flex justify-center gap-4"
      />,
    );

    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("flex", "gap-4", "justify-center");
  });

  test("passes correct props to SocialMediaLink components", () => {
    render(
      <SocialMediaTray
        socialMediaLinks={mockSocialMediaLinks}
        iconsSize={48}
      />,
    );

    const facebookLink = screen.getByTestId("social-link-Facebook");
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com");
    expect(facebookLink).toHaveAttribute("data-size", "48");
  });

  test("uses default icon size when iconsSize is not provided", () => {
    render(<SocialMediaTray socialMediaLinks={mockSocialMediaLinks} />);

    const facebookLink = screen.getByTestId("social-link-Facebook");
    // When iconsSize is not provided, it's passed as undefined to the mock
    expect(facebookLink).not.toHaveAttribute("data-size");
  });

  test("renders nav element even without className", () => {
    const { container } = render(
      <SocialMediaTray socialMediaLinks={mockSocialMediaLinks} />,
    );

    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  test("passes icon prop correctly to SocialMediaLink", () => {
    const socialMediaWithStringIcon: SocialMedia[] = [
      {
        id: "1",
        name: "Twitter",
        url: "https://twitter.com",
        icon: mockMediaItem,
        updatedAt: "2023-01-01T00:00:00.000Z",
        createdAt: "2023-01-01T00:00:00.000Z",
      },
    ];

    render(<SocialMediaTray socialMediaLinks={socialMediaWithStringIcon} />);

    const twitterLink = screen.getByTestId("social-link-Twitter");
    expect(twitterLink).toBeInTheDocument();
  });

  test("uses key prop based on item id for proper React rendering", () => {
    const { rerender } = render(
      <SocialMediaTray socialMediaLinks={mockSocialMediaLinks} />,
    );

    expect(screen.getByTestId("social-link-Facebook")).toBeInTheDocument();

    const updatedLinks = mockSocialMediaLinks.slice(1);
    rerender(<SocialMediaTray socialMediaLinks={updatedLinks} />);

    expect(
      screen.queryByTestId("social-link-Facebook"),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("social-link-Instagram")).toBeInTheDocument();
  });
});
