import { Stack } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import Tabs from './Tabs';

function TopBarTabs() {
  const { state } = useGlobalContext();

  return (
    <Stack
      className="stylishScrollbar"
      sx={{ overflowY: 'hidden', overflowX: 'scroll', maxWidth: 800, position: 'relative', top: '10px' }}
      direction="row"
      gap="2px"
    >
      {state?.map((item, index) => (
        <Tabs key={index} item={item} />
      ))}
    </Stack>
  );
}

export default TopBarTabs;
