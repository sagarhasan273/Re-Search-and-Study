import { Box } from '@mui/material';
import React from 'react';
import HlText from './HighlightedText';

function PlainText() {
  return (
    <Box sx={{ color: '#ECECEC', lineHeight: 1.6 }}>
      To apply CSS to a <HlText>pre</HlText> {/* Corrected closing tag */}
      element based on its parent div's class name (in your case, <HlText>classname='javascript_code'</HlText>), you can
      target it using CSS or JavaScript.
    </Box>
  );
}

export default PlainText;
