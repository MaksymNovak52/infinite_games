import {
  HeaderContainer,
  HeroContainer,
  LeaderBoardContainer,
  MinerBtn,
  PerformanceContainer,
  PredictionsContainer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HeaderContainer />
      <HeroContainer />
      <LeaderBoardContainer />
      <PredictionsContainer />
      <PerformanceContainer />
      <MinerBtn title="Become a Miner" />
    </main>
  );
}
