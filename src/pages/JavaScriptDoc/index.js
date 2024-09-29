import { Box } from '@mui/material';
import React from 'react';
import CodeComponent from '../../components/CodeComponent';
import PlainText from '../../components/PlainText';
import UnorderList from '../../components/UnorderList';

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

function JavaScriptDoc() {
  return (
    <Box sx={{ overflowY: 'scroll', height: '100%', pb: '40px' }}>
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}>
        <PlainText />
        <UnorderList />
        <CodeComponent code={code} language="javascript" />
        <CodeComponent code={python} language="python" title="Python" />
      </Box>

      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}></Box>
      <Box sx={{ width: '700px', margin: 'auto', mt: 10 }}></Box>
    </Box>
  );
}

export default JavaScriptDoc;
