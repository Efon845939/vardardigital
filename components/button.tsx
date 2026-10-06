import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

const styles = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent hover:border-accent-hover",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
};

type Props = ComponentProps<"a"> & { variant?: keyof typeof styles; arrow?: boolean };

/** Hard-edged CTA link. Hover nudges the arrow; active presses 1px down. */
export function ButtonLink({ variant = "primary", arrow, className = "", children, ...rest }: Props) {
  return (
    <a
      {...rest}
      className={`group inline-flex h-11 items-center justify-center gap-2 rounded-sharp px-5 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ease-out-expo active:translate-y-px ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
