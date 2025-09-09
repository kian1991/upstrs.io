import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type BoxProps = {
  title?: string;
  description?: string | ReactNode;
  contentClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Box({
  title,
  description,
  contentClassName,
  children,
  className,
  ...rest
}: BoxProps) {
  return (
    <section
      className={cn(
        "bg-base-300/80 border-base-content/70 flex flex-col rounded border-none p-4 shadow",
        className,
      )}
      {...rest}
    >
      {title && (
        <strong className="self-start text-xl font-bold">{title}</strong>
      )}
      {description && (
        <span className="mb-2 tracking-tight">{description}</span>
      )}
      <div className={cn("mt-2", contentClassName)}>{children}</div>
    </section>
  );
}
