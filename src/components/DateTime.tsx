import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { Moment } from 'moment';

interface RWDatePickerProps {
  name: string;
  value: string | null;
  label?: string;
  error?: string;
  touched?: boolean;
  showDate?: boolean;
  showTime?: boolean;
  format?: string;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  disableFeature?:boolean,
  views?: Array<'year' | 'month' | 'day' | 'hours' | 'minutes' | 'seconds'>;
  handleValueChange: (name: string, value: string | null) => void;
}

const RWDatePicker: React.FC<RWDatePickerProps> = ({
  name,
  value,
  label,
  error,
  touched,
  showDate = true,
  showTime = true,
  format,
  disabled = false,
  views = ['year', 'month', 'day'],
  disableFeature=false,
  handleValueChange,
}) => {
  const handleChange = (date: Moment | null) => {
    if (!date) {
      handleValueChange(name, null);
      return;
    }

    const formattedDate = showTime
      ? date.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
      : date.format(moment.HTML5_FMT.DATE);

    handleValueChange(name, formattedDate);
  };

  const displayFormat =
    format ||
    (showDate && showTime
      ? 'DD/MM/yyyy hh:mm A'
      : showDate
      ? 'DD/MM/yyyy'
      : 'hh:mm A');

  return (
    <Box>
      {label && (
        <label htmlFor={name} style={{ marginBottom: '8px', display: 'block' }}>
          {label}
        </label>
      )}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          value={value ? moment(value, moment.HTML5_FMT.DATETIME_LOCAL_SECONDS) : null}
          onChange={handleChange}
          views={views}
          disabled={disabled}
        //  defaultValue={new Date()}
        disableFuture={disableFeature}
        format={displayFormat}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default RWDatePicker;
