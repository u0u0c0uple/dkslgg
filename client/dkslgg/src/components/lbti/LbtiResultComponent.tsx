// React
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Style
import * as S from '@/styles/lbti/result.style';
// Type
import { LbtiResultProps } from '@/types/component/lbti.types';

const LbtiResultComponent: React.FC<LbtiResultProps> = ({ lbti }) => {
  const navigate = useNavigate();
  const lbtiStr = lbti
    ? lbti.firstTendency.initial +
      lbti.secondTendency.initial +
      lbti.thirdTendency.initial +
      lbti.fourthTendency.initial +
      ' : ' +
      lbti.name
    : null;

  return (
    <S.LbtiResultLayout>
      <S.ResultContainer>
        <div className="result-box">
          <div className="result-content">당신의 결과는...</div>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              lbti ? lbti.championName : 'Aatrox'
            }_0.jpg`}
          />
          <div className="result-title">💡 {lbtiStr}</div>
          <div className="tag-box">
            <S.TagItem $bg="red">
              <div className="text">
                {lbti ? lbti.firstTendency.name : null}
              </div>
            </S.TagItem>
            <S.TagItem $bg="green">
              <div className="text">
                {lbti ? lbti.secondTendency.name : null}
              </div>
            </S.TagItem>
            <S.TagItem $bg="violet">
              <div className="text">
                {lbti ? lbti.thirdTendency.name : null}
              </div>
            </S.TagItem>
            <S.TagItem $bg="var(--maincolor-depth1)">
              <div className="text">
                {lbti ? lbti.fourthTendency.name : null}
              </div>
            </S.TagItem>
          </div>
          <div className="description-content">
            {lbti ? lbti.description : null}
          </div>
          <button
            onClick={() => {
              location.reload();
            }}
          >
            다시 테스트하기
          </button>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            메인으로
          </button>
        </div>
      </S.ResultContainer>
    </S.LbtiResultLayout>
  );
};

export default LbtiResultComponent;
