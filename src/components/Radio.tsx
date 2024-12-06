import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText, Box } from '@mui/material';

interface RadioOption {
  value: string | number; // The value for each radio button
  text: string; // The label text for each radio button
}

interface RadioProps {
  label: string;
  name: string;
  value: string | number | null; // Currently selected value
  handleValueChange: (name: string, value: any, additionalData?: { [key: string]: any }) => void;
  values: RadioOption[]; // Array of radio options
  error?: string;
  touched?: boolean;
  className?: string;
  index?: number;
}

const RadioGroupComponent: React.FC<RadioProps> = ({
  label,
  name,
  value,
  handleValueChange,
  values,
  error,
  touched,
  className,
  index,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(name, event.target.value, { index });
  };

  return (
    <Box className={className}>
      <FormControl component="fieldset" error={!!error && touched}>
        {/* Label for the group */}
        <FormLabel component="legend">{label}</FormLabel>

        {/* Radio Group */}
        <RadioGroup
          name={name}
          value={value !== null ? value.toString() : ''} // Ensure value is a string for RadioGroup
          onChange={handleChange}
          row // Display inline (optional, remove for vertical display)
        >
          {values.map((option, index) => (
            <FormControlLabel
              key={`${name}-${index}`}
              value={option.value.toString()} // Ensure the value is a string
              control={<Radio />}
              label={option.text}
            />
          ))}
        </RadioGroup>

        {/* Error message */}
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default RadioGroupComponent;
