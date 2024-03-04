import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchContext } from "@/context/productsContext";
import Products from "@/components/features/products/products";
import { SearchContextType } from "@/lib/types";

describe("Products Component", () => {
  const searchContextValue = {
    searchedProducts: [],
    categories: [],
    setCategoriesFilter: jest.fn(),
    setRatingFilter: jest.fn(),
    ratingFilter: 0,
    setSortByPrice: jest.fn(),
    setSearchValue: jest.fn(),
    searchValue: "",
  };

  it("renders correctly with given context", () => {
    render(
      <SearchContext.Provider
        value={searchContextValue as any as SearchContextType}
      >
        <Products />
      </SearchContext.Provider>
    );
    const rates = screen.getByText("Rates:");
    const order = screen.getByText("Ordenar por:");
    const price = screen.getByText("Price: High to Low");

    expect(rates).toBeInTheDocument();
    expect(order).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
