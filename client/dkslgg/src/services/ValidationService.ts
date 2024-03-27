// types
import { IValidationUser } from '@/types/service/types';

const emailVaildationCheck = (email: string) => {
  // email Checking
  const regexEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (email.length == 0 || !regexEmail.test(email)) {
    return false;
  }
  return true;
};

const pwValidationCheck = (password: string) => {
  // pw Checking
  const regexPw = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
  );

  if (!regexPw.test(password)) {
    return false;
  }
  return true;
};

const pwEqualValidationCheck = (pw: string, pwCheck: string) => {
  // pw Checking
  if (pwCheck.length == 0 || pwCheck.length == 0 || pw != pwCheck) {
    return false;
  }
  return true;
};

const nameValidationCheck = (name: string) => {
  // name Checking
  if (name.length == 0) {
    return false;
  }
  return true;
};

const idValidationCheck = (clientId: string) => {
  // ID Checking
  const regexId = new RegExp(/^[0-9a-zA-Z_]{3,20}$/);

  if (!regexId.test(clientId)) {
    return false;
  }
  return true;
};

const phoneValidationCheck = (phone: string) => {
  // phoneNumber formatting & Checking
  const numArr = phone.split('');
  const regexPhone = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);

  if (
    numArr[0] != '0' ||
    numArr[1] != '1' ||
    numArr.length != 11 ||
    regexPhone.test(phone)
  ) {
    return false;
  }
  return true;
};

const userValidationCheck = (user: IValidationUser) => {
  // name Checking
  const name = user.name;

  if (name.length == 0) {
    return '리그오브레전드 소환사명을 입력해주세요.';
  }

  // ID Checking
  const id = user.clientId;
  const regexId = new RegExp(/^[0-9a-zA-Z_]{3,20}$/);

  if (!regexId.test(id)) {
    return '아이디는 영어 및 숫자를 사용해 20자 이하로 설정해주세요.';
  }

  // pw Checking
  const pw = user.password;
  const pwCheck = user.passwordCheck;
  const regexPw = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
  );

  if (pw != pwCheck || pw.length == 0) {
    return '비밀번호가 일치하지 않습니다.';
  }
  if (!regexPw.test(pw)) {
    return '영어, 숫자, 특수문자를 조합해 8자 이상 설정해주세요.';
  }

  // phoneNumber formatting & Checking
  const phone = user.phone;
  const numArr = phone.split('');
  const regexPhone = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);

  if (
    numArr[0] != '0' ||
    numArr[1] != '1' ||
    numArr.length != 11 ||
    regexPhone.test(phone)
  ) {
    return '잘못된 전화번호 형식입니다.';
  }

  // email Checking
  const regexEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const email = user.email;

  if (email.length == 0 || !regexEmail.test(email)) {
    return '이메일 형식이 올바르지 않습니다.';
  }

  return 'SUCCESS';
};

export {
  userValidationCheck,
  pwValidationCheck,
  emailVaildationCheck,
  pwEqualValidationCheck,
  idValidationCheck,
  phoneValidationCheck,
  nameValidationCheck,
};
