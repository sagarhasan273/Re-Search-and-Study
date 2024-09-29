import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Layout from './pages/Layout';
import SideMenuList from './pages/SideMenuList';
import Topbar from './pages/Topbar';
// import CodeComponent from './components/CodeComponent';
// import Artical from './components/PlainText';
// import UnorderList from './components/UnorderList';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Box className="App">
      <Stack direction="row" sx={{ height: '100vh' }}>
        <SideMenuList open={open} />
        <Stack flex={1}>
          <Topbar setOpen={() => setOpen((prev) => !prev)} />
          <Layout />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
