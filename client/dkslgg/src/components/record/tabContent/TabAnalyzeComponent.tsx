// React
import React, { useEffect, useState } from 'react';
// Styled
import * as S from '@/styles/record/tabanalyze.style';
// Chart
import { ResponsiveBar } from '@nivo/bar';
// Component
import LoadingComponent from '../../common/LoadingComponent';
// Jotai
import { useAnalyze } from '../../../jotai/analyze';
import { useGroup } from '../../../jotai/group';
// Data
import { star } from '../../../data/star';
// Type
import {
  FetchChampDataType,
  fetchChampDataReturnType,
} from '@/types/component/record.types';

const openLink = (url: string) => {
  window.open(url, '_blank');
};

const TabAnalyzeComponent: React.FC<{
  fetchData: FetchChampDataType;
}> = ({ fetchData }) => {
  const analyze = useAnalyze();
  // LBTI Data get
  const group = useGroup();
  const [champ, setChamp] = useState<fetchChampDataReturnType[] | null>(null);
  const [chart, setChart] = useState<{ id: string; value: number }[] | null>(
    null
  );
  const [lbti, setLbti] = useState<any | null>(null);

  useEffect(() => {
    if (analyze && typeof analyze != 'string') {
      const data = analyze.cluster;
      setChart([
        {
          id: 'CS',
          value: parseInt(data.cs),
        },
        {
          id: '딜량',
          value: parseInt(data.dealt),
        },
        {
          id: '분당 딜량',
          value: parseInt(data.dpm),
        },
        {
          id: 'KDA',
          value: parseFloat(data.kda),
        },
        {
          id: '레벨',
          value: parseInt(data.level),
        },
        {
          id: '받은 피해량',
          value: parseInt(data.receive),
        },
        {
          id: '솔로킬',
          value: parseInt(data.soloKill),
        },
        {
          id: '시야점수',
          value: parseInt(data.vision),
        },
        {
          id: '핑크 와드',
          value: parseInt(data.ward),
        },
      ]);
    }
  }, [analyze]);

  useEffect(() => {
    if (analyze && typeof analyze != 'string') {
      const arr = analyze.chapmions;

      const fetchChampionData = async () => {
        const newArr: fetchChampDataReturnType[] = [];

        for (const championName of arr) {
          const championData = await fetchData(championName);
          if (championData) {
            newArr.push(championData);
          }
        }

        setChamp(newArr);
      };

      if (champ === null) {
        fetchChampionData();
      }
    }
  }, [analyze, champ, fetchData]);

  useEffect(() => {
    if (group && group.lbti) {
      const newObj = {
        ...group.lbti,
        lbtiStr:
          group.lbti.firstTendency.initial +
          group.lbti.secondTendency.initial +
          group.lbti.thirdTendency.initial +
          group.lbti.fourthTendency.initial,
      };
      setLbti((prevLbti: any) => {
        if (prevLbti == newObj) {
          return prevLbti;
        }
        return newObj;
      });
    }
  }, [group]);

  if (analyze == null) return <LoadingComponent white={false} />;

  return typeof analyze == 'string' ? (
    <S.TabAnalyzeLayout>
      <S.CenterLayout>
        <S.NoDataLayout>
          <p className="info">분석 데이터가 존재하지 않습니다.</p>
        </S.NoDataLayout>
      </S.CenterLayout>
    </S.TabAnalyzeLayout>
  ) : (
    <S.TabAnalyzeLayout>
      <S.CenterLayout>
        <S.AnalyzeCard>
          <p className="title">&#128195; 롤BTI 분석</p>
          {lbti ? (
            <div className="analyze-box">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${lbti.championName}.png`}
              />
              <div className="subtitle">
                <p>{lbti.name}</p>
                <p className="lbti">💡 {lbti.lbtiStr}</p>
              </div>
              <div className="tag-box">
                <S.TagItem $bg="red">
                  <div className="text">{lbti.firstTendency.name}</div>
                </S.TagItem>
                <S.TagItem $bg="green">
                  <div className="text">{lbti.secondTendency.name}</div>
                </S.TagItem>
                <S.TagItem $bg="violet">
                  <div className="text">{lbti.thirdTendency.name}</div>
                </S.TagItem>
                <S.TagItem $bg="var(--maincolor-depth1)">
                  <div className="text">{lbti.fourthTendency.name}</div>
                </S.TagItem>
              </div>
            </div>
          ) : (
            <LoadingComponent white={false} />
          )}
        </S.AnalyzeCard>
        <S.GraphCard>
          <p className="title">&#128195; 소환사 분석 그래프</p>
          <div className="graph-box">
            {chart ? (
              <div className="graph">
                <ResponsiveBar
                  data={chart}
                  keys={['value']}
                  indexBy="id"
                  margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
                  padding={0.3}
                  layout="vertical"
                  colors={{ scheme: 'nivo' }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 0,
                    tickRotation: 0,
                  }}
                  enableGridX={false}
                  enableGridY={true}
                  enableLabel={false}
                />
              </div>
            ) : (
              <LoadingComponent white={false} />
            )}
            <div className="desc">
              <p className="cluster-name">{analyze.cluster.name}</p>
              <p className="minion">
                평균 <b>미니언</b> 처치 수: <b>{analyze.cluster.minion_avg}</b>
              </p>
            </div>
          </div>
        </S.GraphCard>
        <S.ChampionCard>
          <p className="title">&#128077; 이 챔피언을 추천해요!</p>
          <div className="champion-box">
            {champ ? (
              champ.map((e, i) => (
                <div className="container" key={`champion_card_${i}`}>
                  <div
                    className="card front"
                    style={{
                      backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e.en_name}_0.jpg)`,
                    }}
                  ></div>
                  <div className="card back">
                    <div className="name">{e.name}</div>
                    <p className="tags">
                      {e.tags.map((v, j) => {
                        if (j == e.tags.length - 1) return v;
                        else return v + ', ';
                      })}
                    </p>
                    <p className="tips">
                      {e.tips[Math.floor(Math.random() * e.tips.length)]}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <LoadingComponent white={false} />
            )}
          </div>
        </S.ChampionCard>
        <S.FamousCard>
          <p className="title">&#128071; 이 사람은 어때요?</p>

          {analyze ? (
            <div className="content-box">
              <div className="img">
                <img
                  src={`/image/star/${star[analyze.celeb.name].img}`}
                  alt="star_img"
                  onClick={() => openLink(analyze.celeb.url)}
                />
              </div>
              <div className="desc">
                <p className="name">이름: {analyze.celeb.name}</p>
                <p className="line">라인: {analyze.celeb.line}</p>
                <p className="description">{analyze.celeb.desc}</p>
              </div>
            </div>
          ) : (
            <LoadingComponent white={false} />
          )}
        </S.FamousCard>
      </S.CenterLayout>
    </S.TabAnalyzeLayout>
  );
};

export default TabAnalyzeComponent;
