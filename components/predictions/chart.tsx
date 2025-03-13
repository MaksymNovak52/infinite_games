"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { data } from "@/constants";
import { PredicrtionEventIcon } from "../icon";
import { CustomTooltip } from "./tooltip";

export const PredictionChart = () => {
  const averageAccuracy =
    data.reduce((sum, item) => sum + item.accuracy, 0) / data.length;

  const yTicks = Array.from({ length: 10 }, (_, i) => i * 0.1);

  return (
    <div
      className="border border-[#222]"
      style={{
        boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex items-center gap-2 h-[30px] bg-[#1F1F1F] px-4">
        <PredicrtionEventIcon />
        <span className="text-white font-bold uppercase tracking-wider text-sm pt-1">
          Aggregate Score of Events{" "}
        </span>
      </div>

      <div className="py-10 px-4">
        <LineChart width={750} height={410} data={data}>
          <CartesianGrid vertical={false} color="red" />
          <XAxis
            dataKey="date"
            tickMargin={2}
            axisLine={false}
            strokeWidth={0}
          />
          <YAxis
            domain={[0, 0.9]}
            tickMargin={28}
            strokeWidth={0}
            ticks={yTicks}
            tickFormatter={(value) => value.toFixed(1)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="#31C8EA"
            label={{ position: "bottom", fill: "#31C8EA", fontSize: 12 }}
            dot={{
              r: 2,
              stroke: "#31C8EA",
              strokeWidth: 2,
              fill: "#31C8EA",
            }}
            activeDot={{ r: 5 }}
          />
          <ReferenceLine
            y={averageAccuracy}
            stroke="black"
            strokeDasharray="3 3"
          />
        </LineChart>
      </div>
    </div>
  );
};
