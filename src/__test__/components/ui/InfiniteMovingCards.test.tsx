// InfiniteMovingCards.test.js

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Mock para next/image, ya que no se renderiza correctamente fuera de un entorno Next.js
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // Simplemente renderiza una img con las props relevantes
    return <img {...props} />;
  },
}));

describe("InfiniteMovingCards", () => {
  const items = [
    { img: "/path/to/image1.jpg", alt: "Image 1" },
    { img: "/path/to/image2.jpg", alt: "Image 2" },
  ];

  it("renders correctly with given items", () => {
    render(<InfiniteMovingCards items={items} />);

    // Verificar que las imágenes se renderizan con los alt text correctos
    const firstImage = screen.getByAltText("Image 1");
    const secondImage = screen.getByAltText("Image 2");

    expect(firstImage).toBeInTheDocument();
    expect(secondImage).toBeInTheDocument();
  });

  // Aquí podrías añadir más tests, como verificar el comportamiento al cambiar props
  // o simular interacciones del usuario (por ejemplo, el hover)
});
