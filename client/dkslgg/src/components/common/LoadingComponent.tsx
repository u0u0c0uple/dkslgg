// React
import React from 'react';
// Styled
import * as S from '@/styles/common/loading.style';

const LoadingComponent: React.FC<{ white: boolean }> = ({ white }) => {
  return (
    <S.LoadingLayout $white={white}>
      <span className="loader" />
    </S.LoadingLayout>
  );
};

export default LoadingComponent;
