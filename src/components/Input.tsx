import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  touched?: boolean;
  control: any;  // react-hook-form control object
  handleValueChange: (name: string, value: any) => void; // Custom handler for value change
}

const Input: React.FC<InputProps> = ({ label, name, type = 'text', error, touched, control, handleValueChange }) => {
  // Custom handle change that also triggers handleValueChange
  const handleChange = (e: any) => {
    handleValueChange(e.target.name, e.target.value); // Trigger the custom handler
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}  // Spread all the necessary props from react-hook-form
          label={label}
          type={type}
          fullWidth
          variant="outlined"
          size="small"
          error={!!error && touched}
          helperText={touched && error ? error : ''}
          onChange={(e) => {
            field.onChange(e); // Update react-hook-form state
            handleChange(e); // Call the custom handler
          }}
        />
      )}
    />
  );
};

export default Input;
