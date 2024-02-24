import { NavbarComponent } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/theme/buttonToggleDark";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <NavbarComponent />
    </main>
  );
}
