import { Typography } from '@mui/material';
import React from 'react';

function PlainText({ sx, children }) {
  return (
    <Typography sx={{ color: '#ECECEC', lineHeight: 1.7, fontSize: '16px', fontWeight: 400, ...sx }}>
      {children}
    </Typography>
  );
}

export default PlainText;
