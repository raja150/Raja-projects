import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface DropdownListProps {
  label: string;
  name: string;
  control: any; // react-hook-form control
  handleValueChange: (name: string, value: any) => void;
  values: Array<{ [key: string]: any }>;
  valueField: string;
  textField: string;
  error?: string;
  touched?: boolean;
}

const DropdownList: React.FC<DropdownListProps> = ({
  label,
  name,
  control,
  handleValueChange,
  values,
  valueField,
  textField,
  error,
  touched,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={values}
          getOptionLabel={(option) => option[textField] || ''}
          isOptionEqualToValue={(option, value) => option[valueField] === value}
          onChange={(_, selectedValue) => {
            const newValue = selectedValue ? selectedValue[valueField] : '';
            field.onChange(newValue); // Update react-hook-form's state
            handleValueChange(name, newValue); // Custom handler
          }}
          value={values.find((item) => item[valueField] === field.value) || null}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              fullWidth
              error={!!error && touched}
              helperText={touched && error ? error : ''}
            />
          )}
        />
      )}
    />
  );
};

export default DropdownList;
