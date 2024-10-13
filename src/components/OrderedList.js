import { Stack } from '@mui/material';
import React from 'react';
import PlainText from './PlainText';

function OrderList({ num, children }) {
  return (
    <Stack direction="row" sx={{ color: '#ECECEC', lineHeight: 1.6, fontSize: '16px', fontWeight: 400 }} gap={2}>
      <span style={{ paddingTop: 2 }}>{num}. </span>
      <PlainText>{children}</PlainText>
    </Stack>
  );
}

export default OrderList;
