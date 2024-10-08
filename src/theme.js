import { createTheme, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';

function ThemeContext({ children }) {
  const customTheme = useMemo(() => {
    const theme = createTheme({
      palette: {
        text: {
          primary: '#ECECEC',
        },
      },
      typography: {
        allVariants: {
          color: '#ECECEC',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
        },
      },
    });
    return theme;
  }, []);

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}

export default ThemeContext;
