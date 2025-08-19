import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {}

export const Label = forwardRef(
  (
    { className, children, ...props }: LabelProps,
    ref: ForwardedRef<HTMLLabelElement>
  ) => (
    <label
      ref={ref}
      className={twMerge(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
);
