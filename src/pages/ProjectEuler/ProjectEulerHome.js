import { Stack } from '@mui/material';
import React from 'react';
import projectEuler from '../../assets/images/projecteuler.png';

function ProjectEulerHome() {
  return (
    <Stack alignItems="center">
      <Stack sx={{ width: '500px', height: '50vh' }} justifyContent="center">
        <img alt="Project Euler" src={projectEuler} />
      </Stack>
    </Stack>
  );
}

export default ProjectEulerHome;
