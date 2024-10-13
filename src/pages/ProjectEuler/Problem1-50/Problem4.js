import React from 'react';
import CodeComponent from '../../../components/CodeComponent';
import HlText from '../../../components/HlText';
import OrderList from '../../../components/OrderedList';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import UnorderList from '../../../components/UnorderList';
import ProjectEulerBaseContainer from '../@common/ProjectEulerBaseContainer';
import { problem4_javascript } from './helpers';

function Problem4() {
  return (
    <ProjectEulerBaseContainer problem="4. Largest Palindrome Product">
      <PlainText>
        A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit
        numbers is 9009 = 91 x 99.
      </PlainText>
      <PlainText>Find the largest palindrome made from the product of two 3-digit numbers.</PlainText>
      <Title>Understanding Palindromes:</Title>
      <PlainText>A palindrome is a number that reads the same forward and backward. For example:</PlainText>
      <UnorderList>121 is a palindrome.</UnorderList>
      <UnorderList>9009 is a palindrome because it reads the same from left to right and right to left.</UnorderList>
      <Title>Objective:</Title>
      <PlainText>
        We need to find the largest palindrome that can be obtained by multiplying two 3-digit numbers (ranging from 100
        to 999).
      </PlainText>
      <Title>Approach:</Title>
      <OrderList num={1}>Check all products of two 3-digit numbers.</OrderList>
      <OrderList num={2}>Determine if the product is a palindrome.</OrderList>
      <OrderList num={3}>Keep track of the largest palindrome encountered.</OrderList>
      <Title>Strategy:</Title>
      <PlainText>
        We’ll use a brute-force approach to multiply all pairs of 3-digit numbers and check if the product is a
        palindrome. We'll also optimize it by starting from the largest numbers and moving downward.
      </PlainText>
      <CodeComponent code={problem4_javascript} language="javascript" title="JavaScript" />
      <Title>Explanation:</Title>
      <OrderList num={1}>
        <HlText>isPalindrome(num)</HlText>: This function checks if a number is a palindrome. It converts the number to
        a string, reverses it, and checks if the reversed string is the same as the original.
      </OrderList>
      <OrderList num={2}>
        <HlText>{`for (let i = 999; i >= 100; i--)`}</HlText>: This loop starts from the largest 3-digit number (999)
        and works its way down to 100. The second loop also starts from i to avoid redundant calculations (since 𝑖 × 𝑗
        is the same as 𝑗 × 𝑖).
      </OrderList>
      <OrderList num={3}>
        Check for palindrome and update the largest palindrome: For each product, the code checks if it’s a palindrome
        and if it's larger than the previously found palindromes. If both conditions are true, the product is stored as
        the <HlText>largestPalindrome</HlText>.
      </OrderList>
      <Title>Output:</Title>
      <PlainText>The largest palindrome made from the product of two 3-digit numbers is:</PlainText>
      <CodeComponent
        code={`The largest palindrome made from the product of two 3-digit numbers is: 906609
`}
        language="javascript"
        title="JavaScript"
      />
      <PlainText>
        This result is obtained by multiplying 913 × 993 = 906609 913×993=906609, which is the largest palindrome from
        the product of two 3-digit numbers.
      </PlainText>
    </ProjectEulerBaseContainer>
  );
}

export default Problem4;
