import { LegendProps } from "recharts";

export const CustomLegend: React.FC<LegendProps> = ({ payload }) => {
  if (!payload) return null;

  return (
    <div className="flex flex-row justify-between items-center mb-2 pl-4">
      <h3 className="text-white text-[24px] font-medium  font-mono pl-2">
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
                width: "12px",
                height: "8px",
                backgroundColor: entry.color,
                boxShadow: `0 0 30px ${entry.color}, 0 0 6px ${entry.color}`,
                filter: `brightness(1.2)`,
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
