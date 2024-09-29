import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { itemsOfJavascript } from '../../MenuList/itemsOfJavascript';
import { useGlobalContext } from '../../context/GlobalContext';

const CustomButton = styled(Button)({
  textTransform: 'capitalize',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#212121',
  },
});

function SideMenuList({ open }) {
  const { dispatch } = useGlobalContext();

  const handleClickMenu = (e, item) => {
    e.stopPropagation();
    dispatch({ type: 'add', tabValue: item?.value, tabLabel: item?.label });
  };

  return (
    <Box
      sx={{
        width: open ? '250px' : '0px',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        backgroundColor: '#3a3a3b',
        height: '100%',
      }}
    >
      <Box className="scrollbarForSideMenubar" sx={{ height: '100%', overflowY: 'scroll', overflowX: 'hidden' }}>
        <Stack sx={{ minWidth: '250px', borderBottom: '1px dashed rgb(175, 175, 175)' }} p={2} alignItems="center">
          <Typography sx={{ fontSize: '18px !important', fontWeight: '600' }}>JavaScript</Typography>
        </Stack>
        {itemsOfJavascript.map((item, index) => {
          if (['javascript_fundamentals', 'objects_the_basics'].includes(item?.value)) {
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
              <CustomButton onClick={(e) => handleClickMenu(e, item)} disableRipple>
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
