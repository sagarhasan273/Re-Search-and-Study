import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem23_javascript } from './helpers';

function Problem23() {
  return (
    <ProjectEulerBaseContainer problem="23. Non-abundant Sums">
      <PlainText>
        An abundant number is a number whose proper divisors sum up to a value greater than the number itself. This
        problem asks us to find the sum of all numbers which cannot be expressed as the sum of two abundant numbers.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Abundant Numbers**: A number is abundant if the sum of its proper divisors is greater than the number.
      </OrderList>
      <OrderList num={2}>**Proper Divisors**: Divisors of a number excluding the number itself.</OrderList>
      <OrderList num={3}>
        **Non-Abundant Sum**: A number that cannot be written as the sum of two abundant numbers.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>**Step 1**: Find all the abundant numbers less than or equal to 28123.</OrderList>
      <OrderList num={2}>
        **Step 2**: Create a boolean array to mark all numbers that can be written as the sum of two abundant numbers.
      </OrderList>
      <OrderList num={3}>
        **Step 3**: Sum all the numbers that cannot be written as the sum of two abundant numbers.
      </OrderList>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem23_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>**Step 1**: We identify all the abundant numbers below 28123.</OrderList>
      <OrderList num={2}>
        **Step 2**: Using two loops, we mark numbers that can be written as the sum of two abundant numbers.
      </OrderList>
      <OrderList num={3}>
        **Step 3**: We sum all the numbers that are not marked as being the sum of two abundant numbers.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The sum of all numbers that cannot be written as the sum of two abundant numbers is:</PlainText>
      <CodeComponent
        code={`The sum of all non-abundant sums is: 4179871
`}
      />
    </ProjectEulerBaseContainer>
  );
}

export default Problem23;
