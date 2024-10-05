import React from 'react';

const styleHighLight = {
  backgroundColor: '#424242',
  padding: '3px',
  paddingLeft: '5px',
  paddingRight: '5px',
  borderRadius: '5px',
};

function HlText({ children }) {
  return <span style={styleHighLight}>{children}</span>;
}

export default HlText;
