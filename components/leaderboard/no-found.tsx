import { Miner } from "@/type";

interface ILeaderBoardNoData {
  filteredData: Miner[];
  searchTerm: string;
}
export function LeaderBoardNoData({
  filteredData,
  searchTerm,
}: ILeaderBoardNoData) {
  return (
    <>
      {filteredData.length === 0 && (
        <tr>
          <td colSpan={6} className="text-center py-4 text-gray-500">
            No results found for "{searchTerm}"
          </td>
        </tr>
      )}
    </>
  );
}
