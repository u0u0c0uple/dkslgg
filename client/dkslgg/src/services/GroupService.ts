// Axios
import axios from 'axios';
import { common, auth } from './api';
// Swal
import Swal from 'sweetalert2';

const getGroupList = async () => {
  try {
    const response = await common.get('/team');
    if (response.status != 200) new Error('서버 오류');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const setNewGroup = async (formData: FormData) => {
  try {
    const response = await auth.post('/team/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status != 200) return null;

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

const searchGroup = async (word: string) => {
  try {
    const response = await common.get(`/team/search?word=${word}`);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

const groupDetail = async (name: string, hasToken: boolean) => {
  try {
    if (hasToken) {
      const response = await auth.get(`/team/${name}`);
      return response;
    } else {
      const response = await common.get(`/team/${name}`);
      return response;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

const joinGroup = async (data: string) => {
  try {
    const response = await auth.post('/team/join', JSON.stringify(data));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

const groupLeave = async (name: string) => {
  try {
    const response = await auth.post('/team/leave', JSON.stringify(name));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire('Error', error.response.data, 'error');
    } else {
      console.error(error);
    }
  }
};

const getSummonerGroup = async (name: string) => {
  try {
    const response = await common.get(`/summoner/team/${name}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response.data);
    } else {
      console.error(error);
    }
    return 'NoData';
  }
};

export {
  getGroupList,
  setNewGroup,
  searchGroup,
  groupDetail,
  groupLeave,
  getSummonerGroup,
  joinGroup,
};
