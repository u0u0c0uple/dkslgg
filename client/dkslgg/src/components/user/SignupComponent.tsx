// React
import { useMemo, useState, useEffect, useRef } from 'react';
// Styled
import * as S from '@/styles/user/signup.style';
// Swal
import Swal from 'sweetalert2';
// Validation
import {
  emailValidationCheck,
  idValidationCheck,
  nameValidationCheck,
  phoneValidationCheck,
  pwEqualValidationCheck,
  pwValidationCheck,
} from '../../services/ValidationService';

const SignupComponent: React.FC<{
  getter: {
    clientId: string;
    password: string;
    name: string;
    passwordCheck: string;
    phone: string;
    email: string;
  };
  setter: (args: {
    clientId: string;
    password: string;
    name: string;
    passwordCheck: string;
    phone: string;
    email: string;
  }) => void;
  onSignup: () => void;
}> = ({ getter, setter, onSignup }) => {
  const num = useMemo(() => Math.floor(Math.random() * 5) + 1, []);
  const [checked, setChecked] = useState({
    name: false,
    clientId: false,
    password: false,
    passwordCheck: false,
    phone: false,
    email: false,
  });
  const infoElement = useRef<HTMLImageElement>(null);
  // const debounce = useDebounce();

  useEffect(() => {
    const infoLabel = document.getElementById('info-label');

    if (infoElement && infoElement.current && infoLabel) {
      infoElement.current.addEventListener('mouseover', () => {
        infoLabel.style.opacity = '1';
      });
      infoElement.current.addEventListener('mouseleave', () => {
        infoLabel.style.opacity = '0';
      });
    }
  }, []);
  console.log('HI');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setter({
      ...getter,
      [name]: value,
    });
    console.log(checked);

    let result = false;
    let pwCheck = checked.passwordCheck;
    if (name == 'name') result = nameValidationCheck(value);
    else if (name == 'clientId') result = idValidationCheck(value);
    else if (name == 'password') {
      result = pwValidationCheck(value);
      if (pwEqualValidationCheck(value, getter.passwordCheck)) pwCheck = true;
      else pwCheck = false;
    } else if (name == 'phone') {
      result = phoneValidationCheck(value);
    } else if (name == 'email') {
      result = emailValidationCheck(value);
    } else {
      result = pwEqualValidationCheck(getter.password, value);
    }

    if (name == 'passwordCheck') {
      setChecked({
        ...checked,
        ['passwordCheck']: result,
      });
    } else {
      setChecked({
        ...checked,
        [name]: result,
        ['passwordCheck']: pwCheck,
      });
    }
  };

  const onInfo = async () => {
    const steps = ['1', '2', '3', '4', '5'];
    const Queue = Swal.mixin({
      progressSteps: steps,
      confirmButtonText: '다음',
      color: 'var(--maincolor-depth1)',
      iconColor: 'var(--maincolor-depth1)',
      confirmButtonColor: 'var(--maincolor-depth1)',
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
    });

    await Queue.fire({
      title: '닉네임',
      text: '리그오브레전드 소환사명을 입력해주세요.',
      currentProgressStep: 0,
      showClass: { backdrop: 'swal2-noanimation' },
    });
    await Queue.fire({
      title: '아이디',
      text: '영어, 숫자를 조합해 20자 이하로 설정해주세요.',
      currentProgressStep: 1,
    });
    await Queue.fire({
      title: '비밀번호',
      text: '영어, 숫자, 특수문자를 조합해 8자 이상, 20자 이하로 설정해주세요.',
      currentProgressStep: 2,
    });
    await Queue.fire({
      title: '전화번호',
      text: '"-"를 뺀 숫자만 입력해주세요',
      currentProgressStep: 3,
    });
    await Queue.fire({
      title: '이메일',
      text: '본인의 이메일을 양식에 맞게 입력해주세요.',
      currentProgressStep: 4,
      confirmButtonText: '확인',
      confirmButtonColor: 'var(--maincolor-depth1)',
      showClass: { backdrop: 'swal2-noanimation' },
    });
  };

  return (
    <S.SignupLayout $bgnum={num}>
      <S.SignupContainer>
        <div className="box">
          <img className="logo" src="/image/dkslhead.svg" />
          <h1> 회원가입 </h1>
          <img
            id="info"
            className="info"
            src="/image/info.svg"
            ref={infoElement}
            onClick={onInfo}
          />
          <p id="info-label" className="info-label">
            클릭하시면 입력 양식 안내가 나옵니다.
          </p>
        </div>
        <S.SignupInputBox>
          <input
            type="text"
            name="name"
            onChange={(e) => onChange(e)}
            placeholder="리그오브레전드 닉네임을 입력하세요."
            style={{
              borderBottom: checked.name ? '2px solid green' : '2px solid red',
            }}
          />
          <input
            type="text"
            name="clientId"
            onChange={(e) => onChange(e)}
            placeholder="아이디를 입력하세요."
            style={{
              borderBottom: checked.clientId
                ? '2px solid green'
                : '2px solid red',
            }}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => onChange(e)}
            placeholder="비밀번호를 입력하세요."
            style={{
              borderBottom: checked.password
                ? '2px solid green'
                : '2px solid red',
            }}
          />
          <input
            type="password"
            name="passwordCheck"
            onChange={(e) => onChange(e)}
            placeholder="비밀번호를 다시 한번 입력하세요."
            style={{
              borderBottom: checked.passwordCheck
                ? '2px solid green'
                : '2px solid red',
            }}
          />
          <input
            type="text"
            name="phone"
            onChange={(e) => onChange(e)}
            placeholder="전화번호를 입력하세요."
            style={{
              borderBottom: checked.phone ? '2px solid green' : '2px solid red',
            }}
          />
          <input
            type="text"
            name="email"
            onChange={(e) => onChange(e)}
            placeholder="이메일을 입력하세요."
            style={{
              borderBottom: checked.email ? '2px solid green' : '2px solid red',
            }}
          />
          <S.SignupBtnBox>
            <button onClick={onSignup}>회원가입</button>
          </S.SignupBtnBox>
        </S.SignupInputBox>
      </S.SignupContainer>
    </S.SignupLayout>
  );
};

export default SignupComponent;
