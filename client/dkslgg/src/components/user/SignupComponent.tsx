// React
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
// Styled
import * as S from '@/styles/user/signup.style';
// Validation
import {
  emailValidationCheck,
  idValidationCheck,
  nameValidationCheck,
  phoneValidationCheck,
  pwEqualValidationCheck,
  pwValidationCheck,
} from '../../services/ValidationService';
// hooks
import useDebounce from '@/hooks/useDebounce';
// Type
import {
  SignupComponentProps,
  SignupFields,
} from '@/types/component/user.types';

const InputFieldsForm: React.FC<{
  debouncedValues: SignupFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = React.memo(
  ({ debouncedValues, onChange }) => {
    const [checked, setChecked] = useState<{
      [key: string]: boolean;
    }>({
      name: false,
      clientId: false,
      password: false,
      passwordCheck: false,
      phone: false,
      email: false,
    });

    useEffect(() => {
      let checks = { ...checked };
      let result = false;

      Object.keys(debouncedValues).forEach((key) => {
        const value = debouncedValues[key];
        switch (key) {
          case 'name':
            result = nameValidationCheck(value);
            break;
          case 'clientId':
            result = idValidationCheck(value);
            break;
          case 'password':
            result = pwValidationCheck(value);
            checks['passwordCheck'] = pwEqualValidationCheck(
              value,
              debouncedValues.passwordCheck
            );
            break;
          case 'phone':
            result = phoneValidationCheck(value);
            break;
          case 'email':
            result = emailValidationCheck(value);
            break;
          case 'passwordCheck':
            result = pwEqualValidationCheck(debouncedValues.password, value);
            break;
          default:
            break;
        }
        checks[key] = result;
      });

      setChecked(checks);
    }, [debouncedValues]);

    return (
      <div>
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
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.debouncedValues) ===
      JSON.stringify(nextProps.debouncedValues)
    );
  }
);

const SignupComponent: React.FC<SignupComponentProps> = ({
  getter,
  setter,
  onSignup,
  onInfo,
}) => {
  const num = useMemo(() => Math.floor(Math.random() * 5) + 1, []);
  const infoElement = useRef<HTMLImageElement>(null);
  const [inputValues, setInputValues] = useState({ ...getter, type: '' });
  const debouncedValues = useDebounce<SignupFields>(inputValues, 800);

  useEffect(() => {
    setter({
      clientId: debouncedValues.clientId,
      password: debouncedValues.password,
      name: debouncedValues.name,
      passwordCheck: debouncedValues.passwordCheck,
      phone: debouncedValues.phone,
      email: debouncedValues.email,
    });
  }, [debouncedValues, setter]);

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

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setInputValues({
        ...inputValues,
        [name]: value,
        type: name,
      });
    },
    [setInputValues]
  );

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
          <InputFieldsForm
            debouncedValues={debouncedValues}
            onChange={onChange}
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
