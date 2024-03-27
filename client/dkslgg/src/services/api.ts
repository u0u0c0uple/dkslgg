// Axios
import Axios from 'axios';
// Swal
import Swal from 'sweetalert2';
/// Service
import { reAccessToken } from './UserService';

const BASE_URL = import.meta.env.VITE_SPRING_API_URL;
const RECORD_URL = import.meta.env.VITE_FAST_API_URL;

const common = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const auth = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const record = Axios.create({
  baseURL: RECORD_URL,
});

auth.interceptors.request.use(
  async function (config) {
    const access = sessionStorage.getItem('accessToken');
    const refresh = localStorage.getItem('refreshToken');
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    } else {
      if (refresh) {
        const response = await reAccessToken(refresh);
        if (response != undefined && response.status == 200) {
          sessionStorage.setItem('accessToken', response.data);
          config.headers.Authorization = `Bearer ${response.data}`;
        } else {
          Swal.fire('이런!', '재로그인이 필요합니다', 'warning');
        }
      } else {
        Swal.fire('이런!', '로그인이 필요합니다', 'info');
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { auth, common, record };
