"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function ProductCard({
  img,
  title,
  description,
  price,
}: {
  img: string;
  title: string;
  description: string;
  price: number;
  className?: string;
}) {
  return (
    <div>
      <BackgroundGradient className="row-span-61 rounded-xl group hover:shadow-lg transition duration-200 ease-in-out shadow-md p-6 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-transparent justify-between flex flex-col space-y-4">
        <div className="flex justify-center">
          <Image
            src={img}
            alt={title}
            height="200"
            width="200"
            className="object-contain rounded-lg border border-gray-300 dark:border-gray-700"
          />
        </div>
        <p className="text-lg sm:text-xl font-semibold text-black dark:text-white mt-4">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {description.substring(0, 200) + "..."}
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="rounded-md bg-gradient-to-r from-red-500 to-red-500 hover:from-red-800 hover:to-purple-500 transition duration-200 ease-in-out text-white py-2 px-4 text-sm font-bold">
            <span>Precio: </span>
            <span className="ml-2 bg-neutral-700 dark:bg-neutral-500 rounded-full text-xs px-3 py-1 text-white">
              ${price}
            </span>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
