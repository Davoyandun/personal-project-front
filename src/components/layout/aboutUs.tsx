"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import visionImage from "@/assets/cosecha.webp";
import misionImage from "@/assets/mision-image.webp";
import profesionalismoImage from "@/assets/profesionalismo.webp";

export function AboutUs() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 ">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="imagen de información no disponible"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Nuestra Misión",
    description: (
      <>
        <p></p>
        <p>
          Facilitar el crecimiento y la sostenibilidad de la agricultura en
          Imbabura y Carchi, proporcionando a almacenes y grandes agricultores
          productos químicos agropecuarios de alta calidad, junto con
          asesoramiento experto y personalizado, para maximizar la productividad
          y salud de sus cultivos.
        </p>
      </>
    ),
    badge: "Soluciones para el agro",
    image: misionImage,
  },
  {
    title: "Nuestra Visión",
    description: (
      <>
        <p>
          Impulsar el progreso y bienestar de la agricultura en Imbabura y
          Carchi, proporcionando soluciones innovadoras y sostenibles en
          productos químicos agropecuarios, acompañadas de asesoría
          especializada, para garantizar cultivos más saludables y productivos,
          fortaleciendo así a la comunidad agrícola local.
        </p>
      </>
    ),
    badge: "Nosotros cuidamos tu cosecha",
    image: visionImage,
  },

  {
    title: "Profesionalismo",
    description: (
      <>
        <p>
          Con más de cinco años de experiencia en el mercado, nos enorgullecemos
          de ser un equipo de profesionales altamente cualificados en el sector
          de productos químicos agropecuarios. Nuestra trayectoria nos ha
          permitido desarrollar un profundo conocimiento y una comprensión
          excepcional de las necesidades agrícolas en las provincias de Imbabura
          y Carchi, lo que nos posiciona como líderes competitivos en la
          industria. Nuestro compromiso con la calidad, la innovación y el
          servicio personalizado nos convierte en tu mejor opción. Estamos
          dedicados a ofrecer soluciones efectivas y sostenibles que no solo
          satisfacen, sino que superan las expectativas de nuestros clientes,
          garantizando así su éxito y el de sus cultivos en el largo plazo..
        </p>
      </>
    ),
    badge: "Tus aliados en el campo",
    image: profesionalismoImage,
  },
];
