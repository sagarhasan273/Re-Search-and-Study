import React from 'react';

const style = {
  fontSize: '16px',
  fontWeight: 700,
  display: 'inline',
  color: 'white',
};

function Bold({ children }) {
  return <span style={style}>{children}</span>;
}

export default Bold;
