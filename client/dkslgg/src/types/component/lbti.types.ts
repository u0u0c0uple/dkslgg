// 추후 API 명세 작성 후 타입 지정 요망
export type QuestionListType = {
  id: string;
  paragraph: string;
};

export interface LbtiTestProps {
  index: number;
  questionList: any[] | null;
  selectList: any[];
  setIndex: (args: number) => void;
  fetchLbtiData: () => void;
  setSelectList: (args: any[]) => void;
}

export interface LbtiResultProps {
  lbti: any | null;
}
