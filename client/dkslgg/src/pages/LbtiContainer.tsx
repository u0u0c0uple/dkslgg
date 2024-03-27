// React
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Component
import LoadingComponent from '../components/common/LoadingComponent';
import HeaderComponent from '../components/common/HeaderComponent';
import LbtiMainComponent from '../components/lbti/LbtiMainComponent';
import LbtiTestComponent from '../components/lbti/LbtiTestComponent';
import LbtiResultComponent from '../components/lbti/LbtiResultComponent';
// Service
import { getQuestionList, getLbti } from '../services/LbtiService';
// Jotai
import { useAuth } from '../jotai/auth';

const LbtiContainer = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [path, setPath] = useState<string | null>(null);
  const url = useLocation();
  const [index, setIndex] = useState(0);
  const [questionList, setQuestionList] = useState(null);
  const [lbti, setLbti] = useState(null);
  const [selectList, setSelectList] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllQuestionData = async () => {
      const data = await getQuestionList();
      if (data)
        setQuestionList((prevList) => {
          if (prevList === data) {
            return prevList;
          }
          return data;
        });
    };

    setPath(url.pathname);
    if (url.pathname == '/lbti/test' && !questionList) {
      fetchAllQuestionData();
    }
  }, [url, questionList]);

  useEffect(() => {
    if (lbti) {
      navigate('/lbti/result');
    }
  }, [navigate, lbti]);

  const fetchLbtiData = async () => {
    setLbti(await getLbti(selectList, auth ? true : false));
  };

  return path == '/lbti/test' ? (
    <>
      <HeaderComponent />
      <LbtiTestComponent
        questionList={questionList}
        index={index}
        setIndex={setIndex}
        fetchLbtiData={fetchLbtiData}
        selectList={selectList}
        setSelectList={setSelectList}
      />
    </>
  ) : '/lbti/result' && lbti ? (
    <>
      <HeaderComponent />
      <LbtiResultComponent lbti={lbti} />
    </>
  ) : '/lbti/main' ? (
    <>
      <HeaderComponent />
      <LbtiMainComponent />
    </>
  ) : (
    <LoadingComponent white={false} />
  );
};

export default LbtiContainer;
