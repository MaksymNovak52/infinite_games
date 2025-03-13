import { PerformanceIcon } from "../icon";

export function PerformanceHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#1F1F1F] px-4 h-[30px]">
      <PerformanceIcon />
      <span className="text-xs uppercase tracking-wider">{title}</span>
    </div>
  );
}
