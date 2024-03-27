// React
import React, { useCallback } from 'react';
// Styled
import * as S from '../../styles/main/ranking.style';
// Component
import LoadingComponent from '../common/LoadingComponent';
// Type
import { RankingProps } from '@/types/component/main.types';

const RankingComponent: React.FC<RankingProps> = ({
  hofTab,
  setHofTab,
  rankData,
  rankTab,
  setRankTab,
  groupRankData,
}) => {
  const getByteToImage = useCallback((imgSrc: string) => {
    const binaryString = atob(imgSrc);
    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const img = new Blob([bytes], {
      type: 'image/jpg',
    });

    return URL.createObjectURL(img);
  }, []);

  return (
    <S.RankingLayout>
      <div className="container">
        <p className="title">&#127942; 명예의 전당</p>
        <S.TabBox>
          <S.TabItem $istab={hofTab == 0 ? 1 : 0} onClick={() => setHofTab(0)}>
            1~10위
          </S.TabItem>
          <S.TabItem $istab={hofTab == 1 ? 1 : 0} onClick={() => setHofTab(1)}>
            11~20위
          </S.TabItem>
          <S.TabItem $istab={hofTab == 2 ? 1 : 0} onClick={() => setHofTab(2)}>
            21~30위
          </S.TabItem>
        </S.TabBox>
        <S.ContentTable>
          {rankData ? (
            rankData[hofTab].map((e, i) => (
              <S.ContentItem key={i}>
                <p className="idx">{hofTab * 10 + (i + 1)}</p>
                <p className="name">{e.summonerName}</p>
                <p className="tier">{e.leaguePoints}점</p>
              </S.ContentItem>
            ))
          ) : (
            <LoadingComponent white={false} />
          )}
        </S.ContentTable>
      </div>
      <div className="container">
        <p className="title">&#127969; 소속 별 순위</p>
        <S.TabBox>
          <S.TabItem
            $istab={rankTab == 0 ? 1 : 0}
            onClick={() => setRankTab(0)}
          >
            평균 티어
          </S.TabItem>
          <S.TabItem
            $istab={rankTab == 1 ? 1 : 0}
            onClick={() => setRankTab(1)}
          >
            멤버 수
          </S.TabItem>
          <S.TabItem
            $istab={rankTab == 2 ? 1 : 0}
            onClick={() => setRankTab(2)}
          >
            최근 가입
          </S.TabItem>
        </S.TabBox>
        <S.ContentTable>
          <S.ContentItem>
            <p className="idx"></p>
            <p className="image"></p>
            <p className="name">
              <b>소속 이름</b>
            </p>
            <p className="tier">
              <b>평균 티어</b>
            </p>
          </S.ContentItem>
          {groupRankData && rankTab == 0 ? (
            groupRankData.tierTeamList.map((e, i) => (
              <S.ContentItem key={i}>
                <p className="idx">{i + 1}</p>
                <img className="image" src={getByteToImage(e.img)} />
                <p className="name">{e.name}</p>
                <p className="tier">{e.avgTier.name}</p>
              </S.ContentItem>
            ))
          ) : groupRankData && rankTab == 1 ? (
            groupRankData.memberCountTeamList.map((e, i) => (
              <S.ContentItem key={i}>
                <p className="idx">{i + 1}</p>
                <img className="image" src={getByteToImage(e.img)} />
                <p className="name">{e.name}</p>
                <p className="tier">{e.avgTier.name}</p>
              </S.ContentItem>
            ))
          ) : groupRankData && rankTab == 2 ? (
            groupRankData.recentTeamList.map((e, i) => (
              <S.ContentItem key={i}>
                <p className="idx">{i + 1}</p>
                <img className="image" src={getByteToImage(e.img)} />
                <p className="name">{e.name}</p>
                <p className="tier">{e.avgTier.name}</p>
              </S.ContentItem>
            ))
          ) : (
            <LoadingComponent white={false} />
          )}
        </S.ContentTable>
      </div>
    </S.RankingLayout>
  );
};

export default RankingComponent;
