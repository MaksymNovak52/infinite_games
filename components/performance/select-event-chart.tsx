"use client";
import { selectEventChartData } from "@/constants";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { SelectEventLeftBlock } from "./index";
export const SelectEventChart = () => {
  return (
    <div className="flex text-white h-full relative justify-between">
      <SelectEventLeftBlock />
      <div className="w-[1px] h-[90%] bg-[#FFF]/40 absolute top-0 left-[470px]" />
      <div className="w-[684px] px-4 pb-4 ">
        <div className="h-12    relative mb-2 flex flex-row items-center justify-end">
          <div className="bg-[#FFF]/10 w-[95%] rounded flex items-center px-2 h-6 gap-2  ">
            <span className="text-xs truncate text-gray-300/60 font-mono">
              WILL THE DEPARTMENT OF GOVERNMENT EFFICIENCY ISSUE A PUBLIC
              STATEMENT CLARIFYING TH...
            </span>
            <div className="ml-auto">
              <div className="w-6 h-6 border border-white/30 rounded-sm flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={selectEventChartData}
            margin={{ top: 20, right: 30, bottom: 20, left: 40 }}
          >
            <CartesianGrid stroke="#333" vertical={false} strokeOpacity={0.5} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 10, fontFamily: "monospace" }}
              tickMargin={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              domain={[-1, 1]}
              ticks={[-1, -0.5, 0, 0.5, 1]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 10, fontFamily: "monospace" }}
            />
            <ReferenceLine y={0} stroke="#333" />

            <Line
              type="monotone"
              dataKey="correctValue"
              stroke="#05FFE1"
              strokeWidth={2}
              dot={{ r: 4, fill: "#05FFE1", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#05FFE1", strokeWidth: 0 }}
              isAnimationActive={false}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#876FFB"
              strokeWidth={2}
              dot={{ r: 4, fill: "#876FFB", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#876FFB", strokeWidth: 0 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
