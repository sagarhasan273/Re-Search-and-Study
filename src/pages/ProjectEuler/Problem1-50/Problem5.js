import { Stack } from '@mui/material';
import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import HlText from '../../../components/HlText';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import UnorderList from '../../../components/UnorderList';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem5_javascript } from './helpers';

function Problem5() {
  return (
    <ProjectEulerBaseContainer problem="5. Smallest Multiple">
      <PlainText>
        2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
      </PlainText>
      <PlainText>
        What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
      </PlainText>
      <Title>Key Concept:</Title>
      <PlainText>
        A number is "evenly divisible" by another if the remainder is 0 when you divide them. For example, 12 is
        divisible by 4 because 12 ÷ 4 = 3 with no remainder.
      </PlainText>
      <Title>Objective:</Title>
      <PlainText>
        We need to find the smallest number that can be divided by each of the numbers from 1 to 20 without leaving a
        remainder. This is known as the least common multiple (LCM) of the numbers from 1 to 20.
      </PlainText>
      <Title>Approach:</Title>
      <OrderList num={1}>
        Prime Factorization: Every number can be represented as a product of prime factors. To find the LCM of several
        numbers, we take the highest powers of all primes that appear in the factorization of the numbers.
      </OrderList>
      <OrderList num={2}>
        LCM Strategy: For example, to find the LCM of 8 and 9:
        <UnorderList>
          8=2<sup>3</sup>
        </UnorderList>
        <UnorderList>
          9=3<sup>2</sup> The LCM will take the highest powers of both 2 and 3, so:
        </UnorderList>
        <Stack alignItems="center">
          <span>
            LCM(8,9) = 2<sup>3</sup> x 3<sup>2</sup> = 72
          </span>
        </Stack>
      </OrderList>
      <OrderList num={3}>
        For numbers 1 to 20, we will find the LCM by looking at the highest powers of all primes up to 20.
      </OrderList>
      <Title>Prime Factorization of numbers 1 to 20:</Title>
      <UnorderList>Prime numbers up to 20: 2, 3, 5, 7, 11, 13, 17, 19</UnorderList>
      <UnorderList>
        Find the highest power of each prime that appears:
        <UnorderList>
          2<sup>4</sup> (from 16)
        </UnorderList>
        <UnorderList>
          3<sup>2</sup> (from 9)
        </UnorderList>
        <UnorderList>
          5<sup>1</sup> (from 5)
        </UnorderList>
        <UnorderList>
          7<sup>1</sup> (from 7)
        </UnorderList>
        <UnorderList>
          11<sup>1</sup>
        </UnorderList>
        <UnorderList>
          13<sup>1</sup>
        </UnorderList>
        <UnorderList>
          17<sup>1</sup>
        </UnorderList>
        <UnorderList>
          19<sup>1</sup>
        </UnorderList>
      </UnorderList>
      <PlainText>So the LCM is:</PlainText>
      <Stack alignItems="center">
        <span>
          <PlainText>
            LCM(1,2,…,20) = 2<sup>4</sup> ×3<sup>2</sup> × 5 × 7 × 11 × 13 × 17 × 19
          </PlainText>
        </span>
      </Stack>
      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem5_javascript} language="javascript" title="JavaScript" />
      <Title>Explanation:</Title>
      <OrderList num={1}>
        gcd(a, b): This function computes the greatest common divisor (GCD) of two numbers using the Euclidean
        algorithm.
      </OrderList>
      <OrderList num={2}>
        lcm(a, b): The least common multiple of two numbers is given by the formula:
        <Stack alignItems="center">
          <HlText>LCM(a, b) = (a × b) / GCD(a, b)</HlText>
        </Stack>
      </OrderList>
      <OrderList num={3}>
        for loop (2 to 20): This loop iterates over all the numbers from 2 to 20, calculating the LCM progressively. At
        each step, it updates smallestMultiple to be the LCM of the current number and the previous LCM.
      </OrderList>
      <Title>Output:</Title>
      <PlainText>The smallest number that is divisible by all numbers from 1 to 20 is:</PlainText>
      <CodeComponent
        code={`The smallest multiple of numbers from 1 to 20 is: 232792560
`}
        language="javascript"
        title="JavaScript"
      />
      <PlainText>This is the smallest number that is evenly divisible by each number from 1 to 20.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem5;
