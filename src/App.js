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

const python = `fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist)
`;

function App() {
  return (
    <div className="App">
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <CodeComponent code={code} language="javascript" />
      </Box>
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <CodeComponent code={python} language="python" title="Python" />
      </Box>
    </div>
  );
}

export default App;
