"use client";
import { EVENT_CHART_DATA } from "@/constants";
import React from "react";
import {
  CartesianGrid,
  Legend,
  LegendProps,
  Line,
  LineChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
const lineColors: Record<string, string> = {
  POLYMARKET: "#00FFFF",
  EARNINGS: "#800080",
  CRYPTO: "#FFD700",
  FRED: "#0000FF",
  LLN: "#1E90FF",
  PLMRKT_PRCS: "#FF4500",
};

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>{`Date: ${payload[0].payload.date}`}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.color }}
          >{`${entry.name}: ${entry.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};
const CustomLegend: React.FC<LegendProps> = ({ payload }) => {
  if (!payload) return null;

  return (
    <div className="flex flex-row justify-between items-center mb-2 pl-4">
      <h3 className="text-white text-[24px] font-medium">
        Events count by market type
      </h3>

      <div className="flex flex-row justify-between gap-4 items-center">
        {payload.map((entry) => (
          <div
            key={entry.value}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "10px",
                backgroundColor: entry.color,
                boxShadow: `0 0 5px ${entry.color}, 0 0 8px ${entry.color}`,
                filter: `brightness(1.2)`,
                borderRadius: "2px",
              }}
            />
            <span
              className="font-normal text-xs"
              style={{
                color: "#FFFFFF",
              }}
            >
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EventChart = () => {
  return (
    <div className="mx-auto relative ">
      <LineChart width={1110} height={500} data={EVENT_CHART_DATA}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickMargin={10}
          tickCount={1}
          axisLine={false}
          strokeWidth={0}
        />
        <YAxis
          domain={[0, 5]}
          tickMargin={10}
          axisLine={false}
          strokeWidth={0}
          tickCount={11}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          // iconType="square"
          content={<CustomLegend />}
        />

        {Object.keys(lineColors).map((key, index) => (
          <Line
            key={`${key}-${index}`}
            type="monotone"
            dataKey={key}
            stroke={lineColors[key]}
            dot={{
              r: 2,
              stroke: lineColors[key],
              strokeWidth: 2,
              fill: lineColors[key],
            }}
            activeDot={{
              r: 3,
              stroke: lineColors[key],
              strokeWidth: 3,
              fill: lineColors[key],
            }}
          />
        ))}
      </LineChart>
    </div>
  );
};
