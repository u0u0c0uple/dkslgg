// Styled
import * as S from '@/styles/group/main.style';
// React
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// Component
import LoadingComponent from '../common/LoadingComponent';
import { GroupMainProps } from '@/types/component/group.types';

const GroupMainComponent: React.FC<GroupMainProps> = ({
  groupList,
  createGroup,
  onSearch,
  getByteToImage,
}) => {
  const search = useRef<HTMLInputElement | null>(null);

  return (
    <S.GroupMainLayout>
      <S.MainContainer>
        <div className="create-btn-box">
          <p className="title">
            소속에 가입하여 <br /> 소환사들과의 순위를 비교해 보세요.
          </p>
          <a className="create-btn" onClick={createGroup}>
            소속 만들기
          </a>
        </div>
        <div className="current-group">
          <p className="title">&#127969; 최근 소환사들이 가입한 소속</p>
          <div className="profile-box">
            {groupList ? (
              groupList.recentTeamList.length > 0 ? (
                groupList.recentTeamList.map((e, i) => (
                  <div className="profile" key={`profile_${i}`}>
                    <S.GroupProfile>
                      <div className="image">
                        <img src={getByteToImage(e.img)} alt="profile_img" />
                      </div>
                      <div className="description">
                        <p className="name">
                          <Link to={`/group/detail?name=${e.name}`}>
                            {e.name}
                          </Link>
                        </p>
                        <p className="personnel">
                          <b>티어</b> {e.avgTier.name}
                        </p>
                      </div>
                    </S.GroupProfile>
                  </div>
                ))
              ) : (
                <p>최근 소환사가 가입한 소속에 대한 정보가 없습니다..</p>
              )
            ) : (
              <LoadingComponent white={false} />
            )}
          </div>
        </div>
        <div className="search-box">
          <div className="search-input">
            <input placeholder="소속명 입력하기" ref={search} />
            <img
              src="/image/search.svg"
              onClick={() =>
                onSearch(search && search.current ? search.current.value : null)
              }
            />
          </div>
          <div className="result-box">
            <p className="title">&#127969; 검색 소속</p>
            <div className="result-body">
              {groupList ? (
                groupList.teamList.map((e, i) => (
                  <div className="result-row" key={`result-row_${i}`}>
                    <div className="image-area">
                      <img src={getByteToImage(e.img)} alt="group-img" />
                    </div>
                    <div className="name-area">
                      <Link to={`/group/detail?name=${e.name}`}>{e.name}</Link>
                    </div>
                    <div className="desc-area">
                      <p>&#127775;{` ${e.description}`}</p>
                    </div>
                  </div>
                ))
              ) : (
                <LoadingComponent white={false} />
              )}
            </div>
          </div>
        </div>
      </S.MainContainer>
    </S.GroupMainLayout>
  );
};

export default GroupMainComponent;
