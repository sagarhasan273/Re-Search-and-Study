import { Box } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import { menuTitleOption, menuTypeOption } from './helper';
import { elementList } from './JavaScriptMenuList/elementList';
import SideMenuItems from './SideMenuItems';

function SideMenuList({ open }) {
  const { dispatch, setSideBarOpen } = useGlobalContext();

  const location = useLocation();

  const handleClickMenu = (e, item) => {
    e.stopPropagation();
    dispatch({
      type: 'add',
      tabValue: item?.value,
      tabLabel: item?.label,
      element: elementList[item?.value],
      isSelected: true,
    });
    setSideBarOpen(false);
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
      <SideMenuItems
        items={menuTypeOption[location?.state?.pageName] || []}
        onClick={handleClickMenu}
        title={menuTitleOption[location?.state?.pageName]}
      />
    </Box>
  );
}

export default SideMenuList;
