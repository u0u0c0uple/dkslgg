// User API (Axios)
import axios from 'axios';
import { auth, common } from './api';
// Swal
import Swal from 'sweetalert2';
// types
import { ISigninUser, ISignupUser } from '@/types/service/types';

// 회원가입 API
const register = async (data: ISignupUser) => {
  try {
    const response = await common.post(
      '/member/register',
      JSON.stringify(data)
    );

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

// 로그인 API
const signIn = async (data: ISigninUser) => {
  try {
    const response = await common.post('/member/login', JSON.stringify(data));

    if (response.status == 200) {
      sessionStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

// 로그아웃 API
const signout = async () => {
  try {
    const response = await auth.post('/member/logout');

    if (response.data) {
      sessionStorage.clear();
      localStorage.clear();
    }

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

// 현재 로그인 된 유저 정보 API
const getMember = async () => {
  try {
    const response = await auth.get('/member');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response);
    } else {
      console.error(error);
    }
    sessionStorage.removeItem('accessToken');
  }
};

// Access 만료 시 재요청 토큰
const reAccessToken = async (refreshToken: string) => {
  try {
    const response = await common.get('/member/reissue', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    if (response.status != 200) throw new Error('토큰 재발급 실패');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response);
    } else {
      console.error(error);
    }
    localStorage.removeItem('refreshToken');
  }
};

export { register, signIn, signout, getMember, reAccessToken };
