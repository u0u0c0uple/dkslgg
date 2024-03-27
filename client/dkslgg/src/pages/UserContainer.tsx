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
      navigate('/');
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

  return (
    <>
      {path == '/user/signin' ? (
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
        />
      )}
    </>
  );
};

export default UserContainer;
