export interface IRankData {
  summonerName: string;
  leaguePoints: string;
}

export interface IGroupRankData {
  tierTeamList: [
    {
      name: string;
      avgTier: {
        name: string;
      };
      img: string;
    },
  ];
  memberCountTeamList: [
    {
      name: string;
      avgTier: {
        name: string;
      };
      img: string;
    },
  ];
  recentTeamList: [
    {
      name: string;
      avgTier: {
        name: string;
      };
      img: string;
    },
  ];
}

export interface RankingProps {
  hofTab: number;
  setHofTab: (args: number) => void;
  rankData: IRankData[][] | null;
  rankTab: number;
  setRankTab: (args: number) => void;
  groupRankData: IGroupRankData | null;
}
