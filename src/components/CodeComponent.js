import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeComponent({ code, language, title = 'Javascript.js' }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => setIsCopied(true))
      .catch((err) => console.error('Failed to copy code: ', err));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);
  console.log('rendering..', title);

  return (
    <Stack sx={{ background: '#2F2F2F', p: '1px', borderRadius: '5px' }}>
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', p: 1, pb: '2px' }} alignItems="center">
        <Typography sx={{ color: '#dbdbdb' }}>{title}</Typography>
        {!isCopied ? (
          <Button
            size="small"
            sx={{
              color: '#dbdbdb',
              textTransform: 'capitalize',
              '&:hover': {
                background: 'transparent',
              },
            }}
            onClick={copyToClipboard}
            startIcon={<ContentCopyIcon />}
            disableRipple
          >
            Copy code
          </Button>
        ) : (
          <Button
            size="small"
            sx={{
              color: '#dbdbdb',
              textTransform: 'capitalize',
              '&:hover': {
                background: 'transparent',
              },
            }}
            onClick={copyToClipboard}
            startIcon={<DoneAllIcon />}
            disableRipple
          >
            Copied
          </Button>
        )}
      </Stack>
      <Stack sx={{ padding: '0px 5px' }}>
        <SyntaxHighlighter language={language} style={okaidia}>
          {code}
        </SyntaxHighlighter>
      </Stack>
    </Stack>
  );
}
