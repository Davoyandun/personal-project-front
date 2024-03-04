import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/features/products/searchBar";

describe("SearchBar", () => {
  const mockSetSearchValue = jest.fn();
  const mockSetSortByPrice = jest.fn();
  const searchValue = "";

  beforeEach(() => {
    render(
      <SearchBar
        searchValue={searchValue}
        setSearchValue={mockSetSearchValue}
        setSortByPrice={mockSetSortByPrice}
      />
    );
  });

  it("renders search input", () => {
    const inputElement = screen.getByPlaceholderText(/buscar.../i);

    expect(inputElement).toBeInTheDocument();
  });

  it("allows typing in the search input", () => {
    const inputElement = screen.getByPlaceholderText(/buscar.../i);

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockSetSearchValue).toHaveBeenCalledWith("test");
  });

  it("allows changing the sort by price option", () => {
    const selectElement = screen.getByLabelText(/ordenar por:/i);

    fireEvent.change(selectElement, { target: { value: "Price_High" } });

    expect(mockSetSortByPrice).toHaveBeenCalledWith("Price_High");
  });
});
