import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes/routes';

function Layout() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Box>
  );
}

export default Layout;
