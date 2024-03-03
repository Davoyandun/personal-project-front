"use client";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ImagesSlider } from "../ui/images-slider";
import { ImagesContext } from "@/context/imagesContext";

export function IntroSection() {
  const { images, loadingImages, errorWithImages } = useContext(ImagesContext);
  if (loadingImages) {
    return (
      <div className="h-[40rem] flex justify-center items-center">
        <motion.h1 className="font-bold text-xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-800 py-4">
          Del @gro
        </motion.h1>
        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Soluciones para el <br /> agro
        </motion.p>
      </div>
    );
  }
  const finalImages = images?.map((image: any) => image.img) as string[];

  return (
    <ImagesSlider className="h-[40rem]" images={finalImages}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.h1 className="font-bold text-xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-800 py-4">
          Del @gro
        </motion.h1>
        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Soluciones para el <br /> agro
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
