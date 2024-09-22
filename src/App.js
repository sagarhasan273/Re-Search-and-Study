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
      <CodeComponent code={code} language="javascript" />
    </div>
  );
}

export default App;
