import { Miner } from "@/type";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Miner>();

export const LeaderboardColumn = [
  columnHelper.accessor("rank", {
    header: "RANK",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("hotkey", {
    header: "HOTKEY",
    cell: (info) => (
      <div className="flex items-center">
        <span className="mr-2">📋</span>
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("minerId", {
    header: "MINER UID",
    cell: (info) => <div className="text-center">{info.getValue()}</div>,
  }),
  columnHelper.accessor("averageAccuracy", {
    header: "AVERAGE ACCURACY",
    cell: (info) => (
      <div className="text-center ">{info.getValue().toFixed(2)}</div>
    ),
  }),
  columnHelper.accessor("numberOfEvents", {
    header: "NUMBER OF EVENTS",
    cell: (info) => <div className="text-center">{info.getValue()}</div>,
  }),
  columnHelper.accessor("averagePeerScore", {
    header: "AVERAGE PEER SCORE",
    cell: (info) => (
      <div className="text-center">{info.getValue().toFixed(2)}</div>
    ),
  }),
];
