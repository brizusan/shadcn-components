import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        accent:
          "text-blue-400 border border-blue-600 bg-blue-50 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-0 dark:focus-visible:ring-offset-gray-900 dark:border-accent [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
      textTransform: {
        capitalize: "capitalize",
        normal: "", // Opción sin transformación
      },
    },
    defaultVariants: {
      variant: "default",
      textTransform: "normal",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  textTransform,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, textTransform }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
