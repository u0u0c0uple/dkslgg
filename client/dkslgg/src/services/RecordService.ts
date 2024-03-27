// User API (Axios)
import Swal from 'sweetalert2';
import { record } from './api';
import { IRecordData } from '@/types/component/record.types';
import { AnalyzeData } from '@/types/component/analyze.types';

const getSearchData = async (
  word: string | null | undefined
): Promise<string | IRecordData> => {
  try {
    const postRequest = await record.post(
      `/match-histories?summoner_name=${word}`
    );
    if (postRequest.status != 200) throw new Error('POST ERROR');
    const putRequest = await record.put(
      `/match-histories?summoner_name=${word}`
    );
    if (putRequest.status != 200) throw new Error('PUT ERROR');
    const response = await record.get(`/match-histories?summoner_name=${word}`);
    if (response.status != 200) {
      return Promise.resolve('NoData');
    }
    return response.data;
  } catch (error) {
    Swal.fire({
      title: '이런!',
      text: '전적 조회 중 오류 발생!',
      icon: 'error',
    }).then((result) => {
      if (result.isConfirmed) window.location.href = '/';
    });
    return Promise.reject('NoData');
  }
};

const getAnalyzeData = async (name: string): Promise<AnalyzeData | string> => {
  try {
    const response = await record.get(`/recommend?summoner_name=${name}`);
    if (response.status == 200) {
      return response.data;
    }
    return Promise.resolve('NoData');
  } catch (error) {
    console.error(error);
    return Promise.reject('NoData');
  }
};

export { getSearchData, getAnalyzeData };
