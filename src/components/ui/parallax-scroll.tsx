import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { ProductModal } from "../layout/productModal";
import { Product } from "@/lib/types";
import ProductCard from "../layout/productCard";

export const ParallaxScroll = ({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const third = Math.ceil(products.length / 3);
  const firstPart = products.slice(0, third);
  const secondPart = products.slice(third, 2 * third);
  const thirdPart = products.slice(2 * third);

  return (
    <div className={`overflow-y-auto w-full ${className}`} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-8 py-20 px-4 md:px-10">
        {[firstPart, secondPart, thirdPart].map((part, colIndex) => (
          <div key={`col-${colIndex}`} className="grid gap-8">
            {part.map((el, idx) => (
              <Dialog key={`grid-${colIndex}-${idx}`}>
                <DialogTrigger>
                  <motion.div
                    style={
                      colIndex === 0
                        ? { y: translateFirst }
                        : colIndex === 1
                        ? { y: translateSecond }
                        : { y: translateThird }
                    }
                  >
                    <ProductCard
                      image={el.image}
                      title={el.title}
                      price={el.price}
                    />
                  </motion.div>
                </DialogTrigger>
                <DialogContent>
                  <ProductModal
                    img={el.image}
                    title={el.title}
                    description={el.description}
                    price={el.price}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
