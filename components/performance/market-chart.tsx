import { ChartOptions } from "@/type";
import { BarRow } from "./index";

export const MarketChart: React.FC<ChartOptions> = ({
  title,
  data,
  maxValue,
  alignRight = false,
  scaleLabels,
  scaleGap,
}) => (
  <div className="w-1/2 p-6 border-r last:border-r-0 border-gray-800">
    <h2
      className={`text-2xl mb-2 font-medium font-mono leading-6 ${
        alignRight ? "text-right" : ""
      }`}
    >
      {title}
    </h2>

    <div className="relative">
      {data.map((item) => (
        <BarRow
          key={item.name}
          name={item.name}
          value={item.value}
          color={item.color}
          maxValue={maxValue}
          alignRight={alignRight}
        />
      ))}

      <div
        className={`flex ${
          alignRight ? "justify-start" : "justify-end"
        } w-[95%] text-start text-xs text-gray-500 mt-2`}
        style={{ gap: scaleGap }}
      >
        {scaleLabels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  </div>
);
