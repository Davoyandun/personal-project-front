// Navbar.test.js
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavbarComponent } from "@/components/layout/navbar";
import { act } from "react-dom/test-utils";

describe("NavbarComponent", () => {
  it("should render the component", () => {
    const { getByRole, getByText } = render(<NavbarComponent />);

    expect(getByRole("navigation")).toBeInTheDocument();
    expect(getByText("Servicios")).toBeInTheDocument();
    expect(getByText("Productos")).toBeInTheDocument();
    expect(getByText("Sobre Nosotros")).toBeInTheDocument();
  });

  it("should change type when the icon is clicked", async () => {
    const { getByText, baseElement } = render(<NavbarComponent />);

    const menuItem = getByText("Servicios");

    fireEvent.mouseEnter(menuItem);

    expect(getByText("Asesoramiento")).toBeInTheDocument();
    expect(getByText("Venta de productos")).toBeInTheDocument();
  });

  it("should show content when element is active", () => {
    const { getByText } = render(<NavbarComponent />);

    const menuItem = getByText("Sobre Nosotros");
    fireEvent.mouseEnter(menuItem);

    expect(getByText("Contactos")).toBeInTheDocument();
    expect(getByText("Información")).toBeInTheDocument();
  });
});
