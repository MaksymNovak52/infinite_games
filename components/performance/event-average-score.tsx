import { avgScoreData, eventsCountData } from "@/constants";
import { ChartOptions } from "@/type";
import { MarketChart } from "./index";

export const EventAverageScore: React.FC = () => {
  const eventsChartOptions: ChartOptions = {
    title: "Events count by market type",
    data: eventsCountData,
    maxValue: Math.max(...eventsCountData.map((item) => item.value)),
    alignRight: false,
    scaleLabels: ["0", "100", "200", "300", "400", "500"],
    scaleGap: "60px",
  };

  const avgScoreChartOptions: ChartOptions = {
    title: "AVG score by market type",
    data: avgScoreData,
    maxValue: Math.max(...avgScoreData.map((item) => item.value)),
    alignRight: true,
    scaleLabels: ["2.1", "1.6", "1.2", "0.8", "0.4", "0"],
    scaleGap: "68px",
  };

  return (
    <div className="flex  text-white">
      <MarketChart {...eventsChartOptions} />
      <MarketChart {...avgScoreChartOptions} />
    </div>
  );
};
