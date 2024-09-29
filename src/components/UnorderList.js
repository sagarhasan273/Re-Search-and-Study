import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';
import React from 'react';
import PlainText from './PlainText';

function UnorderList({ plainText, listTitle, listTitleText }) {
  return (
    <Stack sx={{ color: '#ECECEC', lineHeight: 1.6 }} gap={2}>
      {plainText || null}
      {listTitle}
      {listTitleText}

      <Stack direction="row" gap={2}>
        <FiberManualRecordIcon sx={{ width: 10, height: 10, position: 'relative', top: '7px', left: '5px' }} />
        <PlainText />
      </Stack>
    </Stack>
  );
}

export default UnorderList;
