"use client";
import { AboutUs } from "@/components/layout/aboutUs";
import { InfiniteGallery } from "@/components/layout/infiniteGallery";
import { IntroSection } from "@/components/layout/introSection";
import { NavbarComponent } from "@/components/layout/navbar";
import { ProvidersSection } from "@/components/layout/providersSection";
import GlobalProvider from "@/context/globalProvider";

export default function Home() {
  return (
    <GlobalProvider>
      <main className="flex min-h-screen flex-col items-center justify-between  w-full relative dark:bg-green-400:">
        <IntroSection />
        <AboutUs />
        <InfiniteGallery />
        <ProvidersSection />
      </main>
    </GlobalProvider>
  );
}
