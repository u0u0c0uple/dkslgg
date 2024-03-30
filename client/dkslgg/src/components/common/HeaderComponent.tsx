// React
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation, To } from 'react-router-dom';
// Styled
import * as S from '@/styles/common/header.style';
// Service
import { signout } from '../../services/UserService';
// Jotai
import { useAuth } from '../../jotai/auth';
// Swal
import Swal from 'sweetalert2';
// Type
import { IUserToken } from '@/types/service/types';

const HeaderComponent = () => {
  const auth = useAuth();
  const search = useRef<HTMLInputElement | null>(null);
  const url = useLocation();
  const navigate = useNavigate();
  const token = useMemo(() => (auth ? auth : null), [auth]);
  const [user, setUser] = useState<IUserToken | null>(null);

  useEffect(() => {
    setUser(token);
  }, [token]);

  const setNavigate = (url: To) => {
    navigate(url);
  };

  const onSearch = (name: string | null) => {
    if (!name) {
      Swal.fire({
        title: 'Error',
        text: '검색어가 입력되지 않았습니다!',
        icon: 'error',
        confirmButtonColor: 'var(--maincolor-depth1)',
      });
      return;
    } else if (name.includes('/')) {
      Swal.fire({
        title: 'Error',
        text: '잘못된 검색어입니다!',
        icon: 'error',
        confirmButtonColor: 'var(--maincolor-depth1)',
      });
      return;
    }

    navigate(`/record/${name}`);
  };

  const logout = async () => {
    const data = await signout();

    if (data === undefined) {
      Swal.fire({
        title: '로그아웃',
        text: '로그아웃 실패',
        icon: 'error',
        iconColor: '#b20000',
        confirmButtonColor: '#6E8387',
        confirmButtonText: '확인',
      }).then((res) => {
        if (res.isConfirmed) {
          location.reload();
        }
      });
      return;
    }

    if (data.status == 200) {
      Swal.fire({
        title: '로그아웃',
        text: '로그아웃 완료',
        icon: 'success',
        iconColor: '#6E8387',
        confirmButtonColor: '#6E8387',
        confirmButtonText: '확인',
      }).then((res) => {
        if (res.isConfirmed) {
          console.log('Success, Logout!');
          navigate('/');
          location.reload();
        }
      });
    }
  };

  return (
    <S.HeaderLayout>
      <div className="logoBox">
        <a href="/" rel="noreferrer">
          <img src="/image/dkslhead.svg" className="logo" alt="Dksl logo" />
        </a>
      </div>
      <S.MenuContainer>
        <a href="/group/main" rel="noreferrer">
          소속
        </a>
        {url.pathname == '/' ? (
          <div className="search-input"></div>
        ) : (
          <div className="search-input">
            <input placeholder="소환사 전적 검색하기" ref={search} />
            <img
              src="/image/search.svg"
              onClick={() =>
                onSearch(search && search.current ? search.current.value : null)
              }
            />
          </div>
        )}
      </S.MenuContainer>
      {!user ? (
        <S.LogInConatiner>
          <button onClick={() => setNavigate('/user/signin')}>로그인</button>
        </S.LogInConatiner>
      ) : (
        <S.LogoutContainer>
          <div className="profile">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${user.profileIconId}.png`}
              alt="profile"
              className="image"
            />
            <p className="name">{auth.name}</p>
            <button onClick={logout}>로그아웃</button>
          </div>
        </S.LogoutContainer>
      )}
    </S.HeaderLayout>
  );
};

export default HeaderComponent;
