import { Box } from '@mui/material';
import React from 'react';

function PlainText({ sx, children }) {
  return <Box sx={{ color: '#ECECEC', lineHeight: 1.8, fontSize: '16px', fontWeight: 400, ...sx }}>{children}</Box>;
}

export default PlainText;
