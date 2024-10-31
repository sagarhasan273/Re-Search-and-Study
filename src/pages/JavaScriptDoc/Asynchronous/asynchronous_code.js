export const promises1 = `const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., API request)
  let success = true; // change this to 'false' to simulate a failure

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
`;
