"use client"
import Products from "@/components/features/products/products";
import { SearchProvider } from "@/context/productsContext";

export default function ParallaxScrollDemo() {
  return (
    <SearchProvider>
      <Products/>
    </SearchProvider>
  );
}