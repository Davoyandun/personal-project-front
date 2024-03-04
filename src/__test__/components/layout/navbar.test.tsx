import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavbarComponent } from "@/components/layout/navbar";

describe("NavbarComponent", () => {
  it("should render the component", () => {
    const { getByText } = render(<NavbarComponent />);

    expect(getByText("Servicios")).toBeInTheDocument();
    expect(getByText("Productos")).toBeInTheDocument();
    expect(getByText("Inicio")).toBeInTheDocument();
  });

  it("should redirect correctly", () => {
    const { getByText } = render(<NavbarComponent />);

    expect(getByText("Servicios")).toHaveAttribute("href", "https://wa.me/593603160500/?text=Hola%20David,%20tienes%2010/10%20en%20la%20evaluacion");
    expect(getByText("Productos")).toHaveAttribute("href", "/productos");
    expect(getByText("Inicio")).toHaveAttribute("href", "/");
  });
});
