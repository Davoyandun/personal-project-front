"use client";
import AboutUs from "@/components/features/home/aboutUs";
import InfiniteGallery from "@/components/features/home/infiniteGallery";
import IntroSection from "@/components/features/home/introSection";
import ProvidersSection from "@/components/features/home/providersSection";
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
