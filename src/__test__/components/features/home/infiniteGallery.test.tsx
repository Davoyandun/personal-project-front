import React from "react";
import { render, screen } from "@testing-library/react";
import InfiniteGallery from "@/components/features/home/infiniteGallery";

describe("InfiniteGallery", () => {
  it("should render the component successfully", () => {
    const { baseElement } = render(<InfiniteGallery />);

    expect(baseElement).toBeDefined();
  });
});
