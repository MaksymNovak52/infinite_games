import { Prediction } from "@/type";
import dayjs from "dayjs";

const PREDICTIONS: Prediction[] = [
  { question: "Trump ends Ukraine war in first...", probability: 85.26 },
  { question: "What will Trump say during add...", probability: 64.16 },
  { question: "US recession in 2025?", probability: 48.1 },
  { question: "Ukraine agrees to Trump mineral...", probability: 26.54 },
  { question: "US national Bitcoin reserve in 2025?", probability: 72.26 },
  { question: "Will Kanye launch a coin in March?", probability: 40.21 },
  { question: "Will US leave NATO by June 30?", probability: 85.26 },
  { question: "New Pope in 2025?", probability: 54.64 },
  { question: "SpaceX Starship Flight Test 8", probability: 34.12 },
];

const data = [
  { timestamp: 1709404800000, accuracy: 0.64 },
  { timestamp: 1709491200000, accuracy: 0.53 },
  { timestamp: 1709577600000, accuracy: 0.45 },
  { timestamp: 1709664000000, accuracy: 0.25 },
  { timestamp: 1709750400000, accuracy: 0.3 },
  { timestamp: 1709836800000, accuracy: 0.58 },
  { timestamp: 1709923200000, accuracy: 0.52 },
  { timestamp: 1710009600000, accuracy: 0.71 },
].map((item) => ({
  ...item,
  date: dayjs(item.timestamp).format("MMM D"),
}));
export { data, PREDICTIONS };
