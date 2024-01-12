// components/QuestionsList.js
import React from 'react';

const QuestionsList = ({ questions }:any) => (
  <ul>
    {questions.map((question:any) => (
      <li key={question.id}>{question.question}</li>
    ))}
  </ul>
);

export default QuestionsList;
