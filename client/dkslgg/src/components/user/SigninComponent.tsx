// React
import { useMemo } from 'react';
// Styled
import * as S from '@/styles/user/signin.style';

const SigninComponent: React.FC<{
  getter: {
    clientId: string;
    password: string;
  };
  setter: (args: { clientId: string; password: string }) => void;
  onSignIn: () => void;
}> = ({ getter, setter, onSignIn }) => {
  const num = useMemo(() => Math.floor(Math.random() * 5) + 1, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setter({
      ...getter,
      [name]: value,
    });
  };

  return (
    <S.SigninLayout $bgnum={num}>
      <S.SigninContainer>
        <div className="box">
          <img className="logo" src="../image/dkslhead.svg" />
          <h1> 로그인 </h1>
        </div>
        <S.SigninInputBox>
          <input
            type="text"
            name="clientId"
            onChange={(e) => onChange(e)}
            placeholder="본인의 라이엇 아이디를 입력하세요."
          />
          <input
            type="password"
            name="password"
            onChange={(e) => onChange(e)}
            placeholder="본인의 라이엇 비밀번호를 입력하세요."
          />
          <S.SigninBtnBox>
            <a className="link" href="/user/signup">
              회원가입
            </a>
            <button onClick={onSignIn}>로그인</button>
          </S.SigninBtnBox>
        </S.SigninInputBox>
      </S.SigninContainer>
    </S.SigninLayout>
  );
};

export default SigninComponent;
