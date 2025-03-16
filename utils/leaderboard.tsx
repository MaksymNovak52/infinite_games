import { HeaderId } from "@/type";

const specificClasses: Record<string, string> = {
  minerId: "text-right pl-[42px]",
  rank: "text-left",
  hotkey: "text-left pl-[32px] ",
  averageAccuracy: "text-right pl-[40px]",
  default: "text-right pl-[px] pr-2",
};

export const getTableHeaderClasses = (headerId: HeaderId): string => {
  const baseClasses =
    "py-2 px-4 text-xs font-normal text-[#000]/40 tracking-wider uppercase leading-4 ";

  if (headerId in specificClasses) {
    return `${baseClasses} ${specificClasses[headerId]}`;
  }

  return `${baseClasses} ${specificClasses.default}`;
};
