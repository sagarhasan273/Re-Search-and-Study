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