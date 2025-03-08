import { Dayjs } from 'dayjs';

export type IQueryDashBoard = {
  state: string;
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
  planType: string[];
};
