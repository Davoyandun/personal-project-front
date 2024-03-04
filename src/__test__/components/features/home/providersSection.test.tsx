import React from "react";
import { render, screen } from "@testing-library/react";
import { BrandsContext } from "@/context/brandsContext";
import  ProvidersSection  from "@/components/features/home/providersSection";

describe("ProvidersSection", () => {
  const brandsMock = [
    { name: "Brand 1", description: "Description 1", img: "/img1.png" },
    { name: "Brand 2", description: "Description 2", img: "/img2.png" },
  ];

  it("Should renders loading state correctly", () => {
    const { getByText } = render(
      <BrandsContext.Provider
        value={{ brands: [], loadingBrands: true, errorWithBrands: "" }}
      >
        <ProvidersSection />
      </BrandsContext.Provider>
    );
    const loading = getByText("Loading...");

    expect(loading).toBeInTheDocument();
  });

  it("Should renders brands correctly after loading", () => {
    const { getByText, getAllByAltText } = render(
      <BrandsContext.Provider
        value={{
          brands: brandsMock as [],
          loadingBrands: false,
          errorWithBrands: "",
        }}
      >
        <ProvidersSection />
      </BrandsContext.Provider>
    );

    const brand1 = getByText("Brand 1");
    const brand2 = getByText("Brand 2");
    const description1 = getByText("Description 1");
    const description2 = getByText("Description 2");
    const allBrands = getAllByAltText(/Brand/);

    expect(brand1).toBeInTheDocument();
    expect(brand2).toBeInTheDocument();
    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
    expect(allBrands).toHaveLength(brandsMock.length);
  });

  it("Should renders the correct number of brands", () => {
    const { getAllByRole } = render(
      <BrandsContext.Provider
        value={{
          brands: brandsMock as [],
          loadingBrands: false,
          errorWithBrands: "",
        }}
      >
        <ProvidersSection />
      </BrandsContext.Provider>
    );

    const items = getAllByRole("img");

    expect(items).toHaveLength(brandsMock.length);
  });
});
