import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderMobile } from "../HeaderMobile";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

// Mock dataAccess function
jest.mock("@/dataAccess/fetchPayloadCollection", () => ({
  getSocialMediaLinks: jest.fn().mockResolvedValue({
    data: [
      {
        id: "1",
        name: "Facebook",
        url: "https://facebook.com",
        icon: { id: "1", url: "/icons/facebook.svg", alt: "Facebook" },
      },
    ],
  }),
}));

jest.mock("../../HeaderLogo", () => ({
  HeaderLogo: () => <div>Logo</div>,
}));

jest.mock("./../HeaderMobileMenuWrapper", () => ({
  HeaderMobileMenuWrapper: () => (
    <div data-testid="mobile-menu" className="translate-x-full">
      <button data-testid="button">Menu</button>
    </div>
  ),
}));

describe("HeaderMobile", () => {
  it("renders the logo", async () => {
    render(await HeaderMobile());
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });

  it("renders the correct text", async () => {
    render(await HeaderMobile());
    expect(
      screen.getByText("Światowy Związek Żołnierzy AK"),
    ).toBeInTheDocument();
  });

  it("renders the text with correct classes", async () => {
    render(await HeaderMobile());
    expect(screen.getByText("Światowy Związek Żołnierzy AK")).toHaveClass(
      "h-10 w-[135px] text-center font-courier text-14 text-white",
    );
  });

  it("renders the menu button", async () => {
    render(await HeaderMobile());
    const menuButton = screen.getByTestId("button");
    expect(menuButton).toBeInTheDocument();
  });

  it("renders the menu with correct classes", async () => {
    render(await HeaderMobile());
    expect(screen.getByTestId("mobile-menu")).toHaveClass("translate-x-full");
  });

  it("renders the header mobile container", async () => {
    render(await HeaderMobile());
    expect(screen.getByTestId("header-mobile")).toBeInTheDocument();
  });

  it("renders the header mobile with correct classes", async () => {
    render(await HeaderMobile());
    expect(screen.getByTestId("header-mobile")).toHaveClass(
      "relative h-10 tablet:hidden",
    );
  });

  it("does not have any accessibility violations (axe)", async () => {
    const component = await HeaderMobile();
    const { container } = render(component);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
