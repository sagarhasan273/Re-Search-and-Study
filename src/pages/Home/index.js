/* eslint-disable max-len */
import { Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../../components/CardComponent';
import { pageType } from './helper';

function Home() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === 'github') {
      window.open('https://github.com/sagarhasan273/', '_blank');
      return;
    }
    if (type === 'leetcode') {
      window.open('https://leetcode.com/u/sagarhasan273/', '_blank');
      return;
    }
    pageType.forEach((item) => {
      if (type === item?.pageName) {
        navigate(`/Re-Search-and-Study/${item?.pathname}`, {
          state: {
            pageName: item?.pageName,
          },
        });
      }
    });
  };

  return (
    <Stack
      flexDirection="row"
      className="scrollbarhide"
      justifyContent="center"
      sx={{ m: 'auto', overflowY: 'scroll', maxWidth: '700px', height: '100%', flexWrap: 'wrap' }}
    >
      <CardComponent
        onClick={() => handleClick('ds_saga_kit')}
        heading="DS Saga Kit"
        para="Go to my LeetCode profile! I'm focused on improving my coding skills and preparing for technical interviews through a variety of challenges."
      />
      <CardComponent
        onClick={() => handleClick('leetcode')}
        heading="LeetCode"
        para="Go to my LeetCode profile! I'm focused on improving my coding skills and preparing for technical interviews through a variety of challenges."
      />
      <CardComponent
        onClick={() => handleClick('project_euler')}
        heading="Project Euler"
        para="Challenge your problem-solving skills with Project Euler. Tackle math-based coding puzzles and enhance your logic with each solution."
      />
      <CardComponent
        onClick={() => handleClick('github')}
        heading="GitHub"
        para="Harness the power of collaborative coding with my GitHub project, where developers come together to innovate and solve real-world problems."
      />
      <CardComponent
        onClick={() => handleClick('javascript')}
        heading="JavaScript"
        para="Unlock the power of JavaScript with easy-to-follow tutorials. Build real-world skills and boost your coding confidence."
      />
      <CardComponent
        onClick={() => handleClick('react')}
        heading="React"
        para="Learn React by building interactive, real-world applications. Master component-based development with step-by-step tutorials."
        disabled
      />
      <CardComponent
        onClick={() => handleClick('node')}
        heading="Node"
        para="Master backend development with Node.js. Build fast, scalable server-side applications through hands-on coding and real-world projects."
        disabled
      />
      <CardComponent
        onClick={() => handleClick('dom')}
        heading="DOM"
        para="Explore the Document Object Model (DOM) to manipulate web pages dynamically. Learn how to interact with HTML and CSS using JavaScript for seamless user experiences."
        disabled
      />
    </Stack>
  );
}

export default Home;
