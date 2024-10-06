import CloseIcon from '@mui/icons-material/Close';
import { Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { elementList } from '../SideMenuList/JavaScriptMenuList/elementList';

const CustomButton = styled(Button)({
  textTransform: 'capitalize',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#212121',
  },
});

function Tabs({ item }) {
  const { dispatch } = useGlobalContext();

  const deleteTabsHandle = (event) => {
    event.stopPropagation();
    console.log('hwllo delete');
    dispatch({ ...item, type: 'delete', deleteTab: item?.tabValue });
  };

  const handleActive = () => {
    console.log('hwllo active');
    dispatch({ ...item, type: 'selected', tabValue: item?.tabValue, element: elementList[item?.tabValue] });
  };

  return (
    <Stack
      sx={{
        pb: '2px',
        pl: '10px',
        pr: '5px',
        border: 'none',
        borderBottom: 'none',
        borderRadius: '0px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        height: '28px',
        cursor: 'pointer',
        userSelect: 'none',
        ...(item?.isSelected
          ? {
              border: '1px solid rgb(256, 256, 256)',
            }
          : { border: '1px solid rgb(207, 206, 206, 0.5)' }),
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
      onClick={handleActive}
    >
      <Typography
        sx={{
          fontSize: '12px !important',
          whiteSpace: 'nowrap',
          ...(item?.isSelected ? { color: 'white' } : { color: 'rgb(207, 206, 206, 0.5)' }),
        }}
      >
        {item?.tabLabel}
      </Typography>
      <CustomButton
        onClick={deleteTabsHandle}
        sx={{
          height: '20px',
          width: '20px',
          minWidth: '20px',
          p: 0,
          ...(item?.isSelected ? { color: 'white' } : { color: 'rgb(207, 206, 206, 0.5)' }),
        }}
        disableRipple
      >
        <CloseIcon sx={{ width: '20px' }} />
      </CustomButton>
    </Stack>
  );
}

export default Tabs;
