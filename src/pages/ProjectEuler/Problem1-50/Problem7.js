import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem7_javascript } from './helpers';

function Problem7() {
  return (
    <ProjectEulerBaseContainer problem="7. 10001st Prime">
      <PlainText>
        By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
      </PlainText>
      <PlainText>Question: What is the 10,001st prime number?</PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>Prime number: A number that is only divisible by 1 and itself.</OrderList>

      <Title>Objective:</Title>
      <PlainText>We need to find the 10,001st prime number.</PlainText>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Start with the number 2, the first prime number.</OrderList>
      <OrderList num={2}>Check subsequent numbers to see if they are prime.</OrderList>
      <OrderList num={3}>
        Keep a count of how many primes have been found, and stop when the 10,001st prime is identified.
      </OrderList>

      <Title>Prime Checking Algorithm:</Title>
      <PlainText>
        To check if a number is prime, we check if it is divisible by any prime numbers smaller than its square root.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem7_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        Prime checking: We use a function to check if a number is prime by testing divisibility.
      </OrderList>
      <OrderList num={2}>
        Loop: A loop runs, incrementing numbers and checking if they are prime until we reach the 10,001st prime.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>For the 10,001st prime number, the result is:</PlainText>
      <CodeComponent
        code={`The 10,001st prime number is: 104743
`}
      />
      <PlainText>This result is the correct answer to Problem 7 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem7;
