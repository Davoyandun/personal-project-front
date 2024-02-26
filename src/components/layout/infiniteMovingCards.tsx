"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import imagePotatoes from "../../assets/potatoes.jpeg";

export function InfiniteMovingCardsComponent() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    img: imagePotatoes,
    alt: "image of potatoes",
  },
  {
    img: imagePotatoes,
    alt: "image of potatoes",
  },
  {
    img: imagePotatoes,
    alt: "image of potatoes",
  },
  {
    img: imagePotatoes,
    alt: "image of potatoes",
  },
];
