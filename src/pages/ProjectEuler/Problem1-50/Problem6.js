import { Stack, Typography } from '@mui/material';
import React from 'react';
import square_of_sum from '../../../assets/project euler/problem6/square_of_sum.png';
import sum from '../../../assets/project euler/problem6/sum.png';
import sum_of_squares from '../../../assets/project euler/problem6/sum_of_squares.png';
import CentralImage from '../../../components/CentralImage';
import CentralText from '../../../components/CentralText';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem6_javascript } from './helpers';

function Problem6() {
  return (
    <ProjectEulerBaseContainer problem="6. Sum Square Difference">
      <PlainText>The sum of the squares of the first ten natural numbers is:</PlainText>
      <Stack alignItems="center">
        <Typography>
          1<sup>2</sup> + 2<sup>2</sup> +⋯+ 10<sup>2</sup> = 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385
        </Typography>
      </Stack>
      <PlainText>The square of the sum of the first ten natural numbers is:</PlainText>
      <Stack alignItems="center">
        <Typography>
          (1 + 2 +⋯+ 10)<sup>2</sup> = (55)<sup>2</sup> = 3025
        </Typography>
      </Stack>
      <PlainText>
        Hence, the difference between the square of the sum and the sum of the squares for the first ten natural numbers
        is:
      </PlainText>
      <Stack alignItems="center">
        <Typography>3025 - 385 = 2640</Typography>
      </Stack>
      <PlainText>
        Find the difference between the sum of the squares of the first 100 natural numbers and the square of the sum.
      </PlainText>
      <Title>Key Concepts:</Title>
      <OrderList num={1}>Sum of squares: The sum of the squares of the first 100 natural numbers.</OrderList>
      <Stack alignItems="center">
        <Typography>
          1<sup>2</sup> +2<sup>2</sup> +⋯+100<sup>2</sup>
        </Typography>
      </Stack>
      <OrderList num={2}>Square of the sum: The square of the sum of the first 100 natural numbers.</OrderList>
      <Stack alignItems="center">
        <Typography>
          (1 + 2 +⋯+ 100)<sup>2</sup>
        </Typography>
      </Stack>
      <Title>Objective:</Title>
      <PlainText>We need to find the difference between:</PlainText>
      <OrderList num={1}>The sum of the squares of the first 100 natural numbers.</OrderList>
      <OrderList num={2}>The square of the sum of the first 100 natural numbers.</OrderList>
      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Sum of Squares:</OrderList>
      <PlainText>The sum of squares of the first n natural numbers can be computed using the formula:</PlainText>
      <CentralImage alt="Sum" src={sum_of_squares} />
      <PlainText>For n = 100, this formula gives the sum of squares of the first 100 natural numbers.</PlainText>
      <OrderList num={2}>Square of the Sum:</OrderList>
      <PlainText>The sum of the first n natural numbers is:</PlainText>
      <CentralImage alt="Sum" src={sum} />
      <PlainText>The square of the sum is then:</PlainText>
      <CentralImage alt="Sum" src={square_of_sum} />
      <OrderList num={3}>3. Difference:</OrderList>
      <PlainText>The difference is:</PlainText>
      <CentralText>Difference = Square of sum - Sum of squares</CentralText>
      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem6_javascript} />
      <Title>Explanation:</Title>
      <OrderList num={1}>
        Sum of squares: We calculate the sum of squares of the first 100 numbers using the formula.
      </OrderList>
      <OrderList num={2}>
        Square of sum: First, we calculate the sum of the first 100 numbers and then square the result.
      </OrderList>
      <OrderList num={3}>
        Difference: The difference between the square of the sum and the sum of the squares is computed and printed.
      </OrderList>
      <Title>Output:</Title>
      <PlainText>For the first 100 natural numbers, the result is:</PlainText>
      <CodeComponent
        code={`The difference between the square of the sum and the sum of the squares is: 25164150
`}
      />
      <PlainText>This result is the correct answer to Problem 6 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem6;
