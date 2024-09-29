import CloseIcon from '@mui/icons-material/Close';
import { Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

const CustomButton = styled(Button)({
  textTransform: 'capitalize',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#212121',
  },
});

function Tabs({ item }) {
  const { dispatch } = useGlobalContext();

  const deleteTabsHandle = () => {
    dispatch({ ...item, type: 'delete', deleteTab: item?.tabValue });
  };
  return (
    <Stack
      sx={{
        pb: '2px',
        pl: '10px',
        pr: '5px',
        border: '1px solid white',
        borderBottom: 'none',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        height: '28px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
    >
      <Typography sx={{ fontSize: '12px !important', whiteSpace: 'nowrap' }}>{item?.tabLabel}</Typography>
      <CustomButton
        onClick={deleteTabsHandle}
        sx={{ height: '20px', width: '20px', minWidth: '20px', p: 0 }}
        disableRipple
      >
        <CloseIcon sx={{ width: '20px' }} />
      </CustomButton>
    </Stack>
  );
}

export default Tabs;
