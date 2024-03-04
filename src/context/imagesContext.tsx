import { createContext, useEffect, useState } from "react";
import fetchImages from "@/services/api/imagesService";
import { IImagesProviderProps, ImagesContextValue } from "@/lib/types";



const ImagesContext = createContext<ImagesContextValue>({
  images: null,
  loadingImages: true,
  errorWithImages: null,
});


const ImagesProvider = ({ children }: IImagesProviderProps) => {
  const [imagesData, setImagesData] = useState<[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getImages = async () => {
    setError(null);
    setLoading(true);

    try {
      const images = await fetchImages();
      setImagesData(images);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const contextValue: ImagesContextValue = {
    images: imagesData,
    loadingImages: loading,
    errorWithImages: error,
  };

  return (
    <ImagesContext.Provider value={contextValue}>
      {children}
    </ImagesContext.Provider>
  );
};

export { ImagesContext, ImagesProvider };
