import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const CustomButton = styled(Button)({
  textTransform: 'capitalize',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#212121',
  },
});

function SideMenuItems({ items, title, onClick }) {
  return (
    <Box className="scrollbarForSideMenubar" sx={{ height: '100%', overflowY: 'scroll', overflowX: 'hidden' }}>
      <Stack sx={{ minWidth: '250px', borderBottom: '1px dashed rgb(175, 175, 175)' }} p={2} alignItems="center">
        <Typography sx={{ fontSize: '18px !important', fontWeight: '600' }}>{title}</Typography>
      </Stack>
      {items.map((item, index) => {
        if (['title_of_list'].includes(item?.value)) {
          return (
            <Stack
              key={index}
              sx={{
                minWidth: '250px',
                borderBottom: '1px dashed rgb(175, 175, 175)',
                borderTop: '1px dashed rgb(175, 175, 175)',
              }}
              p={2}
              alignItems="center"
            >
              <Typography sx={{ fontSize: '16px !important', fontWeight: '600' }}>{item?.label}</Typography>
            </Stack>
          );
        }
        return (
          <Stack sx={{ minWidth: '250px' }} key={index}>
            <CustomButton onClick={(e) => onClick(e, item)} disableRipple>
              <Typography>{item.label}</Typography>
            </CustomButton>
          </Stack>
        );
      })}
    </Box>
  );
}

export default SideMenuItems;
