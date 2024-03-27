import { IUserToken } from '../service/types';

export interface IGroupDetailList {
  currentSummoner: {
    name: string;
    tier: {
      id: string;
      name: string;
      orderNum: number;
    };
    rank: number;
    profileIconId: number;
    level: number;
  };
  chairman: string;
  name: string;
  description: string;
  summonerResponse: [
    {
      name: string;
      tier: {
        id: string;
        name: string;
        orderNum: number;
      };
      rank: number;
      profileIconId: number;
      level: number;
    },
  ];
  joined: boolean;
  img: string;
  avgTier: {
    id: string;
    name: string;
    orderNum: number;
  };
}

export interface IGroupTeamList {
  teamList: [
    {
      name: string;
      description: string;
      img: string;
    },
  ];
  recentTeamList: [
    {
      name: string;
      description: string;
      img: string;
      avgTier: {
        name: string;
      };
    },
  ];
}

export interface GroupDetailProps {
  detailList: IGroupDetailList;
  getByteToImage: (imgSrc: string) => void;
  auth: IUserToken;
  onJoinGroup: () => void;
}

export interface GroupMainProps {
  groupList: IGroupTeamList | null;
  createGroup: () => void;
  onSearch: (word: string | null) => void;
  getByteToImage: (imgSrc: string) => string;
}
