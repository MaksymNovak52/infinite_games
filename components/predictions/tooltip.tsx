import { TooltipProps } from "recharts";

export const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="font-inter text-[11px]"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p className="font-bold">{`Miner UID: ${payload[0].payload.date}`}</p>
        <p className="font-medium">{`Accuracy: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
