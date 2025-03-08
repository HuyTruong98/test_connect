import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

interface CustomDatePickerProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

export function CustomDatePicker({ value, onChange, minDate, maxDate }: CustomDatePickerProps) {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      format='YYYY/MM/DD'
      minDate={minDate}
      maxDate={maxDate}
      slots={{
        openPickerIcon: CalendarMonthOutlinedIcon
      }}
    />
  );
}
