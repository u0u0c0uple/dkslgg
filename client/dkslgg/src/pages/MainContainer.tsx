// React
import { useState, useEffect } from 'react';
// Component
import HeaderComponent from '../components/common/HeaderComponent';
import RankingComponent from '../components/main/RankingComponent';
import SearchComponent from '../components/main/SearchComponent';
// Service
import { getGroupRankData, getRankData } from '../services/MainService';
// Type
import { IGroupRankData, IRankData } from '@/types/component/main.types';

const MainContainer = () => {
  const [hofTab, setHofTab] = useState(0);
  const [rankTab, setRankTab] = useState(0);
  const [rankData, setRankData] = useState<IRankData[][] | null>(null);
  const [groupRankData, setGroupRankData] = useState<IGroupRankData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const rankData = await getRankData();
      if (!rankData) return;

      const dividedRankData = [];

      for (let i = 0; i < rankData.length; i += 10) {
        dividedRankData.push(rankData.slice(i, i + 10));
      }

      setRankData(dividedRankData);
    };

    fetchData();

    const groupRankData = async () => {
      const data = await getGroupRankData();
      setGroupRankData(data);
    };

    groupRankData();
  }, []);

  return (
    <>
      <HeaderComponent />
      <SearchComponent />
      <RankingComponent
        hofTab={hofTab}
        setHofTab={setHofTab}
        rankData={rankData}
        rankTab={rankTab}
        setRankTab={setRankTab}
        groupRankData={groupRankData}
      />
    </>
  );
};

export default MainContainer;
