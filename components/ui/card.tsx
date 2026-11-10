import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-border/70 bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-md", className)} {...props} />;
}
