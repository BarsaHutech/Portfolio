"use client";

import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import * as React from "react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster richColors position="top-right" />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
