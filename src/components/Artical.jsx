import { Box } from '@mui/material';
import React from 'react';
import HighlightedText from './HighlightedText';

function Artical() {
  return (
    <div>
      <Box sx={{ color: '#ECECEC', lineHeight: '16px' }}>
        To apply CSS to a <HighlightedText>pre</HighlightedText> {/* Corrected closing tag */}
        element based on its parent div's class name (in your case,{' '}
        <HighlightedText>classname='javascript_code'</HighlightedText>), you can target it using CSS or JavaScript.
      </Box>
    </div>
  );
}

export default Artical;
