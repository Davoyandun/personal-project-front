"use client";

import { InfiniteGallery } from "@/components/layout/infiniteGallery";
import { IntroSection } from "@/components/layout/introSection";
import { NavbarComponent } from "@/components/layout/navbar";
import { ProvidersSection } from "@/components/layout/providersSection";
import { ModeToggle } from "@/components/theme/buttonToggleDark";
import GlobalProvider from "@/context/globalProvider";

export default function Home() {



  return (
    <GlobalProvider>
      <main className="flex min-h-screen flex-col items-center justify-between  w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative  ">
        <NavbarComponent />
        <IntroSection />
        <InfiniteGallery />
        <ModeToggle />
        <ProvidersSection />
      </main>
    </GlobalProvider>
  );
}
