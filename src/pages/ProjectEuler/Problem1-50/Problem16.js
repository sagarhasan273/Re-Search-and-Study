import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem16_javascript } from './helpers';

function Problem16() {
  return (
    <ProjectEulerBaseContainer problem="16. Power Digit Sum">
      <PlainText>
        The problem requires us to calculate the sum of the digits of the number formed by raising 2 to the power of
        1000.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>**Exponentiation**: Raising a number to a power.</OrderList>
      <OrderList num={2}>**Digit Extraction**: Converting a number to a string to extract individual digits.</OrderList>
      <OrderList num={3}>**Summation**: Adding the individual digits to get the total sum.</OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Calculate \( 2^{1000} \).</OrderList>
      <OrderList num={2}>Convert the result to a string to access each digit.</OrderList>
      <OrderList num={3}>Sum the individual digits.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        The approach involves computing the value of \( 2^{1000} \), converting it to a string, splitting it into its
        constituent digits, and summing these digits.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem16_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Computing the Power**: We use the exponentiation operator to compute \( 2^{1000} \).
      </OrderList>
      <OrderList num={2}>
        **Extracting Digits**: Converting the result to a string allows us to iterate through each character.
      </OrderList>
      <OrderList num={3}>
        **Summing the Digits**: We convert each character back to a number and sum them to get the final result.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>
        The sum of the digits of the number 2<sup>1000</sup> is:
      </PlainText>
      <CodeComponent
        code={`The sum of the digits of the number 2^1000 is: 1366
`}
      />
      <PlainText>This result is the correct answer to Problem 16 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem16;
