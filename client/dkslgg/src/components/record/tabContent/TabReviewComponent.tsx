// React
import { useEffect, useState } from 'react';
// Styled
import * as S from '@/styles/record/tabreview.style';
// Componnet
import LoadingComponent from '../../common/LoadingComponent.js';
import { common } from '../../../services/api.js';
import { getMember } from '../../../services/UserService.js';

const TabReviewComponent: React.FC<{ evaluateeName: string | undefined }> = ({
  evaluateeName,
}) => {
  // const search = useRef();
  const [reviewList, setReviewList] = useState<
    | {
        id: string;
        evaluatorName: string;
        score: number;
        localDateTime: string;
        evaluation: string;
      }[]
    | string[]
  >(['noData']);
  const [score, setScore] = useState(5);
  const [evaluationScore, setEvaluationScore] = useState(1);
  const [summonerName, setSummonerName] = useState('');
  const [evaluation, setEvaluation] = useState<string | null>(null);
  const [selectList, _setSelectList] = useState([1, 2, 3, 4, 5]);
  // reviewList = ['NoDasdta'];

  useEffect(() => {
    async function getMemberInfo() {
      let memberResponse = await getMember();
      setSummonerName(memberResponse.name);
      return memberResponse.name;
    }

    async function getEvaluationList() {
      if (evaluateeName == undefined) return;

      let splitSummonerName = evaluateeName.split('');

      let realSummonerName = splitSummonerName[0];
      if (splitSummonerName.length > 1) {
        for (let i = 1; i < splitSummonerName.length; i++) {
          realSummonerName += '%20' + splitSummonerName[i];
        }
      }

      let evaluationListResponse = await common.get(
        '/evaluation/' + realSummonerName + '/' + 1
      );

      setScore(evaluationListResponse.data.averageScore);
      setReviewList(evaluationListResponse.data.evaluations);
    }

    getMemberInfo();
    getEvaluationList();
  }, []);

  const registerEvaluation = () => {
    let requestBody = {
      evaluation: evaluation,
      evaluatorName: summonerName,
      evaluateeName: evaluateeName,
      score: evaluationScore,
    };

    common.post('/evaluation/create', JSON.stringify(requestBody));
  };

  const handleEvaluation = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEvaluation = e.target.value;
    setEvaluation(newEvaluation);
  };

  const handleScore = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEvaluationScore(parseInt(e.target.value));
  };

  return (
    <S.TabReviewLayout>
      {reviewList ? (
        reviewList[0] === 'noData' ? (
          <S.EmptyReviewLayout>
            <h1 className="icon">&#127969;</h1>
            <p className="head">리뷰가 존재하지 않습니다.</p>
            <p className="desc">해당 소환사에 대한 리뷰가 없습니다.</p>
            <p className="desc">소환사에게 리뷰를 남겨주세요!</p>
            <select onChange={handleScore} value={evaluationScore}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="search-input">
              <input placeholder="" onChange={handleEvaluation} />
              <img
                src="/image/send.png"
                onClick={() => {
                  registerEvaluation();
                }}
              />
            </div>
          </S.EmptyReviewLayout>
        ) : (
          <S.ReviewContainer>
            <div className="review-box">
              <p className="title">&#127969; 리뷰</p>
              <p className="title">평균 평점: {score}</p>
              <div className="review-body">
                {reviewList.map((review, _index) => {
                  if (typeof review !== 'string')
                    return (
                      <S.CommentBox id={review.id}>
                        <div className="profile-section">
                          <div className="profile">
                            <img
                              src="/image/react.svg"
                              alt="icons"
                              className="icon"
                            />
                            <img
                              src="/image/rank-icons/master.png"
                              alt="tier"
                              className="tier"
                            />
                            <p className="name">{review.evaluatorName}</p>
                            <p className="name">
                              {'평가 점수: ' + review.score}
                            </p>
                          </div>
                          <p className="time">{review.localDateTime}</p>
                        </div>
                        <div className="content-section">
                          <p className="content">{review.evaluation}</p>
                        </div>
                      </S.CommentBox>
                    );
                })}
              </div>
            </div>

            <select onChange={handleScore} value={evaluationScore}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="search-input">
              <input placeholder="" onChange={handleEvaluation} />
              <img src="/image/send.png" onClick={() => registerEvaluation()} />
            </div>
          </S.ReviewContainer>
        )
      ) : (
        <LoadingComponent white={false} />
      )}
    </S.TabReviewLayout>
  );
};

export default TabReviewComponent;
