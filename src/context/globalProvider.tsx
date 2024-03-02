import React from "react";
import { ImagesProvider } from "./imagesContext";

interface IGlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return <ImagesProvider>{children}</ImagesProvider>;
};

export default GlobalProvider;
