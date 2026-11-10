import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea className={cn("flex min-h-28 w-full rounded-md border border-[#e1ddd5] bg-white px-3 py-3 text-sm outline-none placeholder:text-[#aaa79f] focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50", className)} ref={ref} {...props} />
));
Textarea.displayName = "Textarea";
export { Textarea };
