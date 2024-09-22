import { Box } from '@mui/material';
import CodeComponent from './components/CodeComponent';

const code = `function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`;

function App() {
  return (
    <div className="App">
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <CodeComponent code={code} language="javascript" />
      </Box>
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <CodeComponent code={code} language="javascript" />
      </Box>
    </div>
  );
}

export default App;
