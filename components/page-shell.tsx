import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative bg-bg text-ink">
      <Nav />
      {children}
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
