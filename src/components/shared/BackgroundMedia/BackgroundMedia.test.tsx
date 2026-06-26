import { render } from "@testing-library/react";
import { BackgroundMedia, BackgroundMediaProps } from "./BackgroundMedia";

describe("BackgroundMedia", () => {
  const defaultProps: BackgroundMediaProps = {
    children: <div>Test Child</div>,
    src: "/test-image.jpg",
    alt: "Background Image",
  };

  it("renders without crashing", () => {
    const { container } = render(<BackgroundMedia {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it("renders the background image with correct src", () => {
    const { getByAltText } = render(<BackgroundMedia {...defaultProps} />);
    const image = getByAltText("Background Image");
    expect(image).toHaveAttribute("src");
  });

  it("renders children correctly", () => {
    const { getByText } = render(<BackgroundMedia {...defaultProps} />);
    const child = getByText("Test Child");
    expect(child).toBeInTheDocument();
  });
});
