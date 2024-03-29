// React
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Component
import SigninComponent from '../components/user/SigninComponent';
import SignupComponent from '../components/user/SignupComponent';
// Service
import { register } from '../services/UserService';
import { signIn } from '../services/UserService';
import { userValidationCheck } from '../services/ValidationService';
// Sweetalert
import Swal from 'sweetalert2';
// Jotai
import { useAuth, useUpdateAuth } from '../jotai/auth';

const UserContainer = () => {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({
    clientId: '',
    password: '',
  });
  const [signup, setSignup] = useState({
    clientId: '',
    password: '',
    name: '',
    passwordCheck: '',
    phone: '',
    email: '',
  });

  const [path, setPath] = useState<string | null>(null);
  const url = useLocation();

  const auth = useAuth();
  const updateAuth = useUpdateAuth();

  const onSignup = useCallback(async () => {
    const validation = userValidationCheck(signup);
    if (validation != 'SUCCESS') {
      Swal.fire({
        title: '알림',
        text: validation,
        icon: 'warning',
        iconColor: 'var(--maincolor-depth1)',
        confirmButtonColor: 'var(--maincolor-depth1)',
      });
      return;
    }
    const data = await register({
      clientId: signup.clientId,
      password: signup.password,
      name: signup.name,
      phone: signup.phone,
      email: signup.email,
    });
    if (data != undefined && data.status == 200) {
      Swal.fire({
        title: '알림',
        text: '회원가입에 성공하셨습니다.',
        icon: 'success',
        iconColor: 'var(--maincolor-depth1)',
        confirmButtonColor: 'var(--maincolor-depth1)',
      });
      navigate('/user/signin');
    }
  }, [navigate, signup]);

  const onSignin = useCallback(async () => {
    const data = await signIn(signin);
    if (data != undefined && data.status == 200) {
      await updateAuth();
      Swal.fire({
        title: '알림',
        text: '로그인에 성공하셨습니다.',
        icon: 'success',
        iconColor: 'var(--maincolor-depth1)',
        confirmButtonColor: 'var(--maincolor-depth1)',
      });
      navigate('/');
    }
  }, [navigate, signin, updateAuth]);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
    if (path == null) {
      setPath(url.pathname);
    }
    setPath((prevPath) => {
      if (prevPath === url.pathname) {
        return prevPath;
      }
      return url.pathname;
    });
  }, [auth, url, path, navigate]);

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
    <>
      {path === '/user/signin' ? (
        // 로그인 페이지
        <SigninComponent
          getter={signin}
          setter={setSignin}
          onSignIn={onSignin}
        />
      ) : (
        // 회원가입 페이지
        <SignupComponent
          getter={signup}
          setter={setSignup}
          onSignup={onSignup}
          onInfo={onInfo}
        />
      )}
    </>
  );
};

export default UserContainer;
