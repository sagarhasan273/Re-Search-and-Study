import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem17_javascript } from './helpers';

function Problem17() {
  return (
    <ProjectEulerBaseContainer problem="17. Number Letter Counts">
      <PlainText>
        The task is to calculate the total number of letters used when all numbers from 1 to 1000 are written out in
        words. Spaces and hyphens are not counted, and we only focus on the letter counts.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>**Number Representation**: Understanding how numbers are represented in words.</OrderList>
      <OrderList num={2}>
        **Counting Letters**: Counting the characters in the string representation of each number.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Create a mapping for numbers to their word representations.</OrderList>
      <OrderList num={2}>Iterate through all numbers from 1 to 1000.</OrderList>
      <OrderList num={3}>For each number, convert it to its word representation and count the letters.</OrderList>
      <OrderList num={4}>Sum all the letter counts to get the final result.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        Each number can be converted to words based on its value. The counting of letters involves stripping out spaces
        and hyphens. We consider special cases for numbers like "hundred" and "thousand" as well.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem17_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Number Mapping**: We create a dictionary that maps numbers to their corresponding word forms.
      </OrderList>
      <OrderList num={2}>
        **Iterating Numbers**: We loop through each number and utilize a function to convert the number to its word
        form.
      </OrderList>
      <OrderList num={3}>
        **Counting Letters**: After obtaining the word form, we count the letters and accumulate the total.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The total number of letters used in writing out the numbers from 1 to 1000 is:</PlainText>
      <CodeComponent
        code={`The total number of letters from 1 to 1000 is: 21124
`}
      />
      <PlainText>This result is the correct answer to Problem 17 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem17;
