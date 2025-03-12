import { LeaderboardTable } from "./table";

export function LeaderBoardContainer() {
  return (
    <section className="flex flex-col justify-center  items-center gap-6">
      <h3 className="text-base font-normal leading-4 text-[$1F1F1F] w-[224px] text-center">
        Over <span className="font-semibold"> $1million</span> in{" "}
        <span className="font-semibold">TAO</span> to be claimed every month
      </h3>
      <LeaderboardTable />
    </section>
  );
}
