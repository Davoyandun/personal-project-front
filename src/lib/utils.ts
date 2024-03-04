import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const applySortByPrice = (products, sortByPrice) => {
  let sortedProducts = JSON.parse(JSON.stringify(products));
  if (sortByPrice === "Price_Low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "Price_High") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    sortedProducts.sort((a, b) => a.id - b.id);
  }
  return sortedProducts;
};

export const applyFilterCategory = (products, categoriesFilter) => {
  if (categoriesFilter.length === 0) {
    return products;
  }
  return products.filter((product) => {
    const productCategory =
      product.category[0] + product.category.slice(1);

    return categoriesFilter.includes(productCategory);
  });
};

export const applyFilterByRating = (products, ratingFilter) => {
  return products.filter((product) => product.rating.rate >= ratingFilter);
};
