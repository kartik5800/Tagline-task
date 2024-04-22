//
import { useState, useEffect } from "react";
// material ui
import {
  FormGroup,
  Switch,
  FormControlLabel,
  Box,
  Stack,
  Typography,
} from "@mui/material";
// constant file
import { data } from "../json/jsonData";
import SearchBarSection from "./component/SearchBarSection";
import FilterSection from "./component/FilterSection";
import TableSection from "./component/TableSection";

// ----------------------------------------------

function FilteredData() {
  const [jsonData, setJsonData] = useState([]);
  const [tableFields, setTableFields] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setJsonData(data);
    const keys = Array?.from(
      new Set(data?.flatMap((obj) => Object?.keys(obj)))
    );
    setTableFields(keys);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      updatedFilters[name] = checked
        ? [...(updatedFilters[name] || []), value]
        : updatedFilters[name]?.filter((val) => val !== value);

      return updatedFilters;
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderSwitches = (field) =>
    Array.from(new Set(jsonData.map((item) => item[field]))).map(
      (value) =>
        value && (
          <Box key={`switch-${field}-${value}`} sx={{ padding: 1 }}>
            <FormGroup>
              <FormControlLabel
                control={<Switch />}
                label={String(value)}
                name={field}
                value={String(value)}
                onChange={handleFilterChange}
                checked={(filters[field] || []).includes(String(value))}
              />
            </FormGroup>
          </Box>
        )
    );

  const filteredData = jsonData.filter(
    (item) =>
      (!searchTerm ||
        (item[tableFields[1]] &&
          item[tableFields[1]]
            ?.toString()
            ?.toLowerCase()
            ?.includes(searchTerm?.toLowerCase()))) &&
      Object?.entries(filters)?.every(([key, values]) =>
        !values.length ? true : values?.includes(item[key])
      )
  );

  return (
    <Stack spacing={3}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", paddingTop: 3 }}
        fontWeight={700}
      >
        Filtered Data
      </Typography>

      <SearchBarSection searchTerm={searchTerm} handleSearch={handleSearch} />

      <FilterSection
        tableFields={tableFields}
        renderSwitches={renderSwitches}
      />

      <TableSection tableFields={tableFields} filteredData={filteredData} />
    </Stack>
  );
}

export default FilteredData;
