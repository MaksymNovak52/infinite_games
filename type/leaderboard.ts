type HeaderId = "minerId" | "rank" | "hotkey" | "averageAccuracy" | string;
type Miner = {
  rank: number;
  hotkey: string;
  minerId: number;
  averageAccuracy: number;
  numberOfEvents: number;
  averagePeerScore: number;
};

type DropdownProps<T extends string> = {
  label: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
  isMulti?: boolean;
  selectedValues?: T[];
};

type DateRangePickerProps = {
  dateRange: [Date | null, Date | null];
  onChange: (dateRange: [Date | null, Date | null]) => void;
};

type SectionTitleProps = {
  title: string;
  subtitle: string;
  icon: React.ComponentType;
};

export type {
  DateRangePickerProps,
  DropdownProps,
  HeaderId,
  Miner,
  SectionTitleProps,
};
