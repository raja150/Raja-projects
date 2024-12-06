import { FormControl, FormHelperText, InputLabel, TextField } from '@mui/material';
import React from 'react';

interface PanNumberProps {
  dpchange?: (value: any) => void;
  handleValueChange: (name: string, value: string, additional?: any) => void;
  value: string;
  label: string;
  touched?: boolean;
  error?: string;
  className?: string;
  name: string;
  type?: string;
  valueField?: string;
  textField?: string;
  showDate?: boolean;
  showTime?: boolean;
  [key: string]: any;
}

const PanNumber: React.FC<PanNumberProps> = (props) => {
  const {
    dpchange,
    handleValueChange,
    value,
    label,
    touched,
    error,
    className,
    name,
    type = 'text',
    ...rest
  } = props;

  return (
    <FormControl fullWidth error={!!(touched && error)} className={className}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextField
        id={name}
        name={name}
        value={value}
        type={type}
        variant="outlined"
        size="small"
        onChange={(e) => handleValueChange(name, e.target.value)}
        {...rest}
      />
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default PanNumber;
