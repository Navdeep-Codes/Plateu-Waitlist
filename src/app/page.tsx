"use client";

import { useRef } from "react";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import { Confetti, type ConfettiRef } from "~/components/magicui/confetti";

export default function Home() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    
      <main className="mx-auto max-w-screen-2xl w-full h-full flex-1 flex flex-col relative">
        <Confetti
        ref={confettiRef}
        className="fixed inset-0 z-50 pointer-events-none"
        manualstart={true}
      />
      <Hero />
      <Footer />
    </main>
  );
}
