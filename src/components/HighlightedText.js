import { styled, Typography } from '@mui/material';
import React from 'react';

const CustomTypography = styled(Typography)(() => ({
  backgroundColor: '#424242',
  display: 'inline-block',
  paddingLeft: '5px',
  paddingRight: '5px',
  borderRadius: '5px',
  marginLeft: '5px',
}));

function HighlightedText({ children }) {
  console.log(children);
  return <CustomTypography>{children}</CustomTypography>;
}

export default HighlightedText;
