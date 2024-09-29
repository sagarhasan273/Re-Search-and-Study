import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { itemsOfJavascript } from '../../MenuList/itemsOfJavascript';

const CustomButton = styled(Button)({
  textTransform: 'capitalize',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#212121', // Disable hover background
  },
});

function SideMenuList({ open }) {
  return (
    <Box
      sx={{
        width: open ? '250px' : '0px',
        transition: 'width 0.3s ease', // Adding transition for smooth animation
        overflow: 'hidden', // Ensures content doesn't spill out when width is 0px
        backgroundColor: '#3a3a3b', // Optional: Adds background color to visualize the side menu
      }}
    >
      <Box>
        <Stack sx={{ minWidth: '250px', borderBottom: '1px dashed #212121' }} p={2} alignItems="center">
          <Typography sx={{ fontSize: '18px !important', fontWeight: '600' }}>JavaScript</Typography>
        </Stack>
        {itemsOfJavascript.map((item, index) => {
          if (['javascript_fundamentals', 'objects_the_basics'].includes(item?.value)) {
            return (
              <Stack
                sx={{ minWidth: '250px', borderBottom: '1px dashed #212121', borderTop: '1px dashed #212121' }}
                p={2}
                alignItems="center"
              >
                <Typography sx={{ fontSize: '16px !important', fontWeight: '600' }}>{item?.label}</Typography>
              </Stack>
            );
          }
          return (
            <Stack sx={{ minWidth: '250px' }} key={index}>
              <CustomButton disableRipple>
                <Typography>{item.label}</Typography>
              </CustomButton>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideMenuList;
