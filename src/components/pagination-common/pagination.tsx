import React from 'react';
import { Box, Select, MenuItem, Typography, Pagination, PaginationItem, SelectChangeEvent } from '@mui/material';

interface PaginationCommonProps {
  totalResults: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
  pageSizeOptions?: number[];
}

const PaginationCommon: React.FC<PaginationCommonProps> = ({
  totalResults,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  pageSizeOptions = [5, 10, 25]
}) => {
  const pageCount = Math.ceil(totalResults / rowsPerPage);

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      bgcolor='#EEEEEE'
      padding='0px 24px 15px 24px'
      width='100%'
      height='55px'
      sx={{
        borderBottomRightRadius: '24px',
        borderBottomLeftRadius: '24px'
      }}
    >
      <Box display='flex' alignItems='center'>
        <Select
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
          size='small'
          sx={{
            marginRight: '8px',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '8px',

            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }}
        >
          {pageSizeOptions.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <Typography variant='body2'>of {totalResults} results</Typography>
      </Box>

      <Pagination
        count={pageCount}
        page={page}
        onChange={onPageChange}
        variant='outlined'
        shape='rounded'
        renderItem={(item) => <PaginationItem {...item} />}
      />
    </Box>
  );
};

export default PaginationCommon;
