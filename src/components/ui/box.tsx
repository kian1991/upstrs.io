import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type BoxProps = {
  title: string;
  description?: string | ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Box({ title, description, children, ...props }: BoxProps) {
  return (
    <section className="bg-base-200/70 flex flex-col rounded border-2 p-4 backdrop-blur-2xl">
      <strong className="self-start text-xl font-bold">{title}</strong>
      {description && (
        <span className="mb-2 tracking-tight">{description}</span>
      )}
      <div className={cn("mt-2 font-mono", props.className)}>{children}</div>
    </section>
  );
}
