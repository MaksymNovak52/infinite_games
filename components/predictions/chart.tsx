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
  return (
    <div
      className="border  border-[#222]"
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

      <div className=" w-[747px] ">
        <LineChart width={747} height={490} data={data}>
          <CartesianGrid vertical={false} color="red" />
          <XAxis
            dataKey="date"
            tickMargin={10}
            axisLine={false}
            strokeWidth={0}
          />
          <YAxis
            domain={[0, 1]}
            tickMargin={10}
            axisLine={false}
            strokeWidth={0}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="blue"
            label={{ position: "bottom", fill: "#8884d8", fontSize: 12 }}
            dot={{
              r: 2,
              stroke: "blue",
              strokeWidth: 2,
              fill: "blue",
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
