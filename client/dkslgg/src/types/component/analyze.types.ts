// Jotai Atom Interface
export interface IAnalyzeData {
  chapmions: string[];
  celeb: {
    name: string;
    url: string;
    line: string;
    desc: string;
  };
  cluster: {
    no: string;
    name: string;
    receive: string;
    cs: string;
    dpm: string;
    kda: string;
    minion_avg: string;
    assist: string;
    soloKill: string;
    vision: string;
    dealt: string;
    level: string;
    ward: string;
  };
}

// Fetching analyze Data
export interface AnalyzeData {
  champ0: string;
  champ1: string;
  champ2: string;
  celeb: string;
  line: string;
  desc: string;
  url: string;
  minion_avg: number;
  cluster_no: string;
  name: string;
  '챔피언 레벨': string;
  솔로킬: string;
  dpm: string;
  '받은 피해': string;
  kda: string;
  '10분 미니언': string;
  '챔피언 딜량': string;
  '시야 점수': string;
  '핑크와드 구매': string;
  '분 당 어시': string;
}
