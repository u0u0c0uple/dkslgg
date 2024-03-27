import { IFormatRecordData, IPieData } from '../record.types';

export interface ITabMainComponentProps {
  data: IFormatRecordData | null;
  piedata: IPieData[];
}
