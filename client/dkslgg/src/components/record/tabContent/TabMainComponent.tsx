// React
import React, { useState } from 'react';
// Styled
import * as S from '@/styles/record/tabmain.style';
// Select
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// Nivo
import { ResponsivePie } from '@nivo/pie';
// Component
import LoadingComponent from '../../common/LoadingComponent';
// Type
import { ITabMainComponentProps } from '@/types/component/tab/tabMain.types';

const options = [
  { value: 'default', label: '큐 타입' },
  { value: '420', label: '솔로 랭크' },
];

const animatedComponent = makeAnimated();

const setRound = (num: number) => {
  return +(Math.round(Number(num + 'e+2')) + 'e-2');
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const RecordCardComponent = (props: {
  win: number;
  data: any[];
  curIdx: number;
  summary: any[][];
  matchId: string;
  winner: any[];
  loser: any[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDetail = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.RecordCard $win={props.win === 1 ? true : false}>
        <div className="record-info">
          <div className="left-section">
            <div className="area-1">
              <p className="win">{props.win ? '승리' : '패배'}</p>
              <p>솔로랭크</p>
              <p>{props.data[0].play_duration}</p>
              <p>{props.data[`${props.curIdx}`].play_time}</p>
            </div>
            <div className="area-2">
              <div className="champ">
                <img
                  className="image"
                  src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${
                    props.data[props.curIdx].champion_name_en
                  }.png`}
                />
              </div>
              <div className="another">
                <img
                  className="image"
                  src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${
                    props.data[props.curIdx].spell_0_id
                  }.png`}
                />
                <img
                  className="image"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
                    props.data[props.curIdx].rune_0_id
                  }.png`}
                />
                <img
                  className="image"
                  src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${
                    props.data[props.curIdx].spell_1_id
                  }.png`}
                />
                <img
                  className="image"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
                    props.data[props.curIdx].rune_1_id
                  }.png`}
                />
              </div>
            </div>
            <div className="area-3">
              <div className="kda">
                <p>{props.data[props.curIdx].kill}</p>/
                <p className="red">{props.data[props.curIdx].death}</p>/
                <p>{props.data[props.curIdx].assist}</p>
              </div>
              <p className="red">
                <b>{setRound(props.data[props.curIdx].kda)}</b> 평점
              </p>
              <p className="tag">
                <b>{props.data[props.curIdx].line_name}</b>
              </p>
            </div>
            <div className="area-4">
              <p>
                킬 관여{' '}
                <b>
                  {setRound(props.data[props.curIdx].kill_participation * 100)}
                </b>
                %
              </p>
              <p>
                CS <b>{props.data[props.curIdx].CS}</b>
              </p>
              <p>
                시야점수 <b>{props.data[props.curIdx].vision_score}</b>
              </p>
            </div>
            <div className="area-5">
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_0_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_0_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_1_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_1_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_2_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_2_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_6_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_6_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_4_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_4_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_5_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_5_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
              <img
                className="image"
                src={
                  props.data[props.curIdx].item_3_id != 0
                    ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${
                        props.data[props.curIdx].item_3_id
                      }.png`
                    : '/image/no_item.png'
                }
              />
            </div>
          </div>
          <div className="right-section">
            <div className="team-1">
              {props.summary[0].map((e, i) => (
                <div className="summoner" key={`winner_${i}`}>
                  <img
                    className="image"
                    src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.champ}.png`}
                  />
                  <p>{e.name}</p>
                </div>
              ))}
            </div>
            <div className="team-2">
              {props.summary[1].map((e, i) => (
                <div className="summoner" key={`loser_${i}`}>
                  <img
                    className="image"
                    src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.champ}.png`}
                  />
                  <p>{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="arrow-area">
          <img
            className="image"
            src={`/image/arrow_${isOpen ? 'up' : 'down'}.svg`}
            onClick={openDetail}
          />
        </div>
        <button
          onClick={() => {
            location.href = '/arena/' + props.matchId;
          }}
        />
      </S.RecordCard>
      <div className={`start ${isOpen && `end`}`}>
        {isOpen && (
          <S.RecordDetail>
            <S.TeamDetail $win>
              <div className="title">
                <p>승리</p>
              </div>
              {props.winner.map((e, i) => (
                <div className="detail-body" key={`record_detail_winner_${i}`}>
                  <div className="area-1">
                    <div className="champ">
                      <img
                        className="image"
                        src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.champion_name_en}.png`}
                      />
                    </div>
                    <div className="another">
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${e.spell_0_id}.png`}
                      />
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${e.rune_0_id}.png`}
                      />
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${e.spell_1_id}.png`}
                      />
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${e.rune_1_id}.png`}
                      />
                    </div>
                    <div className="summoner">
                      <p className="name">
                        <b>{e.summoner_name}</b>
                      </p>
                      <p className="tier">{e.line_name}</p>
                    </div>
                  </div>
                  <div className="area-2">
                    <div className="desc">
                      <div className="kda">
                        <p>{e.kill}</p>/<p className="red">{e.death}</p>/
                        <p>{e.assist}</p>
                      </div>
                      <p className="score">{setRound(e.kda)}</p>
                    </div>
                    <div className="result">
                      <div className="text">
                        <p>
                          <b>C</b>:{e.CS}
                        </p>
                        <p>
                          <b>G</b>:{e.gold}
                        </p>
                        <p>
                          <b>W</b>:{e.control_wards_placed}
                        </p>
                      </div>
                      <S.HorizenGraph
                        $red={Math.floor(
                          e.damage_taken_on_team_percentage * 100
                        )}
                        $gray={
                          100 -
                          Math.floor(e.damage_taken_on_team_percentage * 100)
                        }
                      >
                        <div className="red"></div>
                        <div className="gray"></div>
                      </S.HorizenGraph>
                    </div>
                  </div>
                  <div className="area-3">
                    <div className="item-list">
                      <img
                        className="image"
                        src={
                          e.item_0_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_0_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_1_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_1_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_2_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_2_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_3_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_3_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_4_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_4_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_5_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_5_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_6_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_6_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </S.TeamDetail>
            <S.TeamDetail $win={false}>
              <div className="title">
                <p>패배</p>
              </div>
              {props.loser.map((e, i) => (
                <div className="detail-body" key={`loser${i}`}>
                  <div className="area-1">
                    <div className="champ">
                      <img
                        className="image"
                        src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.champion_name_en}.png`}
                      />
                    </div>
                    <div className="another">
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${e.spell_0_id}.png`}
                      />
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${e.rune_0_id}.png`}
                      />
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/${e.spell_1_id}.png`}
                      />
                      <img
                        className="image"
                        src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${e.rune_1_id}.png`}
                      />
                    </div>
                    <div className="summoner">
                      <p className="name">
                        <b>{e.summoner_name}</b>
                      </p>
                      <p className="tier">{e.line_name}</p>
                    </div>
                  </div>
                  <div className="area-2">
                    <div className="desc">
                      <div className="kda">
                        <p>{e.kill}</p>/<p className="red">{e.death}</p>/
                        <p>{e.assist}</p>
                      </div>
                      <p className="score">{setRound(e.kda)}</p>
                    </div>
                    <div className="result">
                      <div className="text">
                        <p>
                          <b>C</b>:{e.CS}
                        </p>
                        <p>
                          <b>G</b>:{e.gold}
                        </p>
                        <p>
                          <b>W</b>:{e.control_wards_placed}
                        </p>
                      </div>
                      <S.HorizenGraph
                        $red={Math.floor(
                          e.damage_taken_on_team_percentage * 100
                        )}
                        $gray={
                          100 -
                          Math.floor(e.damage_taken_on_team_percentage * 100)
                        }
                      >
                        <div className="red"></div>
                        <div className="gray"></div>
                      </S.HorizenGraph>
                    </div>
                  </div>
                  <div className="area-3">
                    <div className="item-list">
                      <img
                        className="image"
                        src={
                          e.item_0_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_0_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_1_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_1_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_2_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_2_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_3_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_3_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_4_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_4_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_5_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_5_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                      <img
                        className="image"
                        src={
                          e.item_6_id != 0
                            ? `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${e.item_6_id}.png`
                            : '/image/no_item.png'
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </S.TeamDetail>
          </S.RecordDetail>
        )}
      </div>
    </>
  );
};

const TabMainComponent: React.FC<ITabMainComponentProps> = ({
  data,
  piedata,
}) => {
  if (data == null) {
    return <LoadingComponent white={false} />;
  }
  return (
    <S.TabMainLayout>
      <S.LeftLayout>
        <S.TierCard>
          <p className="title">&#127941; 티어</p>
          <div>
            <div className="result-box">
              <div className="rank-type">솔로 랭크</div>
              <div className="rank-detail">
                <img
                  src={`/image/rank-icons/${
                    data.profile.tier_name
                      ? data.profile.tier_name.toLowerCase()
                      : 'unranked'
                  }.png`}
                />
                <div className="description">
                  <p className="tier">
                    {data.profile.tier_name
                      ? capitalizeFirstLetter(
                          data.profile.tier_name.toLowerCase()
                        )
                      : `Unranked`}
                  </p>
                </div>
              </div>
            </div>
            {data.freeRank && (
              <div className="result-box">
                <div className="rank-type">자유 랭크</div>
                <div className="rank-detail">
                  <img
                    src={`/image/rank-icons/${data.freeRank.tier_name.toLowerCase()}.png`}
                  />
                  <div className="description">
                    <p className="tier">
                      {capitalizeFirstLetter(
                        data.freeRank.tier_name.toLowerCase()
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </S.TierCard>
        <S.DuoCard>
          <p className="title">&#128080; 함께 한 소환사들</p>
          <table className="duo-table">
            <thead>
              <tr className="table-header">
                <td className="summoner">소환사</td>
                <td className="game">게임</td>
                <td className="result">승-패</td>
                <td className="percentage">승률</td>
              </tr>
            </thead>
            <tbody>
              {data.duoPlayer.map((e, i) => (
                <tr className="table-row" key={`duoplayer_${i}`}>
                  <td className="summoner">
                    <p>{e[0]}</p>
                  </td>
                  <td className="game">{e[1].count}</td>
                  <td className="result">
                    {e[1].win}-{e[1].lose}
                  </td>
                  <td className="percentage">{e[1].percent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </S.DuoCard>
      </S.LeftLayout>
      <S.RightLayout>
        <div className="rank-type">
          <div className="radio-group">
            <input type="radio" name="rank-type" />
            <label>랭크 전체</label>
            <input type="radio" name="rank-type" />
            <label>솔로 랭크</label>
            {data.freeRank && <input type="radio" name="rank-type" />}
            {data.freeRank && <label>자유 랭크</label>}
          </div>
          <div className="select-group">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponent}
              defaultValue={options[0]}
              options={options}
            />
          </div>
        </div>
        <S.RecentCard>
          <p className="title">&#128202; 최근 게임 분석</p>
          <div className="card-body">
            <div className="circle-graph">
              <p className="sub-title">
                {data.recent.count}전 {data.recent.win}승 {data.recent.lose}패
              </p>
              <div className="percentage-pie">
                <ResponsivePie
                  data={piedata}
                  margin={{ top: 5, right: 5, bottom: 5, left: 10 }}
                  innerRadius={0.75}
                  padAngle={0.7}
                  cornerRadius={1}
                  colors={['#5393CA', '#ff5858']}
                  activeOuterRadiusOffset={3}
                  borderWidth={1}
                  borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]],
                  }}
                  enableArcLinkLabels={false}
                  enableArcLabels={false}
                />
                <div className="description">
                  <div className="kda">
                    {data.recent.kill}/
                    <p className="death">{data.recent.death}</p>/
                    {data.recent.assist}
                  </div>
                  <p className="middle">{data.recent.score}:1</p>
                  <p>킬관여 {data.recent.kill_participation * 100}%</p>
                </div>
              </div>
            </div>
            <div className="recent-played">
              <p className="sub-title">플레이한 챔피언&nbsp;</p>
              {data.profile.champions.length > 0 ? (
                data.profile.champions.map((e, i) => (
                  <div className="most-champ" key={`current_Card_Champ_${i}`}>
                    <img
                      className="image"
                      src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.champion_name}.png`}
                    />
                    <p className="percent">{e.win_rate * 100}%</p>
                    <p className="grade">
                      <b>{setRound(e.kda)}&nbsp;평점</b>
                    </p>
                    <p className="cnt">
                      {e.cnt}
                      <b>&nbsp;판</b>
                    </p>
                  </div>
                ))
              ) : (
                <p className="no-record">랭크 전적이 부족합니다.</p>
              )}
            </div>
            <div className="favo-position">
              <p className="sub-title">선호 포지션</p>
              <div className="position-area">
                {data.profile.positions.length > 0 ? (
                  data.profile.positions.map((e, i) => (
                    <div className="line" key={`positions_${i}`}>
                      <S.LineGraph
                        $gray={100 - (e.cnt / data.profile.positions_cnt) * 100}
                        $blue={(e.cnt / data.profile.positions_cnt) * 100}
                      >
                        <div className="gray-area"></div>
                        <div className="blue-area"></div>
                      </S.LineGraph>
                      <p>{e.line}</p>
                    </div>
                  ))
                ) : (
                  <p className="no-record">랭크 전적이 부족합니다.</p>
                )}
              </div>
            </div>
          </div>
        </S.RecentCard>
        <S.RecordTable>
          {data.match_histories.map((e, i) => (
            <RecordCardComponent
              key={`match_history_` + i}
              win={e.win}
              data={e.data}
              curIdx={e.cur}
              summary={e.summary}
              winner={e.winner}
              loser={e.loser}
              matchId={e.matchId}
            />
          ))}
        </S.RecordTable>
      </S.RightLayout>
    </S.TabMainLayout>
  );
};

export default TabMainComponent;
