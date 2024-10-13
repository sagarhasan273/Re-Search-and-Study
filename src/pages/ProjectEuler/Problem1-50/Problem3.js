import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import HlText from '../../../components/HlText';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem3_javascript } from './helpers';

function Problem3() {
  return (
    <ProjectEulerBaseContainer problem="3. Largest Prime Factor">
      <PlainText>The prime factors of 13195 are 5, 7, 13 and 29.</PlainText>
      <PlainText>What is the largest prime factor of the number 600851475143?</PlainText>
      <Title>Understanding Prime Factorization:</Title>
      <PlainText>
        A prime factor is a factor of a number that is also a prime number. Prime numbers are numbers greater than 1
        that have no divisors other than 1 and themselves (e.g., 2, 3, 5, 7, 11, etc.).
      </PlainText>
      <PlainText>The goal is to find the largest prime number that divides 600851475143.</PlainText>
      <Title>Steps to Solve:</Title>
      <OrderList num={1}>Factorize the number: Find all factors of 600851475143.</OrderList>
      <OrderList num={2}>Check for primality: Determine which factors are prime.</OrderList>
      <OrderList num={3}>Find the largest prime factor.</OrderList>
      <Title>Strategy to Solve:</Title>
      <PlainText>
        To solve this efficiently, we can start dividing the number by the smallest prime (2), and then continue
        dividing by other primes (3, 5, 7, etc.) until the number itself is reduced to 1. The largest prime factor
        encountered will be the result.
      </PlainText>
      <PlainText>Here’s how we can implement this in JavaScript:</PlainText>
      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem3_javascript} language="javascript" title="JavaScript" />
      <Title>Explanation:</Title>
      <OrderList num={1}>
        Divide by 2: We repeatedly divide the number by 2 (the smallest prime number) to handle all factors of 2.
      </OrderList>
      <OrderList num={2}>
        Check odd numbers: Since all even factors are handled, we start checking odd numbers from 3 upwards. We divide
        the number by each factor until it's no longer divisible.
      </OrderList>
      <OrderList num={3}>
        Update largestPrime: Whenever we find a factor, we update <HlText>largestPrime</HlText> to hold the largest
        prime factor found so far.
      </OrderList>
      <OrderList num={4}>
        Final check: If the remaining number after all divisions is greater than 2, it must be a prime number, and we
        set it as the largest prime factor.
      </OrderList>
      <Title>Output</Title>
      <PlainText>The result for the given number (600851475143) will be:</PlainText>
      <CodeComponent
        code={`The largest prime factor is: 6857
`}
        language="javascript"
        title="JavaScript"
      />
      <PlainText>
        This approach efficiently finds the largest prime factor of large numbers using trial division and avoids
        unnecessary calculations by only checking odd factors after 2.
      </PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem3;
