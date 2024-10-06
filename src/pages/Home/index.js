/* eslint-disable max-len */
import { Stack } from '@mui/material';
import React from 'react';
import CardComponent from '../../components/CardComponent';

function Home() {
  return (
    <Stack
      flexDirection="row"
      className="scrollbarhide"
      justifyContent="center"
      sx={{ m: 'auto', overflowY: 'scroll', maxWidth: '700px', height: '100%', flexWrap: 'wrap' }}
    >
      <CardComponent
        heading="Project Euler"
        para="Challenge your problem-solving skills with Project Euler. Tackle math-based coding puzzles and enhance your logic with each solution."
      />
      <CardComponent
        heading="LeetCode"
        para="Go to my LeetCode profile! I'm focused on improving my coding skills and preparing for technical interviews through a variety of challenges."
      />
      <CardComponent
        heading="JavaScript"
        para="Unlock the power of JavaScript with easy-to-follow tutorials. Build real-world skills and boost your coding confidence."
      />
      <CardComponent
        heading="React"
        para="Learn React by building interactive, real-world applications. Master component-based development with step-by-step tutorials."
      />
      <CardComponent
        heading="Node"
        para="Master backend development with Node.js. Build fast, scalable server-side applications through hands-on coding and real-world projects."
      />
      <CardComponent
        heading="DOM"
        para="Explore the Document Object Model (DOM) to manipulate web pages dynamically. Learn how to interact with HTML and CSS using JavaScript for seamless user experiences."
      />
    </Stack>
  );
}

export default Home;
