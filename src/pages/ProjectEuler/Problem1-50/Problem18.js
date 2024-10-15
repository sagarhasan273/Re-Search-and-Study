import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem18_javascript } from './helpers';

function Problem18() {
  return (
    <ProjectEulerBaseContainer problem="18. Maximum Path Sum I">
      <PlainText>
        The goal of this problem is to find the maximum total from top to bottom of a triangle of numbers. We need to
        traverse the triangle, selecting adjacent numbers at each step, to maximize the sum.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Dynamic Programming**: A method to break down problems into simpler subproblems and store their results.
      </OrderList>
      <OrderList num={2}>
        **Path Traversal**: Understanding how to navigate through the triangle to find the maximum sum.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Represent the triangle as a 2D array for easier access to elements.</OrderList>
      <OrderList num={2}>
        Starting from the second-to-last row, calculate the maximum path sum for each element by adding it to the
        maximum of the adjacent numbers in the row below.
      </OrderList>
      <OrderList num={3}>Continue this process upwards until you reach the top of the triangle.</OrderList>
      <OrderList num={4}>The value at the top of the triangle will be the maximum total path sum.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        By modifying the triangle in-place to hold the maximum sums, we can avoid the need for additional space and
        efficiently calculate the result.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem18_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Dynamic Programming**: Starting from the bottom, we update each cell in the triangle with the maximum path sum
        possible to that cell.
      </OrderList>
      <OrderList num={2}>
        **Adjacent Number Selection**: For each number, we consider the two numbers directly below it in the next row
        and add the maximum of these to the current number.
      </OrderList>
      <OrderList num={3}>
        **Final Result**: The topmost element will eventually hold the maximum total path sum from top to bottom.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The maximum total from top to bottom of the triangle is:</PlainText>
      <CodeComponent
        code={`The maximum total from top to bottom of the triangle is: 1074
`}
      />
      <PlainText>This result is the correct answer to Problem 18 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem18;
