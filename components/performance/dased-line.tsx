export const NeonDashedLine = ({
  width,
  color,
}: {
  width: number;
  color: string;
}) => {
  const dashCount = Math.floor(width / 8);

  return (
    <div className="flex items-center z-10">
      {Array.from({ length: dashCount }).map((_, index) => (
        <div
          key={index}
          className="h-2 mx-[1.5px]"
          style={{
            width: "2px",
            backgroundColor: color,
            boxShadow: `0 0 4px ${color}, 0 0 8px ${color}`,
          }}
        />
      ))}
    </div>
  );
};
