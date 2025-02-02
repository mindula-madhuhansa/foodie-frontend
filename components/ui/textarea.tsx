import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn("w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary", className)}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
