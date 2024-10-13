/* eslint-disable max-len */
import { Stack } from '@mui/material';
import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import Gap from '../../../components/Gap';
import HlText from '../../../components/HlText';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import UnorderList from '../../../components/UnorderList';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem1_javascript } from './helpers';

function Problem1() {
  return (
    <ProjectEulerBaseContainer problem="1. Multiples of 3 or 5">
      <PlainText>
        If we list all the natural numbers below <HlText>10</HlText> that are multiples of <HlText>3</HlText> or{' '}
        <HlText>5</HlText>, we get <HlText>3</HlText>, <HlText>5</HlText>, <HlText>6</HlText> and <HlText>9</HlText>.
        The sum of these multiples is <HlText>23</HlText>. Find the sum of all the multiples of <HlText>3</HlText>or{' '}
        <HlText>5</HlText>below <HlText>1000</HlText>.
      </PlainText>
      <Title>JavaScript Implementation</Title>
      <CodeComponent code={problem1_javascript} language="javascript" title="JavaScript" />
      <PlainText>
        This JavaScript code calculates the sum of all the numbers below 1000 that are multiples of either 3 or 5.
        Here's a step-by-step breakdown:
      </PlainText>
      <Title>Code Explanation</Title>
      <UnorderList>
        <HlText>let sum = 0;</HlText>: This initializes a variable <HlText>sum</HlText> with the value{' '}
        <HlText>0</HlText>. This variable will hold the cumulative sum of all the multiples of 3 or 5.
      </UnorderList>
      <UnorderList>
        <HlText>{`for (let i = 1; i < 1000; i++) {`}</HlText>: This is a <HlText>for</HlText> loop that iterates over
        every integer starting from <HlText>1</HlText> up to (but not including) 1000. The variable <HlText>i</HlText>{' '}
        takes values from <HlText>1</HlText> to <HlText>999</HlText>.
      </UnorderList>
      <UnorderList>
        <HlText>{`if (i % 3 === 0 || i % 5 === 0) {`}</HlText>: This condition checks if the number <HlText>i</HlText>{' '}
        is divisible by 3 or 5.
        <UnorderList>
          <HlText>i % 3 === 0</HlText>: This checks if the remainder when <HlText>i</HlText> is divided by 3 is 0,
          meaning <HlText>i</HlText> is divisible by 3.
        </UnorderList>
        <UnorderList>
          <HlText>i % 5 === 0</HlText>: This checks if the remainder when <HlText>i</HlText> is divided by 5 is 0,
          meaning <HlText>i</HlText> is divisible by 5.
        </UnorderList>
        <UnorderList>
          The condition uses <HlText>||</HlText> (logical OR), meaning the code inside the block will execute if either
          of these conditions is true (i.e., if <HlText>i</HlText> is divisible by either 3 or 5).
        </UnorderList>
      </UnorderList>
      <UnorderList>
        <HlText>sum += i;</HlText>: If <HlText>i</HlText> is divisible by 3 or 5, it gets added to the cumulative sum.
        This is shorthand for <HlText>sum = sum + i</HlText>.
      </UnorderList>
      <UnorderList>
        <HlText>console.log("The sum of all the multiples of 3 or 5 below 1000 is:", sum);</HlText>: After the loop
        completes, this line prints the final value of <HlText>sum</HlText>, which will be the sum of all the numbers
        less than 1000 that are divisible by 3 or 5
      </UnorderList>
      <Gap gap={2} />
      <Title>Key Points:</Title>
      <Stack>
        <UnorderList>The loop runs through every number from 1 to 999.</UnorderList>
        <UnorderList>For each number, it checks if it's divisible by either 3 or 5.</UnorderList>
        <UnorderList>If it is divisible, the number is added to the sum.</UnorderList>
        <UnorderList>After the loop finishes, the total sum is printed.</UnorderList>
      </Stack>
      <Title>Output:</Title>
      <PlainText>The result of running this code will be:</PlainText>
      <CodeComponent
        code="The sum of all the multiples of 3 or 5 below 1000 is: 233168"
        language="python"
        title="JavaScript"
      />
      <PlainText>
        This code effectively solves Problem 1 from Project Euler: Find the sum of all the multiples of 3 or 5 below
        1000.
      </PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem1;
