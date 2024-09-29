import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, Stack } from '@mui/material';
import React from 'react';
import profile_dp from '../../assets/images/profile_dp.jpg';
import TopBarTabs from './TopBarTabs';

function Topbar({ setOpen }) {
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
            '&:hover': {
              backgroundColor: 'transparent',
            },
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
