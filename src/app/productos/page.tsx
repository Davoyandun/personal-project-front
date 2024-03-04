"use client"
import Products from "@/components/layout/products";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { SearchProvider } from "@/context/productsContext";

export default function ParallaxScrollDemo() {
  return (
    <SearchProvider>
      <Products/>
    </SearchProvider>
  );
}