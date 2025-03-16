"use client";

import {
  customPerformanceSelectStyles,
  performanceColumns,
  performanceEventData,
  performanceOptions,
} from "@/constants";
import { EventData, EventMinerOption } from "@/type";
import { getColumnStyles, getRowAnimationStyles } from "@/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CSSProperties, useMemo, useState } from "react";
import Select, { MultiValue } from "react-select";

export function EventMinerTable() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanding, setIsExpanding] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<unknown>>(
    []
  );

  const filteredData = useMemo(() => {
    return performanceEventData.filter((item) =>
      item.eventKey.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const displayedData = useMemo(() => {
    return showAll ? filteredData : filteredData.slice(0, 3);
  }, [showAll, filteredData]);

  const table = useReactTable({
    data: displayedData,
    columns: performanceColumns as ColumnDef<EventData>[],
    getCoreRowModel: getCoreRowModel(),
  });

  const handleToggleView = () => {
    if (!showAll) {
      setIsExpanding(true);
      setShowAll(true);
    } else {
      setShowAll(false);
      setIsExpanding(false);
    }
  };

  return (
    <div className="text-white w-full my-10 ">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl leading-7 font-medium font-mono">
          Events insights for miner key: 69_5HBgwrud
        </h2>
        <div className="w-[370px] bg-[#FFF]/10">
          <Select
            isMulti
            options={performanceOptions}
            defaultValue={[performanceOptions[0]]}
            isClearable={false}
            onChange={(newValue) =>
              setSelectedOptions(
                newValue.map((option) => (option as EventMinerOption).value)
              )
            }
            styles={customPerformanceSelectStyles}
            className="outline-none border-none !bg-[#FFF]/10"
            classNamePrefix="react-select"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-gray-800">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={` text-gray-400 uppercase text-xs font-normal pb-4 leading-6 tracking-[1.68px]`}
                    style={getColumnStyles(header.column.id) as CSSProperties}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className="border-b border-gray-800 font-inter"
                style={getRowAnimationStyles(isExpanding, index)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="pb-10 pt-3 px-0">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length > 3 && (
        <div className="text-center mt-4 mb-10">
          <button
            className="uppercase text-sm font-semibold text-white hover:text-gray-200 underline transition-all duration-300 relative group"
            onClick={handleToggleView}
          >
            <span>
              {showAll ? "Show Less" : `VIEW ALL ${filteredData.length} EVENTS`}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
