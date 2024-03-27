import * as S from '@/styles/lbti/main.style';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LbtiMainComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/lbti/main');
  }, [navigate]);

  return (
    <S.LbtiMainLayout>
      <S.MainContainer>
        <div className="main-box">
          <div className="main-title">나의 롤BTI는 무엇일까?</div>
          <div className="icon-box">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerFlash.png"
              alt="icon1"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerBoost.png"
              alt="icon2"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerExhaust.png"
              alt="icon3"
            />
          </div>
          <div className="main-content">
            나는 롤을 할 때 어떤 숨겨진 성격이 나올까?
          </div>
          <div className="main-content">
            내가 생각하는 나의 플레이 성향을 알아보세요.
          </div>
          <button onClick={() => navigate('/lbti/test')}>테스트 시작</button>
        </div>
      </S.MainContainer>
    </S.LbtiMainLayout>
  );
};

export default LbtiMainComponent;
