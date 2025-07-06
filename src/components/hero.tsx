"use client";

import { useMemo, useState } from "react";

import Form from "./form";

export default function Hero() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
          </span>
          <p className="uppercase text-sm font-medium">
            Launching in late {year}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-w-7xl">
        <h2 className="text-5xl font-bold text-foreground">
          {isSuccess ? "You're on the waitlist" : "Craft your next project with Plateu"}
        </h2>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isSuccess
            ? "You've secured your spot. We’ll hit you up the moment we launch."
            : "Plateu provides you with ready to use examples + step-by-step tutorials - all open-source, completely free, and calibrated to help you build amazing things."}
        </p>
        <h3 className="text-3xl font-bold text-foreground">
          Good things come to those who wait
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
        <Form onSuccessChange={setIsSuccess} />
      </div>
      <div className="flex items-center justify-center gap-2">
      </div>
    </div>
  );
}
