"use client";

import { datepickerStyles, minerKeyOptions } from "@/constants";
import { MarketTypeOption, MinerKeyOption } from "@/type";
import { addDays } from "date-fns";
import { useState } from "react";
import { PerformanceMineyKeyIcon } from "../icon";
import {
  EventAverageScore,
  EventChart,
  EventMinerTable,
  FilterSection,
  PerformanceCards,
  PerformanceHeader,
  SectionTitle,
  SelectEventChart,
} from "./index";

export function PerformanceContainer(): JSX.Element {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    addDays(new Date(), -6),
    new Date(),
  ]);
  const [selectedMiner, setSelectedMiner] = useState<MinerKeyOption>(
    minerKeyOptions[0]
  );
  const [selectedMarkets, setSelectedMarkets] = useState<MarketTypeOption[]>([
    "ALL",
  ]);

  const toggleMarketSelection = (market: MarketTypeOption): void => {
    if (market === "ALL") {
      setSelectedMarkets(["ALL"]);
    } else {
      const newSelection = [...selectedMarkets];

      if (newSelection.includes("ALL")) {
        newSelection.splice(newSelection.indexOf("ALL"), 1);
      }

      if (newSelection.includes(market)) {
        newSelection.splice(newSelection.indexOf(market), 1);

        if (newSelection.length === 0) {
          newSelection.push("ALL");
        }
      } else {
        newSelection.push(market);
      }

      setSelectedMarkets(newSelection);
    }
  };

  return (
    <div
      className="w-[1400px] mx-auto mt-10 bg-[#0E0910] text-white"
      style={{
        boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <style jsx global>
        {datepickerStyles}
      </style>

      <PerformanceHeader title="MINERS PERFORMANCE" />

      <FilterSection
        dateRange={dateRange}
        setDateRange={setDateRange}
        selectedMiner={selectedMiner}
        setSelectedMiner={setSelectedMiner}
        selectedMarkets={selectedMarkets}
        toggleMarketSelection={toggleMarketSelection}
      />

      <SectionTitle
        title="GENERAL OVERVIEW FOR MINER KEY:"
        subtitle={selectedMiner}
        icon={PerformanceMineyKeyIcon}
      />
      <div className="w-[1128px] mx-auto py-10">
        <PerformanceCards />
        <EventAverageScore />
        <EventChart />
        <EventMinerTable />
        <SelectEventChart />
      </div>
    </div>
  );
}
