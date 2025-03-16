import { TooltipProps } from "recharts";

export const CustomEventTooltip = ({
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
