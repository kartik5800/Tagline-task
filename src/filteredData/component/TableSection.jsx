import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

// ----------------------------------------------

const TableSection = (props) => {
    const {tableFields,filteredData} = props
  return (
    <Box sx={{ backgroundColor: "#dcdcde", border: "1px solid gray" }}>
        <Table>
          <TableHead>
            <TableRow>
              {tableFields?.map((field, index) => (
                <TableCell
                  sx={{ fontSize: "18px ", fontWeight: 600 }}
                  key={`table-header-${index}`}
                >
                  {field}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.length ? (
              filteredData?.map((item, index) => (
                <TableRow key={`main-list-${index}`}>
                  {tableFields?.map((field, index) => (
                    <TableCell key={`list-${index}`}>{item[field]}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={tableFields?.length}
                  sx={{ textAlign: "center" }}
                >
                  No data found!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
  )
}

export default TableSection