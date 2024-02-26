"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import imagePotatoes from "../../assets/potatoes.jpeg";

export function InfiniteGallery() {
  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
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
