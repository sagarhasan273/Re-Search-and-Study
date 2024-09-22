import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CopyBlock, atomOneDark } from 'react-code-blocks';

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

  return (
    <Stack sx={{ background: '#2F2F2F', p: '1px', borderRadius: '5px' }}>
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', p: 1, pb: '2px' }}>
        <Typography sx={{ color: '#adadad' }}>{title}</Typography>
        {!isCopied ? (
          <Button
            size="small"
            sx={{
              color: '#adadad',
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
              color: '#adadad',
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
      <CopyBlock
        copied={isCopied ? code : undefined}
        text={code}
        language={language}
        showLineNumbers={false}
        theme={atomOneDark}
      />
    </Stack>
  );
}
