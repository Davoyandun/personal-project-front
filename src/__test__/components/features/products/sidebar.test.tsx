import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Sidebar from "@/components/features/products/sidebar";

describe("Sidebar", () => {
  const mockSetCategoriesFilter = jest.fn();
  const mockSetRatingFilter = jest.fn();
  const categories = ["Electronics", "Books", "Clothing"];
  const ratingFilter = 0;

  beforeEach(() => {
    render(
      <Sidebar
        categories={categories}
        setCategoriesFilter={mockSetCategoriesFilter}
        setRatingFilter={mockSetRatingFilter}
        ratingFilter={ratingFilter}
      />
    );
  });

  test("renders category checkboxes", () => {
    categories.forEach((category) => {
      expect(screen.getByLabelText(category)).toBeInTheDocument();
    });
  });

  test("clicking a category checkbox calls setCategoriesFilter", () => {
    const checkbox = screen.getByLabelText(categories[0]);

    fireEvent.click(checkbox);

    expect(mockSetCategoriesFilter).toHaveBeenCalled();
  });
});
