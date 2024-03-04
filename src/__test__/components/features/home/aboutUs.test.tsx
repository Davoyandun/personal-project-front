import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "@/components/features/home/aboutUs";

describe("AboutUs Component", () => {
  it("renders the component", () => {
    const { getByText } = render(<AboutUs />);

    const title1 = getByText(/Soluciones para el agro/i);
    const title2 = getByText(/Nosotros cuidamos tu cosecha/i);
    const title3 = getByText(/Tus aliados en el campo/i);

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  });

  it("displays the correct number of sections", () => {
    const { container } = render(<AboutUs />);
    const sections = container.querySelectorAll("div.mb-10");

    expect(sections.length).toBe(3);
  });

  it("renders images correctly", () => {
    const { getAllByRole } = render(<AboutUs />);

    const images = getAllByRole("img");

    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute(
      "alt",
      "imagen de información no disponible"
    );
  });
});
