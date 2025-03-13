"use client";

import { marketTypeOptions, minerKeyOptions } from "@/constants";
import { FilterSectionProps, MarketTypeOption, MinerKeyOption } from "@/type";
import { DateRangePicker, Dropdown } from "./index";

export function FilterSection({
  dateRange,
  setDateRange,
  selectedMiner,
  setSelectedMiner,
  selectedMarkets,
  toggleMarketSelection,
}: FilterSectionProps): JSX.Element {
  return (
    <div className="flex px-8 pt-6 gap-6 w-[1128px] mx-auto">
      <DateRangePicker dateRange={dateRange} onChange={setDateRange} />

      <Dropdown<MinerKeyOption>
        label="MINER KEY"
        value={selectedMiner}
        options={minerKeyOptions}
        onChange={setSelectedMiner}
      />

      <Dropdown<MarketTypeOption>
        label="MARKET TYPE"
        value={selectedMarkets[0]}
        options={marketTypeOptions}
        onChange={toggleMarketSelection}
        isMulti={true}
        selectedValues={selectedMarkets}
      />
    </div>
  );
}
