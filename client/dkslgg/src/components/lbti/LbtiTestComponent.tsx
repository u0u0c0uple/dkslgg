// Style
import * as S from '@/styles/lbti/test.style';
// Type
import { LbtiTestProps } from '@/types/component/lbti.types';

const LbtiTestComponent: React.FC<LbtiTestProps> = ({
  questionList,
  index,
  setIndex,
  fetchLbtiData,
  selectList,
  setSelectList,
}) => {
  const changeSelect = (id: string) => {
    const tmp = selectList;
    tmp[index] = id;
    setSelectList([...tmp]);
  };

  return (
    <S.LbtiTestLayout>
      <S.TestContainer>
        <div className="test-box">
          <div className="question-box">
            <div className="question">
              {questionList ? questionList[index].firstParagraph : null}
            </div>
            <div className="question">
              {questionList ? questionList[index].secondParagraph : null}
            </div>
          </div>
          <div className="radio-box">
            {questionList
              ? questionList[index].answerList.map(
                  (e: { id: string; paragraph: string }, i: number) => (
                    <div className="radio-group" key={`${index}+${i}`}>
                      <input
                        type="radio"
                        name={`${index}`}
                        defaultChecked={e.id == selectList[index]}
                        onChange={() => changeSelect(e.id)}
                      />
                      <label>{e.paragraph}</label>
                    </div>
                  )
                )
              : null}
          </div>
          <div className="btn-box">
            {0 < index ? (
              <button
                className="prev-btn"
                onClick={() => {
                  setIndex(index - 1);
                }}
              >
                이전
              </button>
            ) : (
              <div></div>
            )}
            {questionList && index < questionList.length - 1 ? (
              <button
                className="next-btn"
                disabled={!selectList[index]}
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                다음
              </button>
            ) : questionList && index == questionList.length - 1 ? (
              <button
                className="submit-btn"
                disabled={!selectList[index]}
                onClick={() => {
                  fetchLbtiData();
                }}
              >
                제출
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </S.TestContainer>
    </S.LbtiTestLayout>
  );
};

export default LbtiTestComponent;
