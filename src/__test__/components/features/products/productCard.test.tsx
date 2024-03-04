import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "@/components/features/products/productCard";

describe("ProductCard Component", () => {
  const productProps = {
    image: "/path/to/image.jpg",
    title: "Producto de Prueba",
    price: "100",
  };

  it("renders the component with all props correctly", () => {
    render(<ProductCard {...productProps} />);

    const image = screen.getByRole("img");
    const title = screen.getByText(productProps.title);
    const price = screen.getByText(`$${productProps.price}`);

    expect(image).toHaveAttribute("alt", productProps.title);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("displays the correct title and price", () => {
    render(<ProductCard {...productProps} />);

    expect(screen.getByText(productProps.title)).toBeInTheDocument();
    expect(screen.getByText(`$${productProps.price}`)).toBeInTheDocument();
  });

  it("checks for class names to ensure styling is applied", () => {
    const { container } = render(<ProductCard {...productProps} />);

    expect(container.firstChild).toHaveClass(
      "max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700"
    );
  });

  it("validates the presence and correctness of image attributes", () => {
    render(<ProductCard {...productProps} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("alt", productProps.title);
  });
});
