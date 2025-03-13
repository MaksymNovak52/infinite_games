import { BarData } from "@/type";
import { NeonDashedLine } from "./index";

export const BarRow = ({
  name,
  value,
  color,
  maxValue,
  alignRight = false,
}: BarData & {
  maxValue: number;
  alignRight?: boolean;
}) => {
  const barWidth = Math.floor((value / maxValue) * 100) + 1;

  return (
    <div className="flex items-center mb-4">
      {!alignRight && (
        <div className="w-20 text-xs text-white mr-2">{name}</div>
      )}

      <div className="flex-grow relative h-2">
        <div
          className={`absolute top-0 flex  items-center  justify-end ${
            alignRight ? "right-0 flex-row" : "left-0  flex-row-reverse"
          } h-full`}
          style={{ width: `${barWidth}%` }}
        >
          <div
            className={`text-xs  z-10  ${alignRight ? "mr-2" : "ml-2"}`}
            style={{ color: color }}
          >
            {value}
          </div>
          <NeonDashedLine width={barWidth * 5} color={color} />
          <div className="bg-[#FFF]/10  h-[1px] w-[420px] absolute z-1"></div>
        </div>
      </div>

      {alignRight && (
        <div className="w-24 text-xs text-gray-300 text-right">{name}</div>
      )}
    </div>
  );
};
