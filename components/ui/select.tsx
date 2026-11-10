import * as React from "react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({ className, ...props }, ref) => (
  <select className={cn("flex h-11 w-full rounded-md border border-[#e1ddd5] bg-white px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15", className)} ref={ref} {...props} />
));
Select.displayName = "Select";
export { Select };
