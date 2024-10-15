import { Stack, Typography } from '@mui/material';
import React from 'react';
import sum from '../../../assets/project euler/sum.png';
import sum_of_squares from '../../../assets/project euler/sum_of_squares.png';
import CentralImage from '../../../components/CentralImage';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';

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
      <CentralImage alt="Sum" src={sum} />
      <CentralImage alt="Sum" src={sum_of_squares} />
    </ProjectEulerBaseContainer>
  );
}

export default Problem6;
