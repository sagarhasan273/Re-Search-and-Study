import { Stack } from '@mui/material';
import React from 'react';

function ProjectEulerHome() {
  return (
    <Stack alignItems="center">
      <Stack direction="row" sx={{ width: '650px', height: '50vh', position: 'relative' }} alignItems="center">
        <span style={{ color: '#6B4E3D', fontSize: '80px', fontWeight: 700, fontFamily: 'sans-serif' }}>
          Project Euler
        </span>
        <span
          style={{
            position: 'relative',
            top: 35,
            left: -28,
            color: '#BABABA',
            fontSize: '60px',
            fontWeight: 500,
            fontFamily: 'system-ui',
          }}
        >
          .net
        </span>
      </Stack>
    </Stack>
  );
}

export default ProjectEulerHome;
