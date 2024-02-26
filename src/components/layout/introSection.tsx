"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LampContainer } from "../ui/lamp";

export function IntroSection() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center md:text-7xl"
      >
        <span className="bg-gradient-to-br from-red-600 to-red-800 py-4 bg-clip-text text-8xl font-medium tracking-tight text-transparent">
          Del @gro
        </span>
        <br />
        <br />
        <span className="text-7xl font-medium  ">Soluciones para el agro</span>
      </motion.div>
    </LampContainer>
  );
}
