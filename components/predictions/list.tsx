import { PREDICTIONS } from "@/constants";
import { PredicrtionIcon } from "../icon";
import { PredictionListItem } from "./index";

export function PredictionsList() {
  return (
    <div
      className="w-[363.333px] h-[521px] mx-auto flex flex-col bg-[#111111] text-white"
      style={{
        boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="mb-4 flex items-center gap-2 h-[30px] bg-[#1F1F1F] px-4">
        <PredicrtionIcon />
        <span className="text-white font-bold uppercase tracking-wider text-sm">
          PREDICTIONS
        </span>
      </div>

      <ul className=" flex flex-col justify-between h-[90%] px-4">
        {PREDICTIONS.map((prediction, index) => (
          <PredictionListItem
            prediction={prediction}
            index={index}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
