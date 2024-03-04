import React from "react";
import { render, screen } from "@testing-library/react";
import ProductModal from "@/components/features/products/productModal";

describe("ProductModal Component", () => {
  const modalProps = {
    img: "/path/to/image.jpg",
    title: "Producto Ejemplo",
    description:
      "Descripción detallada del producto. Puede ser bastante larga, pero solo mostraremos un resumen aquí.",
    price: "99.99",
  };

  it("renders the component with all props correctly", () => {
    render(<ProductModal {...modalProps} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("alt", modalProps.title);
    expect(screen.getByText(modalProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(modalProps.description.substring(0, 200) + "...")
    ).toBeInTheDocument();
    expect(screen.getByText(`$${modalProps.price}`)).toBeInTheDocument();
  });

  it("checks for the presence and text of the price button", () => {
    render(<ProductModal {...modalProps} />);

    const priceButton = screen.getByRole("button");
    
    expect(priceButton).toHaveTextContent("Precio:");
    expect(priceButton).toContainHTML(
      `<span class="ml-2 bg-neutral-700 dark:bg-neutral-500 rounded-full text-xs px-3 py-1 text-white">$${modalProps.price}</span>`
    );
  });
});
