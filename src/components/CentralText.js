import { Stack, Typography } from '@mui/material';
import React from 'react';

function CentralText({ children }) {
  return (
    <Stack alignItems="center">
      <Typography>{children}</Typography>
    </Stack>
  );
}

export default CentralText;
