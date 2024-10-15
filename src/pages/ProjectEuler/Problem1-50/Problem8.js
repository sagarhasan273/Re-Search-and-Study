import React from 'react';
import CentralText from '../../../components/CentralText';
import CodeComponent from '../../../components/CodeComponent';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem8_javascript } from './helpers';

function Problem8() {
  return (
    <ProjectEulerBaseContainer problem="8. Largest Product in a Series">
      <PlainText>
        The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
      </PlainText>

      <PlainText>
        Question: Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
      </PlainText>

      <Title>Key Concepts:</Title>
      <OrderList num={1}>
        Adjacent digits: We are looking for a sequence of 13 digits that are next to each other in the given 1000-digit
        number.
      </OrderList>
      <OrderList num={2}>
        Product: We need to calculate the product (multiplication) of each set of 13 adjacent digits and find the
        largest one.
      </OrderList>

      <Title>The 1000-digit Number:</Title>
      <PlainText>
        Here is the 1000-digit number (we will only show a portion here for brevity, but this part will be fully
        displayed in your project):
      </PlainText>
      <CentralText>
        73167176531330624919225119674426574742355349194934 96983520312774506326239578318016984801869478851843
        85861560789112949495459501737958331952853208805511 12540698747158523863050715693290963295227443043557
        66896648950445244523161731856403098711121722383113 62229893423380308135336276614282806444486645238749
        30358907296290491560440772390713810515859307960866 70172427121883998797908792274921901699720888093776
        65727333001053367881220235421809751254540594752243 52584907711670556013604839586446706324415722155397
        53697817977846174064955149290862569321978468622482 83972241375657056057490261407972968652414535100474
        82166370484403199890008895243450658541227588666881 16427171479924442928230863465674813919123162824586
        17866458359124566529476545682848912883142607690042 24219022671055626321111109370544217506941658960408
        07198403850962455444362981230987879927244284909188 84580156166097919133875499200524063689912560717606
        05886116467109405077541002256983155200055935729725 71636269561882670428252483600823257530420752963450
      </CentralText>

      <Title>Objective:</Title>
      <PlainText>
        We need to find the largest product from all possible sets of 13 adjacent digits in the 1000-digit number.
      </PlainText>

      <Title>Step-by-Step Approach:</Title>
      <OrderList num={1}>Read the entire 1000-digit number as a string.</OrderList>
      <OrderList num={2}>
        Loop through every set of 13 adjacent digits, calculate the product, and keep track of the maximum product.
      </OrderList>
      <OrderList num={3}>
        If the current product is greater than the previous maximum, update the maximum product.
      </OrderList>

      <Title>Algorithm Breakdown:</Title>
      <PlainText>
        For each position in the string, we will take 13 consecutive digits, calculate their product, and compare it to
        the maximum found so far.
      </PlainText>

      <Title>JavaScript Code:</Title>
      <CodeComponent code={problem8_javascript} />

      <Title>Explanation:</Title>
      <OrderList num={1}>We use a sliding window of 13 digits and calculate the product for each window.</OrderList>
      <OrderList num={2}>
        We iterate through the string containing the 1000-digit number, shifting the window by one digit each time.
      </OrderList>
      <OrderList num={3}>
        Each time we calculate the product of the current window, if it's greater than the previous maximum, we update
        the maximum.
      </OrderList>

      <Title>Output:</Title>
      <PlainText>The greatest product of thirteen adjacent digits in the 1000-digit number is:</PlainText>
      <CodeComponent
        code={`The greatest product of thirteen adjacent digits is: 23514624000
`}
      />
      <PlainText>This result is the correct answer to Problem 8 of Project Euler.</PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem8;
