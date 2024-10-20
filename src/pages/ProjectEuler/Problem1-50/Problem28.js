import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem24_javascript } from './helpers';

function Problem24() {
  return (
    <ProjectEulerBaseContainer problem="24. Lexicographic Permutations">
      <PlainText>
        The goal of this problem is to find the millionth lexicographic permutation of the digits 0 through 9.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>**Permutation**: A rearrangement of elements in a particular order.</OrderList>
      <OrderList num={2}>
        **Lexicographic Order**: The same order as alphabetical order, but applied to numbers. For example, the digits
        0, 1, 2 would have the following lexicographic permutations: 012, 021, 102, 120, 201, 210.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>
        **Step 1**: We need to generate the millionth permutation of the digits 0 through 9.
      </OrderList>
      <OrderList num={2}>
        **Step 2**: Instead of generating all permutations (which is inefficient), we use a mathematical approach to
        directly find the millionth permutation by leveraging factorial values.
      </OrderList>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem24_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Factorial Math**: The total number of permutations of a set of `n` digits is `n!`. For example, there are `3!
        = 6` permutations of the digits 0, 1, 2. By knowing how many permutations can start with a certain digit, we can
        directly determine which digit should be at each position of the desired permutation.
      </OrderList>
      <OrderList num={2}>
        **Iterative Approach**: At each step, we determine which digit should be at the current position by calculating
        how many permutations start with that digit.
      </OrderList>
      <OrderList num={3}>
        **Factorial-based Calculation**: The factorial of remaining digits allows us to skip blocks of permutations and
        reach the exact millionth permutation.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The millionth lexicographic permutation of the digits 0 through 9 is:</PlainText>
      <CodeComponent
        code={`The millionth permutation is: 2783915460
`}
      />
    </ProjectEulerBaseContainer>
  );
}

export default Problem24;
