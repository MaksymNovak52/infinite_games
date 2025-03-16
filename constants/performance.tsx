"use client";
import { BarData, CardData, EventData, IDataPointProps } from "@/type";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { StylesConfig } from "react-select";
const PERFORMANCE_CARD_DATA: CardData[] = [
  {
    value: "843",
    title: "MINERS EVENTS COUNT",
    subtitle: "4 AVG FOR THE SUBNET",
    type: "left",
  },
  {
    value: "0.125",
    title: "YOUR EVENTS COUNT",
    subtitle: "0.00477757 FOR THE SUBNET",
    type: "normal",
  },
  {
    value: "0.00477757",
    title: "MINERS AVG EFFECTIVE SCORE",
    subtitle: "0.00477757 FOR THE SUBNET",
    type: "right",
  },
];

const minerKeyOptions = [
  "69_5HBgwRud",
  "75_3KLmnOp",
  "82_9QRstUv",
  "91_7WXyzAb",
];

const marketTypeOptions = ["ALL", "CRYPTO", "STOCKS", "FOREX", "COMMODITIES"];

const clipPaths = {
  left: "polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 100% 100%, 50% 100%, 10% 100%, 0 82%, 0% 35%, 0 0)",
  normal: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  right:
    "polygon(73% 0, 77% 12%, 100% 12%, 100% 70%, 100% 100%, 50% 100%, 10% 100%, 0 100%, 0% 35%, 0 0)",
};
const datepickerStyles = `
  .react-datepicker {
    background-color: #111 !important;
    border: 1px solid #333 !important;
    color: white !important;
  }
  .react-datepicker__header {
    background-color: #1a1a1a !important;
    border-bottom: 1px solid #333 !important;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker__day-name {
    color: white !important;
  }
  .react-datepicker__day {
    color: #ddd !important;
  }
  .react-datepicker__day:hover {
    background-color: #333 !important;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: #444 !important;
    color: white !important;
  }
`;

const eventsCountData: BarData[] = [
  { name: "LLM", value: 400, color: "#05FFE1" },
  { name: "CRYPTO", value: 270, color: "#FFDE5B" },
  { name: "FRED", value: 200, color: "#4170FF" },
  { name: "POLYMARKET", value: 100, color: "#00CBA9" },
  { name: "EARNINGS", value: 49, color: "#876FFB" },
  { name: "PLMRKT_PRCS", value: 30, color: "#FD7B08" },
];

const avgScoreData: BarData[] = [
  { name: "POLYMARKET", value: 400, color: "#05FFE1" },
  { name: "LLM", value: 270, color: "#05FFE1" },
  { name: "PLMRKT_PRCS", value: 200, color: "#FD7B08" },
  { name: "FRED", value: 100, color: "#4170FF" },
  { name: "CRYPTO", value: 49, color: "#FFDE5B" },
  { name: "EARNINGS", value: 30, color: "#876FFB" },
];
const EVENT_CHART_DATA: IDataPointProps[] = [
  {
    timestamp: 1709404800000,
    POLYMARKET: 2.5,
    EARNINGS: 0.5,
    CRYPTO: 2.0,
    FRED: 0,
    LLN: 2.8,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1709491200000,
    POLYMARKET: 2.7,
    EARNINGS: 0.45,
    CRYPTO: 2.5,
    FRED: 0.2,
    LLN: 2.6,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1709577600000,
    POLYMARKET: 3.0,
    EARNINGS: 0.4,
    CRYPTO: 3.0,
    FRED: 0.5,
    LLN: 2.4,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1709664000000,
    POLYMARKET: 3.2,
    EARNINGS: 0.35,
    CRYPTO: 3.5,
    FRED: 1.0,
    LLN: 2.2,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1709750400000,
    POLYMARKET: 3.0,
    EARNINGS: 0.5,
    CRYPTO: 3.0,
    FRED: 1.5,
    LLN: 2.4,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1709836800000,
    POLYMARKET: 2.8,
    EARNINGS: 0.6,
    CRYPTO: 2.8,
    FRED: 2.0,
    LLN: 2.6,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1709923200000,
    POLYMARKET: 2.6,
    EARNINGS: 0.7,
    CRYPTO: 2.5,
    FRED: 2.5,
    LLN: 2.8,
    PLMRKT_PRCS: 0.5,
  },
  {
    timestamp: 1710009600000,
    POLYMARKET: 2.4,
    EARNINGS: 0.8,
    CRYPTO: 2.3,
    FRED: 3.0,
    LLN: 3.0,
    PLMRKT_PRCS: 0.5,
  },
].map((item) => ({
  ...item,
  date: dayjs(item.timestamp).format("MMM D"),
}));
const lineColors: Record<string, string> = {
  POLYMARKET: "#00FFFF",
  EARNINGS: "#800080",
  CRYPTO: "#FFD700",
  FRED: "#0000FF",
  LLN: "#1E90FF",
  PLMRKT_PRCS: "#FF4500",
};

const performanceEventData: EventData[] = [
  {
    eventKey:
      "Will an official announcement about the completion of the copper tariffs investigation be made by 3 March 2025?",
    marketType: "lim",
    eventOutput: 0.0,
    yourScore: 0.56,
    avgSubnetScore: 0.39,
    diff: 0.17,
    yourEffectiveScore: 0.0,
    uniqueEvent: "ifgames-r208",
  },
  {
    eventKey:
      "Will President Trump sign an executive order explicitly imposing tariffs on imported copper by 3 March 2025?",
    marketType: "lim",
    eventOutput: 0.0,
    yourScore: 0.4,
    avgSubnetScore: 0.11,
    diff: 0.29,
    yourEffectiveScore: 0.0,
    uniqueEvent: "ifgames-r208",
  },
  {
    eventKey:
      "Will the US Commerce Department announce the initiation of an investigation into imported copper under Section 232 by 1 March 2025, 23:59 EST?",
    marketType: "lim",
    eventOutput: 1.0,
    yourScore: 1.93,
    avgSubnetScore: 0.71,
    diff: 0.21,
    yourEffectiveScore: 0.0,
    uniqueEvent: "ifgames-r208",
  },
  {
    eventKey:
      "Will an official announcement about the completion of the copper tariffs investigation be made by 3 March 2025?",
    marketType: "lim",
    eventOutput: 0.0,
    yourScore: 0.56,
    avgSubnetScore: 0.39,
    diff: 0.17,
    yourEffectiveScore: 0.0,
    uniqueEvent: "ifgames-r208",
  },
  {
    eventKey:
      "Will President Trump sign an executive order explicitly imposing tariffs on imported copper by 3 March 2025?",
    marketType: "lim",
    eventOutput: 0.0,
    yourScore: 0.4,
    avgSubnetScore: 0.11,
    diff: 0.29,
    yourEffectiveScore: 0.0,
    uniqueEvent: "ifgames-r208",
  },
  {
    eventKey:
      "Will the US Commerce Department announce the initiation of an investigation into imported copper under Section 232 by 1 March 2025, 23:59 EST?",
    marketType: "lim",
    eventOutput: 1.0,
    yourScore: 1.93,
    avgSubnetScore: 0.71,
    diff: 0.21,
    yourEffectiveScore: 0.0,
    uniqueEvent: "ifgames-r208",
  },
];

const performanceColumns: ColumnDef<EventData>[] = [
  {
    accessorKey: "eventKey",
    header: "EVENT KEY",
    cell: ({ getValue }) => (
      <div className="w-[234px]">{getValue<string>()}</div>
    ),
  },
  {
    accessorKey: "marketType",
    header: "MARKET TYPE",
    cell: ({ getValue }) => (
      <div className="w-[234px] text-center ">{getValue<string>()}</div>
    ),
  },
  { accessorKey: "eventOutput", header: "EVENT OUTPUT" },
  {
    accessorKey: "yourScore",
    header: "YOUR SCORE",
    cell: ({ getValue }) => (
      <span
        className={`${
          Number(getValue<number>().toFixed(2)) >= 1
            ? "text-[#8DEA31] drop-shadow-[0_0_3px_#8DEA31]"
            : "text-[#EA3A31] drop-shadow-[0_0_3px_#EA3A31]"
        } font-medium  `}
      >
        {getValue<number>().toFixed(2)}
      </span>
    ),
  },
  { accessorKey: "avgSubnetScore", header: "AVG SUBNET SCORE" },
  {
    accessorKey: "diff",
    header: "DIFF",
    cell: ({ getValue }) => (
      <div className="text-[#8DEA31] drop-shadow-[0_0_3px_#8DEA31] text-right pr-1">
        {getValue<number>().toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "yourEffectiveScore",
    header: "YOUR EFFECTIVE SCORE",
    cell: ({ getValue }) => (
      <span className=" text-right w-[120px] ml-10 ">
        {getValue<number>().toFixed(5)}
      </span>
    ),
  },
  {
    accessorKey: "uniqueEvent",
    cell: ({ getValue }) => (
      <div className=" text-right ">{getValue<string>()}</div>
    ),
    header: "UNIQUE EVENT",
  },
];

const performanceOptions = [
  { value: "all", label: "ALL" },
  { value: "lim", label: "LIM" },
  { value: "poly", label: "POLY" },
  { value: "cryp", label: "CRYPTO" },
  { value: "earn", label: "EARNINGS" },
];
const customPerformanceSelectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    background: "#262228",
    border: "none",
    borderColor: "transparent",
    minHeight: "38px",
    boxShadow: "none",
    outline: "none",
    "&:hover": {
      border: "none",
      borderColor: "transparent",
      boxShadow: "none",
      outline: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#262228",
    border: "none",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#262228" : "#262228",
    color: "#fff",
    outline: "none",
    border: "none",
    "&:hover": {
      backgroundColor: "#1A1A1A",
      outline: "none",
      border: "none",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#3C383E",
    border: "none",
    outline: "none",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#aaa",
    border: "none",
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#fff",
      border: "none",
      outline: "none",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff",
    border: "none",
    opacity: 10,
    outline: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#888",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    "&:hover": {
      color: "inherit",
    },
  }),
};
const selectEventChartData = [
  { date: "FEB 23", value: -0.5, correctValue: 1 },
  { date: "FEB 24", value: -0.2, correctValue: 1 },
  { date: "FEB 25", value: 0, correctValue: 1 },
  { date: "FEB 26", value: 0.1, correctValue: 1 },
  { date: "FEB 27", value: 0, correctValue: 1 },
];
export {
  avgScoreData,
  clipPaths,
  customPerformanceSelectStyles,
  datepickerStyles,
  EVENT_CHART_DATA,
  eventsCountData,
  lineColors,
  marketTypeOptions,
  minerKeyOptions,
  PERFORMANCE_CARD_DATA,
  performanceColumns,
  performanceEventData,
  performanceOptions,
  selectEventChartData,
};
