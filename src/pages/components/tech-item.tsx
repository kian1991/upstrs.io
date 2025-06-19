import type { ReactNode } from "react";

export type TechItemProps = {
  title: string;
  icon: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export const TechItem = ({ title, icon, level }: TechItemProps) => (
  <div className="flex items-center gap-2">
    <div className="flex h-24 w-24 flex-col items-center justify-center">
      <div className="h-8 w-8">{icon}</div>
      <h3 className="text-sm">{title}</h3>
    </div>
    <progress
      className="progress progress-primary h-3 w-full sm:h-6"
      value={level * 10}
      max="100"
    ></progress>
  </div>
);
