import { IntroSection } from "@/components/layout/IntroSection";
import { InfiniteGallery } from "@/components/layout/infiniteGallery";
import { NavbarComponent } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/theme/buttonToggleDark";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative  ">
      <NavbarComponent />
      <IntroSection />
      <InfiniteGallery />
      <ModeToggle />
    </main>
  );
}
