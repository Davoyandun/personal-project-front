import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

import {
  applyFilterCategory,
  applyFilterByRating,
  applySortByPrice,
} from "../lib/utils";
import { Product, SearchContextType, SearchProviderProps } from "@/lib/types";

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

function SearchProvider({ children }: SearchProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [imageProduct, setImageProduct] = useState<string>("");
  const [titleProduct, setTitleProduct] = useState<string>("");
  const [priceProduct, setPriceProduct] = useState<string>("");
  const [descriptionProduct, setDescriptionProduct] = useState<string>("");
  const [ratingProduct, setRatingProduct] = useState<number>(0);
  const [idProduct, setIdProduct] = useState<number>(0);
  const [sortByPrice, setSortByPrice] = useState<string>("name");
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  };
  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        const categoriesList = await getCategories();
        setProducts(productList);
        setOriginalProducts(productList);
        setCategories(categoriesList);
        setIsLoading(false);
      } catch (error: any) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const productosFilteredByCategory = applyFilterCategory(
      originalProducts,
      categoriesFilter
    );
    const productsFilteredByRating = applyFilterByRating(
      productosFilteredByCategory,
      ratingFilter
    );
    const sortedProducts = applySortByPrice(
      productsFilteredByRating,
      sortByPrice
    );

    setProducts(sortedProducts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByPrice, categoriesFilter, ratingFilter]);

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  });
  return (
    <SearchContext.Provider
      value={{
        categories,
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        ratingProduct,
        setRatingProduct,
        idProduct,
        setIdProduct,
        sortByPrice,
        setSortByPrice,
        setCategoriesFilter,
        setRatingFilter,
        ratingFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
