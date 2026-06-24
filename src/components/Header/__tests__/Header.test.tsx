import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

// Mock dataAccess function
jest.mock("@/dataAccess/fetchPayloadCollection", () => ({
  getSocialMediaLinks: jest.fn().mockResolvedValue({
    data: [],
  }),
}));

// Mock HeaderMobile
jest.mock("../HeaderMobile/HeaderMobile", () => ({
  HeaderMobile: () => (
    <div data-testid="header-mobile" className="tablet:hidden">
      Mobile Header
    </div>
  ),
}));

// Mock HeaderTabAndDesktop
jest.mock("../HeaderTabletAndDesktop/HeaderTabAndDesktop", () => ({
  HeaderTabAndDesktop: () => (
    <div data-testid="header-tab-desktop" className="hidden tablet:flex">
      Desktop Header
    </div>
  ),
}));

// Mock Container
jest.mock("@/components/shared/Container", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Header component", () => {
  it("renders the header container", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders HeaderMobile when on a mobile screen", () => {
    render(<Header />);

    expect(screen.getByTestId("header-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("header-mobile")).toHaveClass("tablet:hidden");
  });

  it("renders HeaderTabAndDesktop when on a tablet or desktop screen", () => {
    render(<Header />);

    expect(screen.getByTestId("header-tab-desktop")).toBeInTheDocument();
    expect(screen.getByTestId("header-tab-desktop")).toHaveClass(
      "hidden",
      "tablet:flex",
    );
  });

  it("renders both header components", () => {
    render(<Header />);

    expect(screen.getByTestId("header-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("header-tab-desktop")).toBeInTheDocument();
  });
});
