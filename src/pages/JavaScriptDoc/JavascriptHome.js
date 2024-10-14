import { Stack, Typography } from '@mui/material';
import React from 'react';
import javascriptImage from '../../assets/images/javascript.png';

function JavascriptHome() {
  return (
    <Stack>
      <Stack sx={{ height: '70vh' }} justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: '50px', fontWeight: 700 }}>JavaScript</Typography>
        <img alt="JavaScript" width={400} src={javascriptImage} />
      </Stack>
    </Stack>
  );
}

export default JavascriptHome;
