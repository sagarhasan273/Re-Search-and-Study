import { Stack, Typography } from '@mui/material';
import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem9_javascript } from './helpers';

function Problem9() {
  return (
    <ProjectEulerBaseContainer problem="9. Special Pythagorean Triplet">
      <PlainText>A Pythagorean triplet is a set of three natural numbers, a &lt; b &lt; c, for which:</PlainText>
      <Stack alignItems="center">
        <Typography>
          a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
        </Typography>
      </Stack>
      <PlainText>
        For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.
      </PlainText>
      <PlainText>
        There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        Pythagorean Triplet: Three numbers that satisfy a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.
      </OrderList>
      <OrderList num={2}>
        Sum condition: In this problem, we are tasked with finding a triplet where a + b + c = 1000.
      </OrderList>
      <OrderList num={3}>Product: Once we find the triplet, we need to calculate the product \( abc \).</OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>
        Iterate through possible values of \( a \) and \( b \) and calculate \( c = 1000 - a - b \).
      </OrderList>
      <OrderList num={2}>
        For each combination, check if the triplet satisfies the Pythagorean theorem: \( a^2 + b^2 = c^2 \).
      </OrderList>
      <OrderList num={3}>Once the triplet is found, calculate \( abc \).</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        We will use a **brute-force** approach where we loop through possible values for \( a \) and \( b \), compute \(
        c \), and check the conditions.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem9_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        For every pair \( a \) and \( b \), we compute \( c \) using \( c = 1000 - a - b \).
      </OrderList>
      <OrderList num={2}>We then check if \( a^2 + b^2 = c^2 \). If this is true, we have found the triplet.</OrderList>
      <OrderList num={3}>Finally, we calculate the product \( abc \) and print the result.</OrderList>

      <Title>Output:</Title>
      <PlainText>The product of the Pythagorean triplet for which a + b + c = 1000 is:</PlainText>
      <CodeComponent
        code={`The product of the Pythagorean triplet is: 31875000
`}
      />
      <PlainText>This result is the correct answer to Problem 9 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem9;
