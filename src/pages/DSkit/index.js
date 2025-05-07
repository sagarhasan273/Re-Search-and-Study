import { Box } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import DsSagaKitHome from './ds-home';

function DsSagaKit() {
  const { state } = useGlobalContext();
  const page = state?.filter((item) => item?.isSelected)?.[0];
  return (
    <Box className="stylishScrollbar" sx={{ overflowY: 'scroll', height: '100%', pb: '40px' }}>
      {page?.element || <DsSagaKitHome />}
    </Box>
  );
}

export default DsSagaKit;
