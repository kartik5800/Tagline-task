import { Box, TextField } from '@mui/material'

// ----------------------------------------------

const SearchBarSection = (props) => {
    const {searchTerm,handleSearch} = props
  return (
    <Box sx={{ backgroundColor: "#e8e9ed" }}>
    <TextField
      fullWidth
      variant="outlined"
      label="Search Name..."
      value={searchTerm}
      onChange={handleSearch}
      size="small"
    />
  </Box>
  )
}

export default SearchBarSection