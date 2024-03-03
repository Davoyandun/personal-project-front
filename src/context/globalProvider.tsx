import React from "react";
import { ImagesProvider } from "./imagesContext";
import { BrandsProvider } from "./brandsContext";

interface IGlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return (
    <ImagesProvider>
      <BrandsProvider>{children}</BrandsProvider>
    </ImagesProvider>
  );
};

export default GlobalProvider;
