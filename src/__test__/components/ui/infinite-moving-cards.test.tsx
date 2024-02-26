import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticImageData } from "next/image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props}/>;
  },
}));

describe("InfiniteMovingCards", () => {
  const items = [
    { img: "/path/to/image1.jpg" as any as StaticImageData, alt: "Image 1" },
    { img: "/path/to/image2.jpg" as any as StaticImageData, alt: "Image 2" },
  ];

  it("renders correctly with given items", () => {
    const { getAllByAltText } = render(<InfiniteMovingCards items={items} />);

    const firstImage = getAllByAltText("Image 1");
    const secondImage = getAllByAltText("Image 2");

    expect(firstImage[0]).toBeInTheDocument();
    expect(secondImage[0]).toBeInTheDocument();
  });
});
