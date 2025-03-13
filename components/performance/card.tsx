import { clipPaths, PERFORMANCE_CARD_DATA } from "@/constants";

export function PerformanceCards({ cardsData = PERFORMANCE_CARD_DATA }) {
  return (
    <div className="flex px-8 pb-8 gap-4 justify-center">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className=" bg-[#FFF]/10 w-[372px] h-[179px] flex flex-col items-center py-10"
          style={{
            clipPath: clipPaths[card.type || "normal"],
          }}
        >
          <div className="text-4xl font-bold text-white">{card.value}</div>
          <div className="text-xs text-gray-400 uppercase mt-1 mb-6 text-center">
            {card.title}
          </div>
          <div className="text-[10px] text-gray-500">{card.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
