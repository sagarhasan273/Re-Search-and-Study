import React from 'react';
import CentralText from '../../../components/CentralText';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem15_javascript } from './helpers';

function Problem15() {
  return (
    <ProjectEulerBaseContainer problem="15. Lattice Paths">
      <PlainText>
        In a grid, we can only move right or down. To reach the bottom right corner from the top left corner, we need to
        find all possible paths through a given grid.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Combinatorial Paths**: Each path can be represented as a series of moves down and right.
      </OrderList>
      <OrderList num={2}>
        **Binomial Coefficient**: The number of unique paths can be calculated using combinatorial mathematics.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Calculate the total moves required, which is the sum of right and down moves.</OrderList>
      <OrderList num={2}>Use the formula for binomial coefficients to find the number of unique paths:</OrderList>
      <CentralText>Paths = (2n)! / (n! * n!)</CentralText>
      <OrderList num={3}>Compute the factorials to derive the result.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        The number of paths can be computed as the binomial coefficient. For a grid of size 20x20, the number of paths
        is given by: \( C(40, 20) \), which is the number of ways to choose 20 moves down from a total of 40 moves.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem15_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Calculating Factorials**: We need a function to compute the factorial of a number.
      </OrderList>
      <OrderList num={2}>
        **Using the Binomial Coefficient**: The function calculates the number of unique paths using the formula
        mentioned above.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The number of routes through a 20×20 grid is:</PlainText>
      <CodeComponent
        code={`The number of routes through a 20×20 grid is: 137846528820
`}
      />
      <PlainText>This result is the correct answer to Problem 15 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem15;
