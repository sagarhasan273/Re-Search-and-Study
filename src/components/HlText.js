import React from 'react';

const styleHighLight = {
  backgroundColor: '#424242',
  padding: '2px',
  paddingLeft: '8px',
  paddingRight: '6px',
  borderRadius: '5px',
};

function HlText({ children }) {
  return <span style={styleHighLight}>{children}</span>;
}

export default HlText;
