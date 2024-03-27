import * as S from '@/styles/arena/arena.style';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { common } from '../../services/api.js';
// import { getMember } from '../../services/UserService.js';

const TimelineComponent = () => {
  const [isDotHovered, setIsDotHovered] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let summonerNameChampionNameMap = new Map();
  let { matchId } = useParams();
  const [review, setReview] = useState<string | null>(null);
  const [name, _setName] = useState(null);
  // const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      id: 3,
      createdAt: '2023.10.10',
      summonerName: 'summonerName3',
      matchId: 'KR_0000000000',
      content: 'content3',
    },
  ]);
  const [timelineInfo, setTimelineInfo] = useState({
    matchId: 'KR_6725750646',
    championNames: [
      'Pantheon',
      'Karthus',
      'Jayce',
      'Draven',
      'Thresh',
      'Gwen',
      'Belveth',
      'Tristana',
      'Jhin',
      'FiddleSticks',
    ],
    summonerNames: [
      'name1',
      'name2',
      'name3',
      'name4',
      'name5',
      'name6',
      'name7',
      'name8',
      'name9',
      'name10',
    ],
    timelines: [
      {
        minute: 2,
        second: 35,
        killerId: 4,
        killedId: 9,
        x: 13170,
        y: 3876,
      },
    ],
  });

  useEffect(() => {
    // async function getMemberAndSetName() {
    //   let memberResponse = await getMember();

    //   if (memberResponse == undefined || memberResponse == null) {
    //     location.href = 'http://localhost:3000/user/signin';
    //   } else {
    //     setName(memberResponse.data.name);
    //     return memberResponse.data.name;
    //   }
    // }

    async function fetchDataAndSetState() {
      let timelineResponse = await common.get('/riot/timeline/' + matchId);

      // console.log('timelineResponse');
      // console.log(timelineResponse.data);

      // setTimelineInfo
      setTimelineInfo(timelineResponse.data);

      // review axios response
      let reviewResponse = await common.get('/review/' + matchId + '/' + 0);

      // console.log('reviewResponse');
      // console.log(reviewResponse.data);

      // setReviews
      setReviews(reviewResponse.data);

      let newIsDotHovered = [];
      for (let i = 0; i < timelineResponse.data.timelines.length; i++) {
        newIsDotHovered.push(false);
      }
      setIsDotHovered(newIsDotHovered);

      // map summonerName to championName
      for (let i = 0; i < 10; i++) {
        summonerNameChampionNameMap.set(
          timelineResponse.data.summonerNames[i],
          timelineResponse.data.championNames[i]
        );
      }
    }

    // let memberName = getMemberAndSetName();
    // fetchDataAndSetState(memberName);
    fetchDataAndSetState();
  }, []);

  let changeDotHoverFlag = (idx: number) => {
    let prefix = isDotHovered.slice(0, idx);
    let changeElement = [isDotHovered[idx] ? false : true];
    let suffix = isDotHovered.slice(idx + 1, isDotHovered.length);

    let newIsDotHovered = prefix.concat(changeElement).concat(suffix);

    setIsDotHovered(newIsDotHovered);
  };

  const checkEmptyReview = (review: string | null | undefined) => {
    if (review == undefined || review == null || review == '') {
      return true;
    } else {
      return false;
    }
  };

  const submitReview = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();

    if (checkEmptyReview(review)) {
      alert('투기장 댓글이 입력되지 않았습니다.');
    }

    const requestBody = {
      summonerName: name,
      matchId: matchId,
      content: review,
    };

    // console.log(requestBody);

    const requestForm = JSON.stringify(requestBody);

    common.post('/review/register', requestForm);
  };

  const changeReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newReview = e.target.value;
    setReview(newReview);
  };

  return (
    <S.ArenaLayout>
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: '150px',
        }}
      >
        <div style={{ float: 'left' }}>
          {timelineInfo.summonerNames
            .filter((_name, idx) => idx >= 0 && idx < 5)
            .map((name, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#c0dcfb',
                    border: '2px solid #dfdfdf',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    src={
                      '/image/champion/' +
                      timelineInfo.championNames[index] +
                      '.png'
                    }
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: '10px',
                      borderRadius: '10px',
                    }}
                  />
                  <div
                    key={index}
                    style={{ display: 'flex', alignSelf: 'center' }}
                  >
                    <b>{name}</b>
                  </div>
                </div>
              );
            })}
        </div>

        <S.ImageContainer>
          <S.ImageLayout src="/image/map/lol_map.png" />
          {timelineInfo.timelines.map((info, index) => {
            return (
              <div key={index}>
                <S.DotLayout
                  style={{
                    left: (info.x / 14870) * 512,
                    top: 512 - (info.y / 14980) * 512,
                  }}
                  onClick={() => changeDotHoverFlag(index)}
                  // onMouseOver={()=>changeDotHoverFlag(index)}
                  // onMouseOut={()=>changeDotHoverFlag(index)}
                  // onClick={()=>printInfo(info)}
                ></S.DotLayout>

                {/* 킬 관련 정보가 점 위에 커서가 hover되면 보임 */}
                {isDotHovered[index] && (
                  <S.Container
                    style={{
                      left: (info.x / 14870) * 512 + 1,
                      top: 512 - (info.y / 14980) * 512 + 1,
                    }}
                  >
                    <img
                      src={
                        '/image/champion/' +
                        timelineInfo.championNames[info.killerId - 1] +
                        '.png'
                      }
                      style={{ width: '30px', height: '30px' }}
                    ></img>
                    &nbsp;
                    <img
                      src="/image/kill.jpg"
                      style={{ width: '30px', height: '30px' }}
                    ></img>
                    &nbsp;
                    <img
                      src={
                        '/image/champion/' +
                        timelineInfo.championNames[info.killedId - 1] +
                        '.png'
                      }
                      style={{ width: '30px', height: '30px' }}
                    ></img>
                  </S.Container>
                )}
              </div>
            );
          })}
        </S.ImageContainer>

        <div style={{ float: 'right' }}>
          {timelineInfo.summonerNames
            .filter((_name, idx) => idx >= 5 && idx < 10)
            .map((name, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#fbb5b5',
                    border: '2px solid #dfdfdf',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    src={
                      '/image/champion/' +
                      timelineInfo.championNames[index + 5] +
                      '.png'
                    }
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: '10px',
                      borderRadius: '10px',
                    }}
                  />
                  <div
                    key={index}
                    style={{ display: 'flex', alignSelf: 'center' }}
                  >
                    <b>{name}</b>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <S.ArenaContainer>
        <div className="review-box">
          <p className="title">
            <img src="/image/arena.webp" width="40px" height="40px" />
            투기장
          </p>
          <div className="review-body">
            {reviews.length > 0 ? (
              reviews.map((review, index) => {
                return (
                  <S.ArenaBox key={index}>
                    <div className="profile-section">
                      <div className="profile">
                        <img
                          src={
                            '/image/champion/' +
                            timelineInfo.championNames[
                              timelineInfo.summonerNames.indexOf(
                                review.summonerName
                              )
                            ] +
                            '.png'
                          }
                          alt="icons"
                          className="icon"
                        />
                        <img
                          src="/image/rank-icons/master.png"
                          alt="tier"
                          className="tier"
                        />
                        <p className="name">{review.summonerName}</p>
                      </div>
                      <p className="time">{review.createdAt}</p>
                    </div>
                    <div className="content-section">
                      <p className="content" id={`${review.id}`}>
                        {review.content}
                      </p>
                    </div>
                  </S.ArenaBox>
                );
              })
            ) : (
              <S.ArenaBox>
                <div className="profile-section">
                  <div className="profile">
                    <img
                      src="/image/rank-icons/master.png"
                      alt="tier"
                      className="tier"
                    />
                    <p className="name">Nothing</p>
                  </div>
                  <p className="time">0000.00.00</p>
                </div>
                <div className="content-section">
                  <p className="content">
                    아직 투기장에 댓글이 달리지 않았습니다.
                  </p>
                </div>
              </S.ArenaBox>
            )}
          </div>
        </div>
        <div className="search-input">
          <input placeholder="" onChange={changeReview} />
          <img src="/image/send.png" onClick={submitReview} />
        </div>
      </S.ArenaContainer>
    </S.ArenaLayout>
  );
};

export default TimelineComponent;
