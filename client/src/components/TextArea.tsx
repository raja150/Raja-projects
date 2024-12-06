import React from 'react';
import { TextField, Box } from '@mui/material';

interface TextAreaInputProps {
  label: string; // Label for the textarea
  name: string; // Name for the textarea field
  value: string; // Current value of the textarea
  handleValueChange: (name: string, value: string) => void; // Callback for value change
  touched?: boolean; // Whether the field has been touched
  error?: string; // Validation error message
  disabled?: boolean; // Whether the textarea is disabled
  max?: number; // Maximum character length
  className?: string; // Additional custom CSS classes
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  name,
  value,
  handleValueChange,
  touched,
  error,
  disabled = false,
  max,
  className,
}) => {
  return (
    <Box className={className} sx={{ marginBottom: 2 }}>
      {label && (
        <label htmlFor={name} style={{ marginBottom: 8, display: 'block' }}>
          {label}
        </label>
      )}
      <TextField
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleValueChange(name, e.target.value)}
        multiline
        rows={4} // Default number of rows for the textarea
        variant="outlined"
        fullWidth
        disabled={disabled}
        inputProps={{ maxLength: max }} // Enforce max character length
        error={!!error && touched} // Highlight field if there's an error
        helperText={touched && error ? error : ''} // Display validation error message
      />
    </Box>
  );
};

export default TextAreaInput;
