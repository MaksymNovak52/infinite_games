import { BarData, CardData, IDataPointProps } from "@/type";
import dayjs from "dayjs";

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

export {
  avgScoreData,
  clipPaths,
  datepickerStyles,
  EVENT_CHART_DATA,
  eventsCountData,
  marketTypeOptions,
  minerKeyOptions,
  PERFORMANCE_CARD_DATA,
};
