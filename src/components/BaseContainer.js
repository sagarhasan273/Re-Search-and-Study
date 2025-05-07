import { Stack } from '@mui/material';
import React from 'react';

function BaseContainer({ children, sx }) {
  return (
    <Stack sx={{ width: '700px', margin: 'auto', mt: '20px', ...sx }} gap={2}>
      {children}
    </Stack>
  );
}

export default BaseContainer;
