import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem22_javascript } from './helpers';

function Problem22() {
  return (
    <ProjectEulerBaseContainer problem="22. Names Scores">
      <PlainText>
        This problem involves reading a list of names from a file, sorting them alphabetically, and then calculating a
        score for each name based on its alphabetical value and position in the list.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Alphabetical Value**: The alphabetical value of a name is the sum of the values of its letters, where A = 1, B
        = 2, and so on.
      </OrderList>
      <OrderList num={2}>
        **Name Score**: The score of a name is calculated by multiplying its alphabetical value by its position in the
        sorted list.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Read the file containing the names and split it into an array of names.</OrderList>
      <OrderList num={2}>Sort the names alphabetically.</OrderList>
      <OrderList num={3}>
        Calculate the alphabetical value for each name by summing the values of its characters.
      </OrderList>
      <OrderList num={4}>
        Multiply the alphabetical value of each name by its position in the sorted list to obtain the name score.
      </OrderList>
      <OrderList num={5}>Sum all the name scores to get the final result.</OrderList>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem22_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>**Reading the Names**: The names are read from a file and split into an array.</OrderList>
      <OrderList num={2}>
        **Sorting**: The names are sorted alphabetically using JavaScript's `sort()` function.
      </OrderList>
      <OrderList num={3}>
        **Calculating Alphabetical Value**: For each name, the alphabetical value is calculated by converting each
        letter to its corresponding position in the alphabet.
      </OrderList>
      <OrderList num={4}>
        **Calculating the Name Score**: The score is calculated by multiplying the alphabetical value by the position of
        the name in the sorted list.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The total of all the name scores is:</PlainText>
      <CodeComponent
        code={`The total of all the name scores is: 871198282
`}
      />
    </ProjectEulerBaseContainer>
  );
}

export default Problem22;
