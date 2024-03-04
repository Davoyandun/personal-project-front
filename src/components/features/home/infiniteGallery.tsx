import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { ImagesContext } from "@/context/imagesContext";
const InfiniteGallery = () => {
  const { images, loadingImages } = React.useContext(ImagesContext);
  const finalImages = images?.map((image: any) => {
    return {
      img: image.img,
      alt: image.alt,
    };
  }) as [];
  return loadingImages ? (
    <div>
      <motion.h3 className="text-4xl font-bold text-left mt-4 mb-4">
        Conoce Nuestro Trabajo
      </motion.h3>
      <p>Loading...</p>
    </div>
  ) : (
    <div>
      <motion.h3 className="text-4xl font-bold text-left mt-4 mb-4">
        Conoce Nuestro Trabajo
      </motion.h3>
      <InfiniteMovingCards items={finalImages} direction="right" speed="slow" />
    </div>
  );
};

export default InfiniteGallery;
