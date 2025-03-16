"use client";
import { EVENT_CHART_DATA, lineColors } from "@/constants";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomEventTooltip, CustomLegend } from "./index";

export const EventChart = () => {
  return (
    <div className="mx-auto relative   ">
      <h3 className="absolute text-[#FFF]/20 text-xs -left-4 top-1/2 -rotate-90  uppercase">
        AVG Score
      </h3>
      <LineChart
        width={1145}
        height={500}
        data={EVENT_CHART_DATA}
        margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
      >
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
          tick={{ fill: "#FFFFFF" }}
        />
        <Tooltip content={<CustomEventTooltip />} />
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
