import { Box } from '@mui/material';
import React from 'react';

function Title({ children }) {
  return <Box sx={{ color: '#ECECEC', lineHeight: 1.8, fontWeight: 600, fontSize: '18px' }}>{children}</Box>;
}

export default Title;
