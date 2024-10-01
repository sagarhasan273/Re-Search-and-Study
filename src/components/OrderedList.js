import { Stack } from '@mui/material';
import React from 'react';

function OrderList({ num, children }) {
  return (
    <Stack sx={{ color: '#ECECEC', lineHeight: 1.6, fontSize: '16px', fontWeight: 400 }} gap={2}>
      <Stack direction="row" gap={2}>
        <span>{num}. </span>
        {children}
      </Stack>
    </Stack>
  );
}

export default OrderList;
