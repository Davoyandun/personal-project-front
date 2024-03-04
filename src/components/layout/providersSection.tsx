import React, { useContext } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { TbCar } from "react-icons/tb";
import { BrandsContext } from "@/context/brandsContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brand, FinalBrandItem } from "@/lib/types";



export function ProvidersSection() {
  const { brands, loadingBrands } = useContext(BrandsContext);

  if (loadingBrands) {
    return <div>Loading...</div>;
  }

  const finalBrands: FinalBrandItem[] =
    brands?.map((brand: Brand, index: number) => ({
      title: brand.name,
      description: brand.description,
      header: (
        <Image
          src={brand.img}
          alt={brand.name}
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
          width={200}
          height={300}
        />
      ),
      className: index % 2 === 0 ? "md:col-span-2" : "md:col-span-1",
      icon: <TbCar className="h-4 w-4 text-neutral-500" />,
    })) ?? [];

  return (
    <div>
      <motion.h3 className="text-4xl font-bold text-left mt-4 mb-4">
        Conoce nuestros proveedores
      </motion.h3>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {finalBrands.map((item, i) => (
          <BentoGridItem
            key={`item.id-${i}`}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
