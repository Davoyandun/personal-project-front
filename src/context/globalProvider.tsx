import { ImagesProvider } from "./imagesContext";
import { BrandsProvider } from "./brandsContext";
import { IGlobalProviderProps } from "@/lib/types";



const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return (
    <ImagesProvider>
      <BrandsProvider>{children}</BrandsProvider>
    </ImagesProvider>
  );
};

export default GlobalProvider;
