import { Stack } from '@mui/material';
import React from 'react';

function CentralImage({ alt, src }) {
  return (
    <Stack alignItems="center">
      <span>
        <img alt={alt} src={src} />
      </span>
    </Stack>
  );
}

export default CentralImage;
