import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, Stack } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import profile_dp from '../../assets/icons/studying.png';
import TopBarTabs from './TopBarTabs';

function Topbar({ setOpen }) {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      sx={{ height: '50px', background: '#1a1a1a' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row">
        <Button
          sx={{
            color: '#cfcfcf',
            '&:hover': {
              color: 'white',
              backgroundColor: 'transparent',
            },
            ...(location?.state?.pageName === 'home' && { display: 'none' }),
          }}
          onClick={setOpen}
          disableRipple
        >
          <MenuIcon />
        </Button>

        <Stack>
          <TopBarTabs />
        </Stack>
      </Stack>
      <Box p={2}>
        <Avatar sx={{ width: '38px', height: '38px' }} alt="Sagar Hasan" src={profile_dp}></Avatar>
      </Box>
    </Stack>
  );
}

export default Topbar;
