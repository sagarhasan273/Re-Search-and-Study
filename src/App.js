import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Layout from './pages/Layout';
import SideMenuList from './pages/SideMenuList';
import Topbar from './pages/Topbar';
// import CodeComponent from './components/CodeComponent';
// import Artical from './components/PlainText';
// import UnorderList from './components/UnorderList';

// const code = `function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }`;

// const python = `fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
// newlist = []

// for x in fruits:
//   if "a" in x:
//     newlist.append(x)

// print(newlist)
// `;

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Box className="App">
      {/* <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <Artical />
        <UnorderList />
      </Box>

      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <CodeComponent code={code} language="javascript" />
      </Box>
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <CodeComponent code={python} language="python" title="Python" />
      </Box> */}
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
