import { Box } from '@mui/material';
import React from 'react';
import Introduction from './Introduction';

function JavaScriptDoc() {
  return (
    <Box className="stylishScrollbar" sx={{ overflowY: 'scroll', height: '100%', pb: '40px' }}>
      <Introduction />
    </Box>
  );
}

export default JavaScriptDoc;
