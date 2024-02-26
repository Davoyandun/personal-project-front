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

describe("IntroSection", () => {
  it("renders the titles with correct styles", () => {
    const { getByText } = render(<IntroSection />);

    const titleDelAgro = getByText(/Del @gro/i);
    expect(titleDelAgro).toHaveClass("bg-gradient-to-br");
    expect(titleDelAgro).toHaveClass("from-red-600");
    expect(titleDelAgro).toHaveClass("to-red-800");
    expect(titleDelAgro).toHaveClass("text-8xl");

    const subTitleSoluciones = getByText(/Soluciones para el agro/i);
    expect(subTitleSoluciones).toHaveClass("text-7xl");
  });
});
