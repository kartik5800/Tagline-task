import { Box, Typography } from '@mui/material'

// -----------------------------------------------

const FilterSection = (props) => {
    const {tableFields , renderSwitches } = props
  return (
    <Box
    sx={{ display: "flex", backgroundColor: "#e6e6e8", padding: 2 }}
    gap={6}
  >
    {tableFields
      ?.filter((key) => key !== "id" && key !== tableFields[1])
      ?.map((field, index) => (
        <Box key={`table-filter-${index}`}>
          <Typography sx={{ fontSize: "18px" }} fontWeight={600}>
            {field}
          </Typography>
          {renderSwitches(field)}
        </Box>
      ))}
  </Box>
  )
}

export default FilterSection