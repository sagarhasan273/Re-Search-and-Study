import { Stack } from '@mui/material';
import React from 'react';
import BaseContainer from '../../../components/BaseContainer';
import Divider from '../../../components/Divider';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';

function ProjectEulerBaseContainer({ children, problem }) {
  return (
    <BaseContainer>
      <Title>Project Euler</Title>
      <Title>{problem}</Title>
      <Divider />
      {children}
      <Stack padding={5} alignItems="center">
        <PlainText>-------------- Happy coding! 😊 --------------</PlainText>
      </Stack>
    </BaseContainer>
  );
}

export default ProjectEulerBaseContainer;
