import {
  eventsCountData,
  marketTypeOptions,
  minerKeyOptions,
} from "@/constants";

type CardData = {
  value: string | number;
  title: string;
  subtitle: string;
  type?: "left" | "normal" | "right";
};
type MinerKeyOption = (typeof minerKeyOptions)[number];
type MarketTypeOption = (typeof marketTypeOptions)[number];

type FilterSectionProps = {
  dateRange: [Date | null, Date | null];
  setDateRange: (range: [Date | null, Date | null]) => void;
  selectedMiner: MinerKeyOption;
  setSelectedMiner: (miner: MinerKeyOption) => void;
  selectedMarkets: MarketTypeOption[];
  toggleMarketSelection: (market: MarketTypeOption) => void;
};
type BarData = {
  name: string;
  value: number;
  color: string;
};
type ChartOptions = {
  title: string;
  data: typeof eventsCountData;
  maxValue: number;
  alignRight?: boolean;
  scaleLabels: string[];
  scaleGap: string;
};
interface IDataPointProps {
  timestamp: number;
  date: string;
  POLYMARKET: number;
  EARNINGS: number;
  CRYPTO: number;
  FRED: number;
  LLN: number;
  PLMRKT_PRCS: number;
}

type EventData = {
  eventKey: string;
  marketType: string;
  eventOutput: number;
  yourScore: number;
  avgSubnetScore: number;
  diff: number;
  yourEffectiveScore: number;
  uniqueEvent: string;
};
type EventMinerOption = {
  value: string;
  label: string;
};
export type {
  BarData,
  CardData,
  ChartOptions,
  EventData,
  EventMinerOption,
  FilterSectionProps,
  IDataPointProps,
  MarketTypeOption,
  MinerKeyOption,
};
