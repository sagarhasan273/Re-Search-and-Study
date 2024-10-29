import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';
import React from 'react';
import PlainText from './PlainText';

function UnorderList({ children }) {
  return (
    <Stack pl={2} direction="row" sx={{ color: '#ECECEC', lineHeight: 1.6, fontSize: '16px', fontWeight: 400 }} gap={2}>
      <FiberManualRecordIcon sx={{ width: 10, height: 10, position: 'relative', top: '8px' }} />
      <PlainText>{children}</PlainText>
    </Stack>
  );
}

export default UnorderList;
