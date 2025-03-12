import { Prediction } from "@/type";
import { getNeonStyle } from "@/utils";

interface IPredictionListItem {
  prediction: Prediction;
  index: number;
}
export function PredictionListItem({ prediction, index }: IPredictionListItem) {
  return (
    <li
      key={index}
      className="flex justify-between items-center border-b border-dotted border-[#333333] pb-3"
    >
      <span className="text-base text-white leading-5">
        {prediction.question}
      </span>
      <div
        className=" w-[57px] h-[26px] flex items-center justify-center rounded-md text-sm leading-4  font-medium"
        style={getNeonStyle(prediction.probability)}
      >
        {prediction.probability.toFixed(2)}
      </div>
    </li>
  );
}
