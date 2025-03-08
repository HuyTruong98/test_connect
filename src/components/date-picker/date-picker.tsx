import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

export function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <DatePicker
      value={selectedDate}
      onChange={(newValue) => setSelectedDate(newValue)}
      format='YYYY/MM/DD'
      slots={{
        openPickerIcon: CalendarMonthOutlinedIcon
      }}
      sx={{
        '& .MuiInputBase-root': {
          height: '40px'
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px'
        },
        '& .MuiSvgIcon-root': {
          color: '#000'
        }
      }}
    />
  );
}
