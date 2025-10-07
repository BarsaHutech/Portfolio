"use client";

import * as React from "react";
// Temporarily disable Radix tooltip to unblock build
// import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils";

export const TooltipProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;
export const Tooltip = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
export const TooltipTrigger = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("hidden", className)} {...props} />
));
TooltipContent.displayName = "TooltipContent";
