import { Box, Stack } from '@mui/material';
import React from 'react';
import CodeComponent from '../../components/CodeComponent';
import Divider from '../../components/Divider';
import Gap from '../../components/Gap';
import HlText from '../../components/HlText';
import OrderList from '../../components/OrderedList';
import PlainText from '../../components/PlainText';
import Title from '../../components/Title';
import UnorderList from '../../components/UnorderList';
import { introduction_code1, introduction_code2 } from './helpers';

function Introduction() {
  return (
    <Box sx={{ width: '700px', margin: 'auto', mt: '20px' }}>
      <Stack gap="10px">
        <Title>An Introduction to JavaScript</Title>
        <PlainText>
          JavaScript is one of the most widely-used programming languages in the world, primarily known for its role in
          making websites interactive. If you've ever clicked a button on a webpage, filled out a form, or watched
          animations on a site, chances are JavaScript was involved. It is an essential part of the modern web,
          alongside HTML and CSS.
        </PlainText>
        <PlainText>Here’s a beginner-friendly introduction to what JavaScript is and why it's important.</PlainText>
        <Divider />
        <Title>What is JavaScript?</Title>
        <PlainText>
          JavaScript is a high-level, interpreted programming language that is primarily used for building dynamic and
          interactive elements on websites. It allows developers to control the behavior of web pages and can be used
          for both client-side (in the browser) and server-side (on the server) programming.
        </PlainText>
        <PlainText>Key Characteristics of JavaScript:</PlainText>
        <UnorderList>
          High-level: JavaScript is easy to read and write compared to low-level languages (e.g., C, Assembly).
          Developers don't have to manage memory or understand the hardware intricacies.
        </UnorderList>
        <UnorderList>
          Interpreted: JavaScript code is executed line-by-line in the browser or on the server (no need for
          pre-compilation like C++ or Java).
        </UnorderList>
        <UnorderList>
          Event-driven: JavaScript can react to user inputs or other events, such as clicks, form submissions, or mouse
          movements.
        </UnorderList>
        <UnorderList>
          Cross-platform: JavaScript works on all major browsers and platforms without special modifications.
        </UnorderList>
        <Gap gap={2} />
        <Title>Why Learn JavaScript?</Title>
        <PlainText>
          JavaScript plays a crucial role in the modern web. Here are some reasons why learning JavaScript is important:
        </PlainText>
        <OrderList num={1}>
          Web Development: JavaScript is a core technology alongside HTML (which defines the structure of a webpage) and
          CSS (which defines the style and layout).
        </OrderList>
        <OrderList num={2}>
          Interactivity: JavaScript makes websites more interactive, allowing you to create features like form
          validation, dynamic content updates, animations, and games.
        </OrderList>
        <OrderList num={3}>
          Server-side Development: With the rise of Node.js, JavaScript is no longer limited to the browser. You can now
          use JavaScript on the server to handle databases, API requests, and more.
        </OrderList>
        <OrderList num={4}>
          Large Ecosystem: JavaScript has a huge ecosystem of libraries and frameworks, such as React, Angular, Vue.js,
          and Node.js, making it a versatile language for both front-end and back-end development.
        </OrderList>
        <OrderList num={5}>
          Growing Demand: JavaScript developers are in high demand across the tech industry because of its use in web
          development and application development.
        </OrderList>
        <Divider />
        <Title>How JavaScript Works in a Web Page</Title>
        <PlainText>
          When you visit a webpage, JavaScript interacts with HTML and CSS to make the page dynamic. Here's a simplified
          flow:
        </PlainText>
        <OrderList num={1}>
          HTML: This is the structure of the webpage, defining the elements such as headings, paragraphs, forms, and
          buttons.
        </OrderList>
        <OrderList num={2}>
          CSS: This provides the style and layout for the page, such as colors, fonts, margins, and positioning of
          elements.
        </OrderList>
        <OrderList num={3}>
          JavaScript: This is the behavior that makes the webpage interactive. It can respond to user inputs, load new
          data dynamically, or even create animations.
        </OrderList>
        <Gap gap={1} />
        <PlainText>
          Here’s an example to show how JavaScript can modify an HTML element when a button is clicked:
        </PlainText>
        <Gap gap={2} />
        <Title>HTML:</Title>
        <CodeComponent code={introduction_code1} language="html" title="html" />
        <Title>
          JavaScript (in <HlText>script.js</HlText>):
        </Title>
        <CodeComponent code={introduction_code2} language="javascript" title="javascript" />
        <Title>What Happens Here:</Title>
        <UnorderList>The webpage displays the text "Hello, World!" when first loaded.</UnorderList>
        <UnorderList>
          When you click the button, the JavaScript function <HlText>changeGreeting()</HlText> runs, and the text of the
          heading (<HlText>h1</HlText>) changes to "Hello, JavaScript!".
        </UnorderList>
      </Stack>
    </Box>
  );
}

export default Introduction;
