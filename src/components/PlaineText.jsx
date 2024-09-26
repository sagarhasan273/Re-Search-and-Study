import { Box } from '@mui/material';
import React from 'react';
import HighlightedText from './HighlightedText';

function PlaineText() {
  return (
    <Box sx={{ color: '#ECECEC', lineHeight: 1.6 }}>
      To apply CSS to a <HighlightedText>pre</HighlightedText> {/* Corrected closing tag */}
      element based on its parent div's class name (in your case,{' '}
      <HighlightedText>classname='javascript_code'</HighlightedText>), you can target it using CSS or JavaScript.
    </Box>
  );
}

export default PlaineText;
