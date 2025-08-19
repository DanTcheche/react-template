import { ComponentProps, ForwardedRef, forwardRef } from "react";
import Spinner from "../Spinner/Spinner";
import { tv, VariantProps } from "tailwind-variants";
import { Styled } from "@/types/styles";

export type ButtonProps = {
  asChild?: boolean;
  isLoading?: boolean;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  Styled;

const buttonVariants = tv({
  base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:ring-4 focus-visible:ring-background-brand-default/25 focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      primary: "bg-purple-700 text-purple-50 shadow hover:bg-purple-700/90",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      plainText:
        "text-text-brand-default hover:text-text-brand-secondary active:text-text-brand-default disabled:text-text-disabled-default",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export const Button = forwardRef(
  (
    {
      type = "button",
      className,
      disabled = false,
      isLoading = false,
      children,
      size,
      variant,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      type={type}
      className={buttonVariants({ variant, size, className })}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Spinner className="h-5 w-5" /> : <>{children}</>}
    </button>
  )
);
