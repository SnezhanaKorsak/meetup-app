import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

import { Container } from './styled';
import { CalendarProps } from './types';

const Calendar: React.FC<CalendarProps> = ({ date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container>
        <StaticDatePicker
          displayStaticWrapperAs='desktop'
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Container>
    </LocalizationProvider>
  );
};

export default Calendar;
