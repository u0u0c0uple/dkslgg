// React
import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  if (error == undefined) {
    return <div>알 수 없는 오류 발생</div>;
  }
  return (
    <div>
      {error.message}
      <img src={`https://http.cat/${error.status}`} alt="Error Image" />
      <button onClick={resetErrorBoundary}>돌아가기</button>
    </div>
  );
};

export default ErrorComponent;
