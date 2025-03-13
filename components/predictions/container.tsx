import { PredictionChart, PredictionsList } from "./index";

export function PredictionsContainer() {
  return (
    <section className="flex w-[1138px] gap-6 mx-auto flex-row mt-10 items-center justify-between ">
      <PredictionsList />
      <PredictionChart />
    </section>
  );
}
