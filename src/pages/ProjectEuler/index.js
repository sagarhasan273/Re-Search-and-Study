import { Box } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

function ProjectEuler() {
  const { state } = useGlobalContext();
  const page = state?.filter((item) => item?.isSelected)?.[0];
  return (
    <Box className="stylishScrollbar" sx={{ overflowY: 'scroll', height: '100%', pb: '40px' }}>
      {page?.element}
    </Box>
  );
}

export default ProjectEuler;