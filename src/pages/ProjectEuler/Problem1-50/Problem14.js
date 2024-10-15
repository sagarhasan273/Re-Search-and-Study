import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem14_javascript } from './helpers';

function Problem14() {
  return (
    <ProjectEulerBaseContainer problem="14. Longest Collatz Sequence">
      <PlainText>
        The Collatz sequence is defined by the iterative rules for positive integers. We need to find the starting
        number under one million that produces the longest sequence.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Collatz Sequence**: A sequence generated from a starting number based on its parity.
      </OrderList>
      <OrderList num={2}>
        **Memoization**: To optimize the solution, we will store already computed sequence lengths.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Iterate through all starting numbers up to one million.</OrderList>
      <OrderList num={2}>For each number, generate the Collatz sequence and count the terms.</OrderList>
      <OrderList num={3}>Keep track of the maximum length and the corresponding starting number.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        We will create a function to calculate the length of the Collatz sequence for a given starting number. To
        optimize, we will use memoization to store results of previously computed lengths.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem14_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Generating Sequences**: We calculate the sequence length for each starting number up to one million.
      </OrderList>
      <OrderList num={2}>
        **Storing Results**: Use an object to store lengths of sequences for previously calculated starting numbers.
      </OrderList>
      <OrderList num={3}>
        **Finding Maximum**: Compare lengths to find the starting number with the longest sequence.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The starting number under one million that produces the longest Collatz sequence is:</PlainText>
      <CodeComponent
        code={`The starting number under one million with the longest Collatz sequence is: 837799
`}
      />
      <PlainText>This result is the correct answer to Problem 14 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem14;
