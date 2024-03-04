import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { Dispatch, SetStateAction } from "react";

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface SearchContextType {
  categories: string[];
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchedProducts: Product[];
  isLoading: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  imageProduct: string;
  setImageProduct: Dispatch<SetStateAction<string>>;
  titleProduct: string;
  setTitleProduct: Dispatch<SetStateAction<string>>;
  priceProduct: string;
  setPriceProduct: Dispatch<SetStateAction<string>>;
  descriptionProduct: string;
  setDescriptionProduct: Dispatch<SetStateAction<string>>;
  ratingProduct: number;
  setRatingProduct: Dispatch<SetStateAction<number>>;
  idProduct: number;
  setIdProduct: Dispatch<SetStateAction<number>>;
  sortByPrice: string;
  setSortByPrice: Dispatch<SetStateAction<string>>;
  setCategoriesFilter: Dispatch<SetStateAction<string[]>>;
  setRatingFilter: Dispatch<SetStateAction<number>>;
  ratingFilter: number;
}

export interface Brand {
  name: string;
  description: string;
  img: string;
}
export interface FinalBrandItem {
  title: string;
  description: string;
  header: JSX.Element;
  className: string;
  icon: JSX.Element;
}

export interface brandsState {
  brands: [] | null;
  loadingBrands: boolean;
  errorWithBrands: string | null;
}

export interface BrandsContextValue extends brandsState {}

export interface IBrandsProviderProps {
  children: React.ReactNode;
}

export interface IGlobalProviderProps {
  children: React.ReactNode;
}

export interface ImagesState {
  images: [] | null;
  loadingImages: boolean;
  errorWithImages: string | null;
}

export interface ImagesContextValue extends ImagesState {}

export interface IImagesProviderProps {
  children: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface SearchProviderProps {
  children: React.ReactNode;
}

export interface IProductModalProps {
  img: string;
  title: string;
  description: string;
  price: string;
}

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}
