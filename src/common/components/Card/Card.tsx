import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ComponentProps<"thead">) => {
  return (
    <div
      className={twMerge("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ComponentProps<"tbody">) => {
  return (
    <h3
      className={twMerge(
        "font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={twMerge("text-sm text-muted-foreground", className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={twMerge("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={twMerge("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
