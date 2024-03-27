// React
import { useMemo, useEffect, useState } from 'react';
// Styled
import * as S from '@/styles/record/profile.style';
// Component
import LoadingComponent from '../common/LoadingComponent';
// Jotai
import { useGroup } from '../../jotai/group';
import { IProfileData } from '@/types/component/record.types';

const ProfileComponent: React.FC<{ data: IProfileData | null }> = ({
  data,
}) => {
  const [lbti, setLbti] = useState(null);
  const group = useGroup();
  const num = useMemo(() => Math.floor(Math.random() * 6) + 1, []);

  useEffect(() => {
    if (group && group.lbti) {
      const lbtiStr =
        group.lbti.firstTendency.initial +
        group.lbti.secondTendency.initial +
        group.lbti.thirdTendency.initial +
        group.lbti.fourthTendency.initial;
      setLbti((prevLbti) => {
        if (prevLbti == lbtiStr) {
          return prevLbti;
        }
        return lbtiStr;
      });
    }
  }, [group]);

  return (
    <S.ProfileLayout $bgnum={num}>
      {data ? (
        <S.ProfileContainer>
          <img
            className="logo"
            src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${data.profile_icon_id}.png`}
          />
          <div className="userBox">
            <div className="title">
              <h1>{data.summoner_name}</h1>
              <img
                src={`/image/rank-icons/${
                  data.tier_name ? data.tier_name.toLowerCase() : `unranked`
                }.png`}
              />
            </div>
            <p className="lbti">{lbti ? lbti : '   '}</p>
            <div className="record-update">
              <button onClick={() => location.reload()}>전적 갱신</button>
              <p className="desc">최근 업데이트 : {data.last_updated_at}</p>
            </div>
          </div>
        </S.ProfileContainer>
      ) : (
        <S.ProfileContainer>
          <LoadingComponent white={true} />
        </S.ProfileContainer>
      )}
    </S.ProfileLayout>
  );
};

export default ProfileComponent;
