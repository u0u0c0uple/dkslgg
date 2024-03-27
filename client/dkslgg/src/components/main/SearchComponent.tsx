// React
import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Styled
import * as S from '../../styles/main/search.style';
// Swal
import Swal from 'sweetalert2';

const SearchComponent = () => {
  const num = useMemo(() => Math.floor(Math.random() * 10) + 1, []);
  const navigate = useNavigate();
  const search = useRef<HTMLInputElement | null>(null);

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

  return (
    <>
      <S.SearchLayout $bgnum={num}>
        <div className="container">
          <div className="title">
            <div className="typing">나의 전적을 분석해보세요.</div>
          </div>
          <div className="box">
            <input placeholder="소환사명 입력하기" ref={search} />
            <img
              src="image/search.svg"
              onClick={() =>
                onSearch(search && search.current ? search.current.value : null)
              }
            />
          </div>
        </div>
      </S.SearchLayout>
      <S.TaggingContainer>
        <p className="title">
          &#128161; 나의 <b>롤BTI</b>는 무엇일까?
        </p>
        <button className="btn" onClick={() => navigate('/lbti/main')}>
          검사하기
        </button>
      </S.TaggingContainer>
    </>
  );
};

export default SearchComponent;
