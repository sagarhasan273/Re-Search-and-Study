import React from 'react';
import BaseContainer from '../../../components/BaseContainer';
import CodeComponent from '../../../components/CodeComponent';
import HlText from '../../../components/HlText';
import PlainText from '../../../components/PlainText';
import Title from '../../../components/Title';
import UnorderList from '../../../components/UnorderList';
import { promises1 } from './asynchronous_code';

function Promises() {
  return (
    <BaseContainer>
      <Title>Promises in JavaScript</Title>
      <PlainText>
        In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous
        operation and its resulting value. Promises help manage asynchronous operations, such as fetching data from an
        API or reading a file, by allowing you to write code that is both cleaner and more efficient.
      </PlainText>
      <Title>1. Creating a Promise</Title>
      <PlainText>
        A Promise is created by using the <HlText>Promise</HlText> constructor and passing it a function (called the
        "executor function") with two parameters: <HlText>resolve</HlText> and <HlText>reject</HlText>.
      </PlainText>
      <UnorderList>
        <HlText>resolve</HlText>: Marks the Promise as "fulfilled" and can pass a result.
      </UnorderList>
      <UnorderList>
        <HlText>rejected</HlText>: Marks the Promise as "rejected" and can pass an error.
      </UnorderList>
      <CodeComponent code={promises1} />
    </BaseContainer>
  );
}

export default Promises;
