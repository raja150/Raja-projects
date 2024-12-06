import React from 'react';
import InputMask from 'react-input-mask';
import { TextField, Box } from '@mui/material';
import classNames from 'classnames';

interface PinCodeProps {
  label: string; // Label for the input field
  name: string; // Name for the input field
  value: string; // Current value of the input
  handleValueChange: (name: string, value: string, additionalData?: Record<string, unknown>) => void; // Callback for value changes
  touched?: boolean; // Whether the field has been touched
  error?: string; // Validation error message
  className?: string; // Additional custom CSS classes
}

const PinCode: React.FC<PinCodeProps> = ({
  label,
  name,
  value,
  handleValueChange,
  touched,
  error,
  className,
}) => {
  const cssName = classNames(
    {
      'is-invalid': touched && error, // Mark as invalid if there's an error
      'is-invalid-value': value && value.length < 6, // Mark as invalid if the value length is less than 6
    },
    className
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(name, event.target.value.replace(/\D/g, '')); // Only allow numeric input
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      {label && (
        <label htmlFor={name} style={{ marginBottom: 8, display: 'block' }}>
          {label}
        </label>
      )}
      <InputMask
        mask="999 999"
        value={value}
        onChange={onChange}
      >
        {() => (
          <TextField
            id={name}
            name={name}
            fullWidth
            variant="outlined"
            size="small"
            error={!!error && touched}
            helperText={touched && error ? error : ''}
            className={cssName}
          />
        )}
      </InputMask>
    </Box>
  );
};

export default PinCode;
