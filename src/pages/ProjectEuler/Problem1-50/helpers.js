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

export const problem11_javascript = `
const grid = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  // [ ... (rest of the grid omitted for brevity) ... ]
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function largestProductInGrid(grid) {
  let maxProduct = 0;

  const numRows = grid.length;
  const numCols = grid[0].length;

  // Helper to compute product of 4 numbers in the given positions
  function getProduct(a, b, c, d) {
    return a * b * c * d;
  }

  // Check horizontal, vertical, and diagonal products
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Horizontal
      if (col + 3 < numCols) {
        const product = getProduct(
          grid[row][col],
          grid[row][col + 1],
          grid[row][col + 2],
          grid[row][col + 3]
        );
        maxProduct = Math.max(maxProduct, product);
      }

      // Vertical
      if (row + 3 < numRows) {
        const product = getProduct(
          grid[row][col],
          grid[row + 1][col],
          grid[row + 2][col],
          grid[row + 3][col]
        );
        maxProduct = Math.max(maxProduct, product);
      }

      // Diagonal (top-left to bottom-right)
      if (row + 3 < numRows && col + 3 < numCols) {
        const product = getProduct(
          grid[row][col],
          grid[row + 1][col + 1],
          grid[row + 2][col + 2],
          grid[row + 3][col + 3]
        );
        maxProduct = Math.max(maxProduct, product);
      }

      // Diagonal (top-right to bottom-left)
      if (row + 3 < numRows && col - 3 >= 0) {
        const product = getProduct(
          grid[row][col],
          grid[row + 1][col - 1],
          grid[row + 2][col - 2],
          grid[row + 3][col - 3]
        );
        maxProduct = Math.max(maxProduct, product);
      }
    }
  }

  return maxProduct;
}

const result = largestProductInGrid(grid);
console.log("The largest product of four adjacent numbers is:", result);
`;

export const problem12_javascript = `
function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += 1; // i is a divisor
            if (i !== n / i) {
                count += 1; // n / i is a divisor
            }
        }
    }
    return count;
}

function findTriangleNumberWithDivisors(limit) {
    let n = 1;
    let triangleNumber = 0;

    while (true) {
        triangleNumber = (n * (n + 1)) / 2; // Generate the nth triangle number
        if (countDivisors(triangleNumber) > limit) {
            return triangleNumber;
        }
        n++;
    }
}

const result = findTriangleNumberWithDivisors(500);
console.log("The first triangle number to have over 500 divisors is:", result);
`;

export const problem13_javascript = `
const numbers = [
    "37107287533902102798797998220837590246510135740250",
    "46376932378659333519902345212526214486434514417621",
    // ... (add all numbers here)
    "53503534226433832795028841971693993751058209749445923078164062862079977824507083903727"
];

function largeSum(arr) {
    let total = BigInt(0); // Using BigInt for large number precision
    for (const num of arr) {
        total += BigInt(num);
    }
    return total.toString().slice(0, 10); // Convert to string and return first 10 digits
}

const result = largeSum(numbers);
console.log("The first ten digits of the sum are:", result);
`;

export const problem14_javascript = `
function collatzSequenceLength(n, memo) {
    if (n < 1) return 0; 
    if (n === 1) return 1; 
    if (memo[n]) return memo[n]; // Return cached value

    // Compute the next term in the sequence
    const nextTerm = n % 2 === 0 ? n / 2 : 3 * n + 1;
    memo[n] = 1 + collatzSequenceLength(nextTerm, memo); // Store result in memo
    return memo[n];
}

function findLongestCollatzSequence(limit) {
    let maxLength = 0;
    let startingNumber = 0;
    const memo = {};

    for (let i = 1; i < limit; i++) {
        const length = collatzSequenceLength(i, memo);
        if (length > maxLength) {
            maxLength = length;
            startingNumber = i; // Update the starting number with the longest sequence
        }
    }
    return startingNumber;
}

const result = findLongestCollatzSequence(1000000);
console.log("The starting number under one million with the longest Collatz sequence is:", result);
`;

export const problem15_javascript = `
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function latticePaths(n) {
    // Calculate the number of unique paths in an n x n grid
    const paths = factorial(2 * n) / (factorial(n) * factorial(n));
    return paths;
}

const gridSize = 20; // 20x20 grid
const result = latticePaths(gridSize);
console.log("The number of routes through a 20×20 grid is:", result);
`;
export const problem16_javascript = `
function sumOfDigits(base, exponent) {
    // Calculate 2^1000
    const number = BigInt(base ** exponent); // Using BigInt for large numbers
    const digits = number.toString(); // Convert to string to access digits

    // Calculate the sum of the digits
    let sum = 0;
    for (let digit of digits) {
        sum += parseInt(digit); // Convert each character back to an integer
    }
    return sum;
}

const base = 2;
const exponent = 1000;
const result = sumOfDigits(base, exponent);
console.log("The sum of the digits of the number 2^1000 is:", result);
`;

export const problem17_javascript = `
function numberToWords(n) {
    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
        'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ones[n % 10] : '');
    if (n < 1000) return ones[Math.floor(n / 100)] + 'hundred' + (n % 100 ? 'and' + numberToWords(n % 100) : '');
    if (n === 1000) return 'onethousand';
}

function countLettersInNumbers(limit) {
    let totalLetters = 0;
    for (let i = 1; i <= limit; i++) {
        const words = numberToWords(i);
        totalLetters += words.length; // Count letters, ignoring spaces and hyphens
    }
    return totalLetters;
}

const result = countLettersInNumbers(1000);
console.log("The total number of letters from 1 to 1000 is:", result);
`;

export const problem18_javascript = `
function maximumPathSum(triangle) {
    // Start from the second to last row and move upward
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            // Update the current cell with the maximum path sum
            triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);
        }
    }
    // The top element now contains the maximum total from top to bottom
    return triangle[0][0];
}

// Triangle representation
const triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

const result = maximumPathSum(triangle);
console.log("The maximum total from top to bottom of the triangle is:", result);
`;

export const problem19_javascript = `
function countSundays() {
    const dayOfWeek = 0; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    let count = 0;
    let currentDay = 2; // 1 Jan 1901 is a Tuesday, which is 2
    
    // Days in months for regular and leap years
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    for (let year = 1901; year <= 2000; year++) {
        for (let month = 0; month < 12; month++) {
            // Check if the first day of the month is a Sunday
            if (currentDay === dayOfWeek) {
                count++;
            }
            
            // Calculate the number of days in the month
            let daysInMonth = monthDays[month];
            
            // Check for leap year and adjust February
            if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
                daysInMonth++;
            }
            
            // Update the current day for the next month
            currentDay = (currentDay + daysInMonth) % 7;
        }
    }
    
    return count;
}

const result = countSundays();
console.log("The number of Sundays on the first of the month is:", result);
`;

export const problem20_javascript = `
function factorialDigitSum(n) {
    // Using BigInt to handle large numbers like 100!
    let factorial = BigInt(1);

    // Calculate factorial of n
    for (let i = 2; i <= n; i++) {
        factorial *= BigInt(i);
    }

    // Convert factorial to string and sum the digits
    const sum = factorial
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit), 0);

    return sum;
}

const result = factorialDigitSum(100);
console.log("The sum of the digits in 100! is:", result);
`;
export const problem21_javascript = `
function sumOfDivisors(num) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum;
}

function findAmicableNumbers(limit) {
    let sumAmicable = 0;
    
    for (let a = 2; a < limit; a++) {
        let b = sumOfDivisors(a);
        if (b > a && b < limit && sumOfDivisors(b) === a) {
            sumAmicable += a + b;
        }
    }
    
    return sumAmicable;
}

const result = findAmicableNumbers(10000);
console.log("The sum of all amicable numbers under 10,000 is:", result);
`;

export const problem22_javascript = `
const fs = require('fs');

// Function to calculate alphabetical value of a name
function alphabeticalValue(name) {
    return name
        .toUpperCase()
        .split('')
        .reduce((sum, char) => sum + (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1), 0);
}

// Function to calculate total name scores
function totalNameScores(names) {
    // Sort the names alphabetically
    names.sort();

    // Calculate the total score by summing each name's score
    let totalScore = 0;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const score = alphabeticalValue(name) * (i + 1); // Multiply by position (i+1)
        totalScore += score;
    }

    return totalScore;
}

// Reading the names from the file
fs.readFile('p022_names.txt', 'utf8', (err, data) => {
    if (err) throw err;

    // Removing quotes and splitting names into an array
    const names = data.split(',').map(name => name.replace(/"/g, ''));

    const result = totalNameScores(names);
    console.log("The total of all the name scores is:", result);
});
`;

export const problem23_javascript = `
const limit = 28123;

// Function to find the sum of proper divisors
function sumOfDivisors(num) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum;
}

// Find all abundant numbers
function getAbundantNumbers(limit) {
    const abundantNumbers = [];
    for (let i = 12; i <= limit; i++) {
        if (sumOfDivisors(i) > i) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
}

// Find the sum of all numbers that cannot be written as the sum of two abundant numbers
function sumOfNonAbundantSums() {
    const abundantNumbers = getAbundantNumbers(limit);
    const canBeWrittenAsAbundantSum = Array(limit + 1).fill(false);

    // Mark all numbers that can be written as the sum of two abundant numbers
    for (let i = 0; i < abundantNumbers.length; i++) {
        for (let j = i; j < abundantNumbers.length; j++) {
            const sum = abundantNumbers[i] + abundantNumbers[j];
            if (sum <= limit) {
                canBeWrittenAsAbundantSum[sum] = true;
            } else {
                break;
            }
        }
    }

    // Sum all numbers that cannot be written as the sum of two abundant numbers
    let totalSum = 0;
    for (let i = 1; i <= limit; i++) {
        if (!canBeWrittenAsAbundantSum[i]) {
            totalSum += i;
        }
    }

    return totalSum;
}

const result = sumOfNonAbundantSums();
console.log("The sum of all non-abundant sums is:", result);
`;
