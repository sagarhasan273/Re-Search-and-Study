import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem20_javascript } from './helpers';

function Problem20() {
  return (
    <ProjectEulerBaseContainer problem="20. Factorial Digit Sum">
      <PlainText>
        In this problem, we are tasked with calculating the factorial of 100 and then finding the sum of its digits.
        Since 100! results in a very large number, special consideration for handling large integers is necessary.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Factorial Calculation**: Calculate the factorial of a number, which is the product of all integers from 1 to
        that number.
      </OrderList>
      <OrderList num={2}>
        **Handling Large Numbers**: Use data types that can accommodate very large values, such as BigInt in JavaScript.
      </OrderList>
      <OrderList num={3}>
        **Digit Sum Calculation**: Convert the large number to a string to iterate over each digit and sum them.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>
        Calculate the factorial of 100 using a loop or a suitable algorithm for large numbers.
      </OrderList>
      <OrderList num={2}>Convert the factorial result to a string to enable iteration over each digit.</OrderList>
      <OrderList num={3}>Sum the digits by iterating through the string representation of the factorial.</OrderList>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem20_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Factorial Calculation**: We calculate 100! using a loop while maintaining the result in a BigInt variable.
      </OrderList>
      <OrderList num={2}>
        **String Conversion**: The result is converted to a string to allow easy access to each digit.
      </OrderList>
      <OrderList num={3}>
        **Digit Summation**: Each digit is parsed back to an integer and summed up to obtain the final result.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The sum of the digits in 100! is:</PlainText>
      <CodeComponent
        code={`The sum of the digits in 100! is: 648
`}
      />
      <PlainText>This result is the correct answer to Problem 20 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem20;
