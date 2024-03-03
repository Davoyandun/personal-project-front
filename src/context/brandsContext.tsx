import React, { createContext, useEffect, useState } from "react";
import fetchBrands from "@/services/api/brandsService";

interface brandsState {
  brands: [] | null;
  loadingBrands: boolean;
  errorWithBrands: string | null;
}

interface BrandsContextValue extends brandsState {}

const BrandsContext = createContext<BrandsContextValue>({
  brands: null,
  loadingBrands: true,
  errorWithBrands: null,
});

interface IBrandsProviderProps {
  children: React.ReactNode;
}

const BrandsProvider = ({ children }: IBrandsProviderProps) => {
  const [brandsData, setBrandsData] = useState<[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getBrands = async () => {
    setError(null);
    setLoading(true);

    try {
      const brands = await fetchBrands();
      setBrandsData(brands);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  const contextValue: BrandsContextValue = {
    brands: brandsData,
    loadingBrands: loading,
    errorWithBrands: error,
  };

  return (
    <BrandsContext.Provider value={contextValue}>
      {children}
    </BrandsContext.Provider>
  );
};

export { BrandsContext, BrandsProvider };
