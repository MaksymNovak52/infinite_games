"use client";
import { LEADERBOARD_DATA } from "@/constants";
import { Miner } from "@/type";
import { getTableHeaderClasses } from "@/utils";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  LeaderboardColumn,
  LeaderboardHeader,
  LeaderBoardNoData,
} from "./index";

export function LeaderboardTable() {
  const [data, setData] = useState<Miner[]>(LEADERBOARD_DATA);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Miner[]>(LEADERBOARD_DATA);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(LEADERBOARD_DATA);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = LEADERBOARD_DATA.filter(
        (miner) =>
          miner.minerId.toString().includes(term) ||
          miner.hotkey.toLowerCase().includes(term)
      );
      setFilteredData(filtered);
    }
  }, [searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns: LeaderboardColumn,
    getCoreRowModel: getCoreRowModel(),
  });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div
      className="w-[1134px] h-[521px] mx-auto border border-[#222] bg-white shadow-md overflow-hidden"
      style={{
        boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <LeaderboardHeader searchTerm={searchTerm} handleSearch={handleSearch} />

      <div>
        <table className="w-full  ">
          <thead>
            <tr className="bg-gray-100 border-b border-[#222] ">
              {table.getHeaderGroups()[0].headers.map((header) => (
                <th
                  key={header.id}
                  className={getTableHeaderClasses(header.id)}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div
          className="px-6"
          style={{
            height: "440px",
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 transparent",
          }}
        >
          <table className="w-full border-collapse">
            <tbody style={{ overflowY: "auto" }}>
              {table.getRowModel().rows.map((row, index) => (
                <tr key={row.id} className="border-b border-gray-200">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-3 py-4 text-sm text-gray-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <LeaderBoardNoData
                filteredData={filteredData}
                searchTerm={searchTerm}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
