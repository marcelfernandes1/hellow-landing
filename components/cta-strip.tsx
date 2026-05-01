import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/lib/contact";

export function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-coral-500 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_70%)] blur-3xl" />

      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-display-lg font-medium text-balance">
            See it for yourself.{" "}
            <span className="font-display-italic">Call Hellow.</span>
          </h2>
          <p className="max-w-xl text-base text-white/85 sm:text-lg text-pretty">
            Pick up your phone, dial, and have a real conversation. 60 seconds — and
            you'll know.
          </p>
          <Button
            asChild
            size="xl"
            variant="secondary"
            className="bg-ink text-bg hover:bg-ink-soft"
          >
            <a href={PHONE.tel}>
              <Phone className="h-5 w-5" />
              Call to test it live
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
