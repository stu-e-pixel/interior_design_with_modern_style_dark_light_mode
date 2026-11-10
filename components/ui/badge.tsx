import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.14em] text-primary", className)} {...props} />;
}
