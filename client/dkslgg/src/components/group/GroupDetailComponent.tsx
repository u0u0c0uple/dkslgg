// Styled
import * as S from '@/styles/group/detail.style';
// Type
import { GroupDetailProps } from '@/types/component/group.types';

const GroupDetailComponent: React.FC<GroupDetailProps> = ({
  detailList,
  getByteToImage,
  auth,
  onJoinGroup,
}) => {
  return (
    <S.DetailLayout>
      <S.DetailContainer>
        <div className="group-profile">
          <p className="title">&#127969; 소속</p>
          <div className="card-body">
            <div className="group-img">
              <img
                src={
                  detailList.img
                    ? `${getByteToImage(detailList.img)}`
                    : '/image/noimage.png'
                }
                alt="group-profile"
                className="image"
              />
            </div>
            <div className="group-desc">
              <p className="group-title">{detailList.name}</p>
              <div className="info">
                <p className="group-personnel">
                  <b>인원</b>{' '}
                  {detailList.currentSummoner
                    ? detailList.summonerResponse.length + 1
                    : detailList.summonerResponse.length}
                  명
                </p>
                <p className="group-tier">
                  <b>평균티어</b> {detailList.avgTier.name}
                </p>
                <p className="group-leader">
                  <b>소속장</b> {detailList.chairman}
                </p>
              </div>
              <p className="group-content">
                <b>
                  &#127775; 소속 소개 <br />
                </b>
                {detailList.description}
              </p>
            </div>
          </div>
        </div>
        <div className="detail-body">
          <div className="left-box">
            {auth ? (
              detailList.joined ? (
                <button className="group-join" disabled>
                  이미 가입되셨습니다.
                </button>
              ) : (
                <button className="group-join" onClick={onJoinGroup}>
                  이 소속에 가입하기
                </button>
              )
            ) : (
              <button className="group-join" disabled>
                로그인 후 이용해주세요.
              </button>
            )}

            <div className="average-tier">
              <p className="title">&#127941; 평균 티어</p>
              <div className="tier-body">
                <div className="img-box">
                  <img
                    src={`/image/rank-icons/${detailList.avgTier.id}.png`}
                    alt="group-tier"
                    className="image"
                  />
                </div>
                <div className="desc">
                  <p className="tier">{detailList.avgTier.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="member-rank">
              <p className="title">&#128101; 소속원 순위</p>
              <div className="radio-group">
                <input type="radio" name="rank-type" defaultChecked />
                <label>티어</label>
                <input type="radio" name="rank-type" />
                <label>레벨</label>
                <input type="radio" name="rank-type" />
                <label>플레이</label>
              </div>
              <div className="ranking-table">
                <div className="table-head">
                  <div className="table-row">
                    <p className="rank">등수</p>
                    <p className="member-name">소속원 이름</p>
                    <p className="member-tier">티어</p>
                    <p className="member-persent">상위</p>
                  </div>
                </div>
                <div className="table-body">
                  {detailList.currentSummoner && (
                    <div className="table-row current">
                      <p className="rank">{`${detailList.currentSummoner.rank}`}</p>
                      <div className="member-name">
                        <img
                          className="image"
                          src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${detailList.currentSummoner.profileIconId}.png`}
                          alt="!"
                        />
                        <p className="member-level">
                          {`${detailList.currentSummoner.level}`}레벨
                        </p>
                        {detailList.currentSummoner.name}
                      </div>
                      <p className="member-tier">
                        {detailList.currentSummoner.tier.name}
                      </p>
                      <p className="member-persent">
                        {`${detailList.currentSummoner.tier.orderNum}`}%
                      </p>
                    </div>
                  )}

                  {detailList.summonerResponse.map((e, i) => (
                    <div className="table-row" key={`member_${i}`}>
                      <p className="rank">{i + 1}</p>
                      <div className="member-name">
                        <img
                          className="image"
                          src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${e.profileIconId}.png`}
                          alt="!"
                        />
                        <p className="member-level">{`${e.level}`}레벨</p>
                        {e.name}
                      </div>
                      <p className="member-tier">{e.tier.name}</p>
                      <p className="member-persent">
                        {101 -
                          Math.floor(
                            ((i + 1) / detailList.summonerResponse.length) * 100
                          )}
                        %
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <p className="desc">
                  소속에 가입하고 모두의 순위를 확인하세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </S.DetailContainer>
    </S.DetailLayout>
  );
};

export default GroupDetailComponent;
