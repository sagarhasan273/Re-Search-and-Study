import { Stack, Typography } from '@mui/material';
import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem21_javascript } from './helpers';

function Problem21() {
  return (
    <ProjectEulerBaseContainer problem="21. Amicable Numbers">
      <PlainText>
        An amicable pair consists of two numbers where each number is the sum of the proper divisors of the other. We
        are tasked with finding the sum of all the amicable numbers under 10,000.
      </PlainText>

      <Title>Key Concepts:</Title>
      <Stack>
        <Typography>
          Proper divisors: The divisors of a number excluding the number itself. For example, the proper divisors of 220
          are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, and 110.
        </Typography>
        <Typography>
          Amicable numbers: Two numbers are amicable if the sum of the proper divisors of one equals the other, and vice
          versa.
        </Typography>
      </Stack>

      <Title>Step-by-Step Approach:</Title>
      <Stack>
        <Typography>1. Find all divisors for each number up to 10,000.</Typography>
        <Typography>2. Check for amicable pairs.</Typography>
        <Typography>3. Sum all amicable numbers.</Typography>
      </Stack>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem21_javascript} />

      <Title>Output:</Title>
      <PlainText>The sum of all amicable numbers under 10,000 is:</PlainText>
      <CodeComponent
        code={`The sum of all amicable numbers under 10,000 is: 31626
`}
      />
    </ProjectEulerBaseContainer>
  );
}

export default Problem21;
