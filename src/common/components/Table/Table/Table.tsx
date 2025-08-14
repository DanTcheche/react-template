import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Table = ({ className, ...props }: ComponentProps<"table">) => {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={twMerge("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
};

const TableHeader = ({ className, ...props }: ComponentProps<"thead">) => {
  return (
    <thead
      data-slot="table-header"
      className={twMerge("[&_tr]:border-b", className)}
      {...props}
    />
  );
};

const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => {
  return (
    <tbody
      data-slot="table-body"
      className={twMerge("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
};

const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={twMerge(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
};

const TableRow = ({ className, ...props }: ComponentProps<"tr">) => {
  return (
    <tr
      data-slot="table-row"
      className={twMerge(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  );
};

const TableHead = ({ className, ...props }: ComponentProps<"th">) => {
  return (
    <th
      data-slot="table-head"
      className={twMerge(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
};

const TableCell = ({ className, ...props }: ComponentProps<"td">) => {
  return (
    <td
      data-slot="table-cell"
      className={twMerge(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
};

const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => {
  return (
    <caption
      data-slot="table-caption"
      className={twMerge("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
};

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
