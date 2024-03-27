// Styled
import * as S from '@/styles/record/body.style';
// Component
import TabMainComponent from './tabContent/TabMainComponent';
import TabAnalyzeComponent from './tabContent/TabAnalyzeComponent';
import TabGroupComponent from './tabContent/TabGroupComponent';
import TabReviewComponent from './tabContent/TabReviewComponent';
// type
import { RecordBodyProps } from '@/types/component/record.types';

const RecordBodyComponent = (props: RecordBodyProps) => {
  return (
    <S.RecordLayout>
      <S.TabLayout>
        <div className="tab">
          <div className="tab-title">
            <S.TabItem
              $istab={props.tab == 0 ? 1 : 0}
              onClick={() => props.setTab(0)}
            >
              전적
            </S.TabItem>
            <S.TabItem
              $istab={props.tab == 1 ? 1 : 0}
              onClick={() => props.setTab(1)}
            >
              분석
            </S.TabItem>
            <S.TabItem
              $istab={props.tab == 2 ? 1 : 0}
              onClick={() => props.setTab(2)}
            >
              소속
            </S.TabItem>
            <S.TabItem
              $istab={props.tab == 3 ? 1 : 0}
              onClick={() => props.setTab(3)}
            >
              리뷰
            </S.TabItem>
          </div>
        </div>
        <div className="tab-body">
          {props.tab == 0 && (
            <TabMainComponent data={props.recorddata} piedata={props.piedata} />
          )}
          {props.tab == 1 && (
            <TabAnalyzeComponent fetchData={props.fetchChampData} />
          )}
          {props.tab == 2 && (
            <TabGroupComponent
              leave={props.leaveTeam}
              image={props.getByteToImage}
            />
          )}
          {props.tab == 3 && (
            <TabReviewComponent evaluateeName={props.searchSummonerName} />
          )}
        </div>
      </S.TabLayout>
    </S.RecordLayout>
  );
};

export default RecordBodyComponent;
