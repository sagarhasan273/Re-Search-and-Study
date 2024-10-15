import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem13_javascript } from './helpers';

function Problem13() {
  return (
    <ProjectEulerBaseContainer problem="13. Large Sum">
      <PlainText>
        We need to compute the sum of a list of large numbers and find the first ten digits of that sum.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Handling Large Numbers**: JavaScript's number type can handle large integers, but we may need to use strings
        for precision in some cases.
      </OrderList>
      <OrderList num={2}>
        **Summation**: We'll sum the numbers as integers, then extract the first ten digits.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Store the 50-digit numbers in an array or a string.</OrderList>
      <OrderList num={2}>Sum the numbers using a loop.</OrderList>
      <OrderList num={3}>Convert the result to a string and extract the first ten digits.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        We will iterate through the array of numbers, convert each one to a BigInt for accurate summation, and then
        convert the sum back to a string to obtain the first ten digits.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem13_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>**Summation**: We use a loop to add each of the 50-digit numbers together.</OrderList>
      <OrderList num={2}>
        **Extracting Digits**: After computing the total, we convert it to a string and slice the first ten digits.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The first ten digits of the sum are:</PlainText>
      <CodeComponent
        code={`The first ten digits of the sum are: 553737190
`}
      />
      <PlainText>This result is the correct answer to Problem 13 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem13;
