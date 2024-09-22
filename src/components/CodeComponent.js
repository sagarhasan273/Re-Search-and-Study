import { CopyBlock, atomOneDark } from 'react-code-blocks';

export default function CodeComponent({ code, language }) {
  return <CopyBlock text={code} language={language} codeBlock theme={atomOneDark} />;
}
