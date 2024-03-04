// Navbar.test.js
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

    expect(getByText("Servicios")).toHaveAttribute("href", "/Servicios");
    expect(getByText("Productos")).toHaveAttribute("href", "/productos");
    expect(getByText("Inicio")).toHaveAttribute("href", "/");
  });
});
