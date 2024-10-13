import { Stack } from '@mui/material';
import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import HlText from '../../../components/HlText';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import UnorderList from '../../../components/UnorderList';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem2_javascript } from './helpers';

function Problem2() {
  return (
    <ProjectEulerBaseContainer problem="2. Even Fibonacci Numbers">
      <PlainText>
        The problem involving even Fibonacci numbers often asks you to find the sum of the even-valued terms in the
        Fibonacci sequence. Here's how it works:
      </PlainText>
      <Title>Fibonacci Sequence:</Title>
      <PlainText>
        The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones. The
        first few numbers in the Fibonacci sequence are:
      </PlainText>
      <Stack alignItems="center">
        <PlainText>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …</PlainText>
      </Stack>
      <Title>Even Fibonacci Numbers:</Title>
      <PlainText>From the Fibonacci sequence, the even numbers are:</PlainText>
      <Stack alignItems="center">
        <PlainText>0, 2, 8, 34, 144, …</PlainText>
      </Stack>
      <PlainText>These are the numbers divisible by 2.</PlainText>
      <Title>Common Problem Example:</Title>
      <PlainText>
        In Project Euler’s Problem 2, the task is to find the sum of all even Fibonacci numbers that do not exceed a
        certain limit, often 4 million.
      </PlainText>
      <Title>How to Solve:</Title>
      <OrderList num={1}>Generate the Fibonacci sequence.</OrderList>
      <OrderList num={2}>Identify even numbers in the sequence.</OrderList>
      <OrderList num={3}>Sum those even numbers up to a given limit.</OrderList>
      <PlainText>Here’s a simple JavaScript code to find the sum of even Fibonacci numbers up to 4 million:</PlainText>
      <CodeComponent code={problem2_javascript} language="javascript" title="JavaScript" />
      <Title>Explanation:</Title>
      <UnorderList>
        <HlText>a = 1, b = 2</HlText>: These are the first two Fibonacci numbers.
      </UnorderList>
      <UnorderList>
        <HlText>{`while (b <= 4000000)`}</HlText>: This loop continues until the current Fibonacci number (
        <HlText>b</HlText>) exceeds 4 million.
      </UnorderList>
      <UnorderList>
        <HlText>if (b % 2 === 0)</HlText>: This condition checks if <HlText>b</HlText> is an even number.
      </UnorderList>
      <UnorderList>
        <HlText>sum += b</HlText>: If <HlText>b</HlText> is even, add it to the sum.
      </UnorderList>
      <UnorderList>
        <HlText>a = b</HlText> and <HlText>b = next</HlText>: Move to the next Fibonacci number.
      </UnorderList>
      <Title>Result:</Title>
      <PlainText>For this code, the sum of all even Fibonacci numbers less than 4 million is:</PlainText>
      <CodeComponent
        code={`The sum of even Fibonacci numbers below 4 million is: 4613732
`}
        language="javascript"
        title="JavaScript"
      />
    </ProjectEulerBaseContainer>
  );
}

export default Problem2;
