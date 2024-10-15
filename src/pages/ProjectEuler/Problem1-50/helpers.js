export const problem1_javascript = `let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log("The sum of all the multiples of 3 or 5 below 1000 is:", sum);`;

export const problem2_javascript = `let a = 1, b = 2;
let sum = 0;

while (b <= 4000000) {
  if (b % 2 === 0) {
    sum += b;
  }
  let next = a + b;
  a = b;
  b = next;
}

console.log("The sum of even Fibonacci numbers below 4 million is:", sum);
`;

export const problem3_javascript = `let number = 600851475143;
let largestPrime = 2;

while (number % 2 === 0) {
  number /= 2;
}

// Check for odd factors starting from 3
for (let i = 3; i <= Math.sqrt(number); i += 2) {
  while (number % i === 0) {
    largestPrime = i;
    number /= i;
  }
}

// If number is still greater than 2, then it is a prime factor
if (number > 2) {
  largestPrime = number;
}

console.log("The largest prime factor is:", largestPrime);
`;

export const problem4_javascript = `function isPalindrome(num) {
  let str = num.toString();
  return str === str.split('').reverse().join('');
}

let largestPalindrome = 0;

for (let i = 999; i >= 100; i--) {
  for (let j = i; j >= 100; j--) {
    let product = i * j;
    if (isPalindrome(product) && product > largestPalindrome) {
      largestPalindrome = product;
    }
  }
}

console.log("The largest palindrome made from the product of two 3-digit numbers is:", largestPalindrome);
`;

export const problem5_javascript = `function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

let smallestMultiple = 1;

for (let i = 2; i <= 20; i++) {
  smallestMultiple = lcm(smallestMultiple, i);
}

console.log("The smallest multiple of numbers from 1 to 20 is:", smallestMultiple);
`;

export const problem6_javascript = `let n = 100;

// Sum of squares formula
let sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

// Square of the sum formula
let sum = (n * (n + 1)) / 2;
let squareOfSum = sum * sum;

// Difference
let difference = squareOfSum - sumOfSquares;

console.log("The difference between the square of the sum and the sum of the squares is:", difference);
`;

export const problem7_javascript = `function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findNthPrime(n) {
  let count = 0;
  let num = 1;
  
  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }
  
  return num;
}

console.log("The 10001st prime number is:", findNthPrime(10001));
`;

export const problem8_javascript = `
const numStr = '73167176531330624919225119674426574742355349194934...' + // rest of the 1000-digit number here
               '...';

let maxProduct = 0;

for (let i = 0; i <= numStr.length - 13; i++) {
  let product = 1;
  
  for (let j = 0; j < 13; j++) {
    product *= parseInt(numStr[i + j]);
  }

  if (product > maxProduct) {
    maxProduct = product;
  }
}

console.log("The greatest product of thirteen adjacent digits is:", maxProduct);
`;

export const problem9_javascript = `
let found = false;
let product = 0;

for (let a = 1; a < 1000 / 3; a++) {
  for (let b = a + 1; b < 1000 / 2; b++) {
    let c = 1000 - a - b;
    if (a * a + b * b === c * c) {
      product = a * b * c;
      found = true;
      break;
    }
  }
  if (found) break;
}

console.log("The product of the Pythagorean triplet is:", product);
`;

export const problem10_javascript = `
function sumOfPrimes(limit) {
  let sieve = new Array(limit).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers

  for (let p = 2; p * p <= limit; p++) {
    if (sieve[p]) {
      for (let multiple = p * p; multiple < limit; multiple += p) {
        sieve[multiple] = false;
      }
    }
  }

  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (sieve[i]) {
      sum += i;
    }
  }

  return sum;
}

const result = sumOfPrimes(2000000);
console.log("The sum of all primes below two million is:", result);
`;
