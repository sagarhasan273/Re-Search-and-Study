import { Stack } from '@mui/material';
import React from 'react';
import BaseContainer from '../../components/BaseContainer';
import Bold from '../../components/Bold';
import HlText from '../../components/HlText';
import PlainText from '../../components/PlainText';
import Title from '../../components/Title';
import UnorderList from '../../components/UnorderList';

function AdvanceTopics() {
  return (
    <BaseContainer>
      <Stack gap="10px">
        <Title>Advanced JavaScript</Title>
        <PlainText>
          Advanced JavaScript covers a wide array of topics, many of which dive deeper into language fundamentals,
          asynchronous programming, functional programming, and newer language features. Here’s a comprehensive list of
          key advanced JavaScript topics:
        </PlainText>
        <Title>1. JavaScript Fundamentals (Deep Dive)</Title>
        <UnorderList>
          <Bold>Scopes and Closures</Bold>: Block, function, and lexical scoping; closures and how they capture
          variables.
        </UnorderList>
        <UnorderList>
          <Bold>Hoisting</Bold>: How JavaScript handles variable and function declarations.
        </UnorderList>
        <UnorderList>
          <Bold>Execution Context and Call Stack</Bold>: Understanding the creation and execution phases, call stack,
          and stack frames.
        </UnorderList>
        <UnorderList>
          <Bold>
            <HlText>this</HlText> Keyword
          </Bold>
          : Different behaviors of <HlText>this</HlText> in function, method, and arrow functions, and how to control it
          with <HlText>.bind()</HlText>, <HlText>.call()</HlText>, and <HlText>.apply()</HlText>.
        </UnorderList>
        <UnorderList>
          <Bold>Prototypes and Prototype Chain</Bold>: Prototype inheritance, <HlText>__proto__</HlText> vs.{' '}
          <HlText>prototype</HlText>, and the prototype chain.
        </UnorderList>
        <UnorderList>
          <Bold>
            <HlText>new</HlText>, <HlText>class</HlText>, and <HlText>extends</HlText>
          </Bold>
          : Constructor functions, ES6 <HlText>class</HlText>
          syntax, inheritance, and extending classes.
        </UnorderList>
        <UnorderList>
          <Bold>JavaScript Modules (ES6 Modules)</Bold>: <HlText>import</HlText>, <HlText>export</HlText>, and module
          patterns (CommonJS, ES6 modules, etc.).
        </UnorderList>
        <Title>2. Object-Oriented Programming (OOP) in JavaScript</Title>
        <UnorderList>
          Object Creation Patterns: Constructor functions, factory functions, and the
          <HlText>Object.create()</HlText> method.
        </UnorderList>
        <UnorderList>
          Inheritance and Composition: Classical inheritance vs. composition and using patterns like mixins.
        </UnorderList>
        <UnorderList>Encapsulation: Private and public members, using closures for data privacy.</UnorderList>
        <UnorderList>Static Methods and Properties: Defining static members in classes.</UnorderList>
        <UnorderList>Getters and Setters: Accessor properties and methods.</UnorderList>
        <UnorderList>Polymorphism: Achieving polymorphism through method overriding and object delegation.</UnorderList>
        <Title>3. Functional Programming Concepts</Title>
        <UnorderList>Higher-Order Functions: Functions that take or return other functions.</UnorderList>
        <UnorderList>Pure Functions: Functions with no side effects and predictable results.</UnorderList>
        <UnorderList>Immutability: Avoiding mutations and using immutable data structures.</UnorderList>
        <UnorderList>Recursion: Recursive functions and techniques to avoid stack overflow.</UnorderList>
        <UnorderList>Function Composition: Composing functions to build complex logic.</UnorderList>
        <UnorderList>Closures: Using closures to maintain state in functions.</UnorderList>
        <UnorderList>
          Currying and Partial Application: Breaking down functions into smaller functions, binding arguments
          incrementally.
        </UnorderList>
        <Title>4. Asynchronous JavaScript</Title>
        <UnorderList>Callbacks and Callback Hell: How callbacks work and their downsides.</UnorderList>
        <UnorderList>
          <Bold>Promises</Bold>: Creating and chaining promises, <HlText>.then()</HlText>, <HlText>.catch()</HlText>,
          and <HlText>.finally()</HlText>.
        </UnorderList>
        <UnorderList>
          Async/Await: Modern syntax for asynchronous functions, error handling, and awaiting multiple promises.
        </UnorderList>
        <UnorderList>
          Error Handling in Asynchronous Code: Using <HlText>try...catch</HlText> with async functions.
        </UnorderList>
        <UnorderList>
          Concurrency: Managing multiple async tasks with <HlText>Promise.all()</HlText>,{' '}
          <HlText>Promise.race()</HlText>, etc.
        </UnorderList>
        <UnorderList>
          Event Loop and Task Queue: How the JavaScript engine manages asynchronous code execution, microtasks, and
          macrotasks.
        </UnorderList>
        <Title>5. JavaScript and Browser APIs</Title>
        <UnorderList>DOM Manipulation: Selecting, creating, updating, and removing DOM elements.</UnorderList>
        <UnorderList>
          Event Handling and Delegation: Handling events, event propagation, capturing, bubbling, and delegation.
        </UnorderList>
        <UnorderList>LocalStorage and SessionStorage: Storing data in the browser.</UnorderList>
        <UnorderList>Fetch API: Fetching resources, handling responses, and working with JSON.</UnorderList>
        <UnorderList>
          AJAX and XMLHttpRequest: Older asynchronous request techniques and legacy applications.
        </UnorderList>
        <UnorderList>
          Web APIs: Working with APIs like <HlText>WebSockets</HlText>, <HlText>Canvas</HlText>,{' '}
          <HlText>Geolocation</HlText>, <HlText>Notification</HlText>, and <HlText>IntersectionObserver</HlText>.
        </UnorderList>
        <Title>6. Error Handling and Debugging</Title>
        <UnorderList>Error Types: SyntaxError, TypeError, ReferenceError, etc.</UnorderList>
        <UnorderList>
          <HlText>try...catch</HlText> and <HlText>finally</HlText>: Structured error handling and cleanup.
        </UnorderList>
        <UnorderList>Custom Errors: Creating custom error classes.</UnorderList>
        <UnorderList>
          Debugging Techniques: Using browser developer tools, breakpoints, and console logging.
        </UnorderList>
        <Title>7. JavaScript Design Patterns</Title>
        <UnorderList>Singleton Pattern: Ensuring a class has only one instance.</UnorderList>
        <UnorderList>Module Pattern: Creating modular and reusable code.</UnorderList>
        <UnorderList>Factory Pattern: Creating objects based on a given type.</UnorderList>
        <UnorderList>Observer Pattern: Building event-based systems.</UnorderList>
        <UnorderList>Decorator Pattern: Extending functionality without modifying the original structure.</UnorderList>
        <Title>8. Memory Management and Performance Optimization</Title>
        <UnorderList>
          Garbage Collection: Understanding how JavaScript handles memory allocation and deallocation.
        </UnorderList>
        <UnorderList>Memory Leaks: Identifying and avoiding memory leaks.</UnorderList>
        <UnorderList>
          Optimizing Loops and Conditions: Improving performance with efficient looping and branching.
        </UnorderList>
        <UnorderList>
          Debouncing and Throttling: Optimizing event handlers, particularly for scroll and resize events.
        </UnorderList>
        <Title>9. Metaprogramming</Title>
        <UnorderList>
          Reflection: Working with <HlText>Object</HlText> methods to inspect and modify objects.
        </UnorderList>
        <UnorderList>Proxies: Intercepting operations on objects and adding custom behavior.</UnorderList>
        <UnorderList>Symbols: Creating unique and non-enumerable properties for objects.</UnorderList>
        <UnorderList>
          <HlText>eval()</HlText> and <HlText>Function()</HlText>: Executing code dynamically (with caution).
        </UnorderList>
        <Title>10. JavaScript Type System</Title>
        <UnorderList>Primitive vs. Reference Types: How primitive and reference types behave differently.</UnorderList>
        <UnorderList>Type Coercion and Conversion: Implicit and explicit type conversion.</UnorderList>
        <UnorderList>Strict Mode: Enforcing stricter parsing and error handling.</UnorderList>
        <UnorderList>
          Type Checking: Using <HlText>typeof</HlText>, <HlText>instanceof</HlText>, and{' '}
          <HlText>Array.isArray()</HlText>.
        </UnorderList>
        <Title>11. Advanced Topics in ES6+ (ES2015+)</Title>
        <UnorderList>Destructuring: Extracting values from arrays and objects.</UnorderList>
        <UnorderList>Spread and Rest Operators: Simplifying array and object manipulation.</UnorderList>
        <UnorderList>Template Literals: String interpolation with backticks.</UnorderList>
        <UnorderList>Default Parameters: Setting default function parameters.</UnorderList>
        <UnorderList>Optional Chaining: Safely accessing nested object properties.</UnorderList>
        <UnorderList>
          Nullish Coalescing (<HlText>??</HlText>): Handling null and undefined values.
        </UnorderList>
        <UnorderList>
          BigInt: Handling large integers beyond <HlText>Number.MAX_SAFE_INTEGER</HlText>.
        </UnorderList>
        <Title>12. Modern JavaScript Tooling</Title>
        <UnorderList>Transpiling with Babel: Converting ES6+ code to ES5 for compatibility.</UnorderList>
        <UnorderList>Module Bundling: Using tools like Webpack, Rollup, or Parcel.</UnorderList>
        <UnorderList>NPM and Yarn: Dependency management and using npm scripts.</UnorderList>
        <UnorderList>Linters and Formatters: Ensuring code quality with tools like ESLint and Prettier.</UnorderList>
        <PlainText>
          Each of these topics helps deepen your understanding of JavaScript and build the skills necessary for advanced
          programming and development of complex applications.
        </PlainText>
      </Stack>
    </BaseContainer>
  );
}

export default AdvanceTopics;
