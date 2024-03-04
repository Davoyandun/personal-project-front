import { ProductCardProps } from "@/lib/types";
import Image from "next/image";
import React from "react";
const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div className="  space-y-4 max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="flex w-40 h-40 justify-center pt-2">
        <Image
          src={image}
          alt={title}
          className="object-contain rounded-lg   "
          width={200}
          height={200}
        />
      </div>

      <div className="px-5 pb-5">
        <h5 className="font-semibold tracking-tight text-black dark:text-white">
          {title}
        </h5>
        <div className="flex justify-between items-center">
          <span className="text-1xl font-bold text-gray-900 dark:text-white pt-2">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
