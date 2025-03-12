import { TooltipProps } from "recharts";

export const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
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
        <p>{`Accuracy: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
