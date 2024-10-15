import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem10_javascript } from './helpers';

function Problem10() {
  return (
    <ProjectEulerBaseContainer problem="10. Summation of Primes">
      <PlainText>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.</PlainText>

      <PlainText>Question: Find the sum of all the primes below two million.</PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        Prime Number: A prime number is a number greater than 1 that has no divisors other than 1 and itself.
      </OrderList>
      <OrderList num={2}>Summation: We need to calculate the sum of all prime numbers below 2,000,000.</OrderList>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>
        Use the **Sieve of Eratosthenes** to find all prime numbers below 2,000,000. This is a very efficient algorithm
        for finding primes.
      </OrderList>
      <OrderList num={2}>Sum up all the prime numbers we found using the sieve.</OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        The **Sieve of Eratosthenes** is a well-known algorithm that efficiently finds all prime numbers below a given
        limit by iteratively marking the multiples of each prime starting from 2.
      </PlainText>

      <OrderList num={1}>
        We start with an array of booleans representing numbers from 0 to 2,000,000, all set to `true` initially,
        meaning we assume every number is prime.
      </OrderList>
      <OrderList num={2}>
        Beginning with 2, the smallest prime, we mark all multiples of 2 as non-prime by setting their corresponding
        boolean values to `false`.
      </OrderList>
      <OrderList num={3}>
        We repeat this process for the next number that is still marked as prime, which will be 3, and mark all its
        multiples.
      </OrderList>
      <OrderList num={4}>This continues until we process all numbers up to the square root of 2,000,000.</OrderList>
      <OrderList num={5}>
        Finally, we sum all the numbers that are still marked as prime in the boolean array.
      </OrderList>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem10_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>
        **Array Setup**: We create a boolean array where each index represents whether that number is prime or not.
      </OrderList>
      <OrderList num={2}>
        **Sieve Process**: Starting from 2, we mark all multiples of each prime number as non-prime.
      </OrderList>
      <OrderList num={3}>
        **Summing Primes**: After running the sieve, the numbers that are still marked as `true` in the array are
        primes. We sum these numbers.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The sum of all the primes below two million is:</PlainText>
      <CodeComponent
        code={`The sum of all primes below two million is: 142913828922
`}
      />
      <PlainText>This result is the correct answer to Problem 10 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem10;
