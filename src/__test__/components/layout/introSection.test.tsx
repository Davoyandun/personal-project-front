global.IntersectionObserver = class IntersectionObserver {
  callback: any;
  options: any;
  constructor(callback: any, options: any) {
    this.callback = callback;
    this.options = options;
  }

  observe() {
    this.callback([{ isIntersecting: true }]);
  }

  disconnect() {}
  unobserve() {}

  root = null;
  rootMargin = "";
  thresholds = [];
  takeRecords = () => [];
};
import React from "react";
import { render } from "@testing-library/react";
import { IntroSection } from "@/components/layout/introSection";
import { ImagesContext } from "@/context/imagesContext";

describe("IntroSection", () => {
  it("renders the titles with correct styles", () => {
    const mockContextValue = {
      images: [{ img: "image1.jpg" }, { img: "image2.jpg" }] as any as [],
      loadingImages: true,
      errorWithImages: null,
    };
    const { getByText, baseElement } = render(
      <ImagesContext.Provider value={mockContextValue}>
        <IntroSection />
      </ImagesContext.Provider>
    );


    const subTitleSoluciones = getByText(/Soluciones para el/i);
    const titleDelAgro = getByText(/Del @gro/i);

    expect(titleDelAgro).toHaveClass("from-red-600");
    expect(titleDelAgro).toHaveClass("to-red-800");
    expect(subTitleSoluciones).toHaveClass("from-neutral-50");
  });
});
