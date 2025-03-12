type HeaderId = "minerId" | "rank" | "hotkey" | "averageAccuracy" | string;
type Miner = {
  rank: number;
  hotkey: string;
  minerId: number;
  averageAccuracy: number;
  numberOfEvents: number;
  averagePeerScore: number;
};

export type { HeaderId, Miner };
