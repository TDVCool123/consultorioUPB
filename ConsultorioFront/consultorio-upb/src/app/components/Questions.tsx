// components/QuestionsList.js
import React from 'react';

const QuestionsList = ({ questions }:any , {currentQuestion}:any) => {
  return (
    <div>
      {questions.map((question:any) => (
              <div
                key={questions.id}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
              >
                <input type="radio" className="w-6 h-6 bg-black" />
                <p className="ml-6 text-white">{question.question}</p>
              </div>
            ))}
    </div>
  );
};

export default QuestionsList;
