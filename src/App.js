import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from './context/GlobalContext';
import Layout from './pages/Layout';
import SideMenuList from './pages/SideMenuList';
import Topbar from './pages/Topbar';

function App() {
  const { sideBarOpen, setSideBarOpen } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home', {
      state: {
        pageName: 'home',
      },
    });
  }, []);

  return (
    <Box className="App">
      <Stack direction="row" sx={{ height: '100vh' }}>
        <SideMenuList open={sideBarOpen} />
        <Stack flex={1}>
          <Topbar setOpen={() => setSideBarOpen((prev) => !prev)} />
          <Layout />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
