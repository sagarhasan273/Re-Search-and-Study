import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem19_javascript } from './helpers';

function Problem19() {
  return (
    <ProjectEulerBaseContainer problem="19. Counting Sundays">
      <PlainText>
        This problem involves counting how many Sundays fall on the first of the month within a specified date range. To
        solve it, we will simulate the passing of each month and check which days are Sundays.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        **Date Simulation**: We will simulate the dates starting from January 1901 to December 2000.
      </OrderList>
      <OrderList num={2}>
        **Leap Year Calculation**: Understand the rules for leap years to accurately account for February.
      </OrderList>
      <OrderList num={3}>
        **Day Tracking**: Keep track of which day of the week corresponds to the first of each month.
      </OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Initialize the starting day of the week for January 1901.</OrderList>
      <OrderList num={2}>Loop through each year and each month within that year.</OrderList>
      <OrderList num={3}>For each month, check if the first day is a Sunday.</OrderList>
      <OrderList num={4}>Update the day of the week based on the number of days in the month.</OrderList>
      <OrderList num={5}>Count the Sundays that fall on the first of the month.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        The simulation will involve maintaining a counter for Sundays and calculating the number of days in each month,
        adjusting for leap years as necessary.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem19_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Date Simulation**: Start counting from January 1, 1901, which is a Tuesday, using a day counter.
      </OrderList>
      <OrderList num={2}>
        **Day Calculation**: The day of the week is updated based on the number of days in the current month, ensuring
        to handle leap years correctly.
      </OrderList>
      <OrderList num={3}>
        **Sundays Count**: Each time the first day of the month is a Sunday, increment the counter.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The number of Sundays that fell on the first of the month during the twentieth century is:</PlainText>
      <CodeComponent
        code={`The number of Sundays on the first of the month is: 171
`}
      />
      <PlainText>This result is the correct answer to Problem 19 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem19;
