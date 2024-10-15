import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem11_javascript } from './helpers';

function Problem11() {
  return (
    <ProjectEulerBaseContainer problem="11. Largest Product in a Grid">
      <PlainText>
        In the 20×20 grid, we want to find the greatest product of four adjacent numbers in any direction: up, down,
        left, right, or diagonally.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        Grid Traversal: We need to consider four possible directions: horizontal, vertical, and two diagonal directions
        (left-to-right and right-to-left).
      </OrderList>
      <OrderList num={2}>
        Product Calculation: For each set of four adjacent numbers, we will calculate their product and track the
        maximum product encountered.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>
        Traverse the grid row by row and column by column to handle horizontal and vertical products.
      </OrderList>
      <OrderList num={2}>
        For diagonals, traverse both top-left to bottom-right and top-right to bottom-left diagonals.
      </OrderList>
      <OrderList num={3}>
        Calculate the product of each group of four adjacent numbers and track the maximum product encountered during
        traversal.
      </OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        We loop over each element in the grid, checking the product of four adjacent numbers in all valid directions.
        The result is the largest product found during this traversal.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem11_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Grid Structure**: The grid is represented as a two-dimensional array, with each cell containing a number.
      </OrderList>
      <OrderList num={2}>
        **Traversing Directions**: We consider four directions—horizontal, vertical, and two diagonals.
      </OrderList>
      <OrderList num={3}>
        **Calculating Products**: For each direction, we compute the product of four consecutive numbers.
      </OrderList>
      <OrderList num={4}>
        **Tracking Maximum Product**: We update the maximum product each time a larger product is found.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The largest product of four adjacent numbers in the grid is:</PlainText>
      <CodeComponent
        code={`The largest product of four adjacent numbers is: 70600674
`}
      />
      <PlainText>This result is the correct answer to Problem 11 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem11;
