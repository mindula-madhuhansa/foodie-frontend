import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioGroupProps {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const RadioGroup = ({ children, value, onChange, className }: RadioGroupProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<RadioGroupItemProps>, { value, onChange });
        }
        return child;
      })}
    </div>
  );
};

interface RadioGroupItemProps {
  value: string;
  onChange?: (value: string) => void;
}

export const RadioGroupItem = ({ value, onChange }: RadioGroupItemProps) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="radio-group"
        value={value}
        checked={value === onChange?.toString()} // ✅ Use checked directly
        onChange={() => onChange?.(value)}
        className="mr-2"
      />
      <span>{value}</span>
    </label>
  );
};
