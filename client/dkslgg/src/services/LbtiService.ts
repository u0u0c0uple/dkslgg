// Axios
import { common, auth } from './api';

const getQuestionList = async () => {
  try {
    const response = await common.get('/lbti/question');
    if (response.status != 200) new Error('서버 오류');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getLbti = async (data: any[], hasToken: boolean) => {
  try {
    if (hasToken) {
      const response = await auth.post('/lbti', JSON.stringify(data));
      if (response.status != 200) new Error('서버 오류');
      return response.data;
    } else {
      const response = await common.post('/lbti', JSON.stringify(data));
      if (response.status != 200) new Error('서버 오류');
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getQuestionList, getLbti };
