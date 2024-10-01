import React from 'react';

const CustomTypography = {
  backgroundColor: '#424242',
  padding: '3px',
  paddingLeft: '5px',
  paddingRight: '5px',
  borderRadius: '5px',
};

function HlText({ children }) {
  return <span style={CustomTypography}>{children}</span>;
}

export default HlText;
