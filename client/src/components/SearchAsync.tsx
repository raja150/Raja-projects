import React, { useState } from "react";
import { Autocomplete, TextField, CircularProgress, Box, Typography } from "@mui/material";

interface Search {
  id: number;
  name: string;
}

interface SearchProps {
  name: string;
  selItem: Search | null;
  setSelItem: (item: Search | null) => void;
  handleValueChange?: (fieldName: string, value: any, additionalData?: any) => void;
  disabled?: boolean;
}

const SearchAsync: React.FC<SearchProps> = ({
  name,
  selItem,
  setSelItem,
  handleValueChange,
  disabled = false,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [options, setOptions] = useState<Search[]>([]);

  // Simulate an API call with mock data
  const handleSearch = async (query: string) => {
    if (!query) {
      // If the query is empty, reset the options
      setOptions([]);
      return;
    }

    setIsSearching(true);

    // Mock data for testing
    const mockData: Search[] = [
      { id: 1, name: "Raja" },
      { id: 2, name: "Sekhar" },
      { id: 3, name: "Golla" },
    ];

    // Filter mock data based on the query
    const filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setOptions(filteredData);
    setIsSearching(false);
  };

  // Handle change in selected item
  const handleChange = (event: any, selectedItem: Search | null) => {
    if (selectedItem) {
      setSelItem(selectedItem);
      handleValueChange?.("id", selectedItem.id, selectedItem);
    } else {
      setSelItem(null);
      handleValueChange?.("id", "", null);
    }
  };

  return (
    <Autocomplete
      id={name}
      options={options}
      getOptionLabel={(option) => option.name || ""}
      value={selItem} // Bind the selected item
      onChange={handleChange}
      onInputChange={(_, query) => {
        // Trigger search when the user types
        if (query.length >= 2) {
          handleSearch(query);
        } else {
          // Clear options if the query is too short (less than 2 characters)
          setOptions([]);
        }
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      loading={isSearching}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search with name"
          variant="outlined"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isSearching ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box  key={option.id}>
          <Typography variant="body2">Id: {option.id}</Typography>
          <Typography variant="subtitle1" fontWeight="bold">Name: {option.name}</Typography>
        </Box>
      )}
    />
  );
};

export default SearchAsync;
