"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function CardGradientComponent() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/jordans.webp`}
          alt="jordans"
          height="300"
          width="300"
          className="object-contain"
        />
    
      </BackgroundGradient>
    </div>
  );
}