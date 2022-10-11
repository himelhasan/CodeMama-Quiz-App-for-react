import React from "react";
import QuizOption from "./QuizOption";

const QuizCard = ({ quizSingle }) => {
  console.log(quizSingle);
  const { correctAnswer, options, question } = quizSingle;
  console.log(options);
  return (
    <div className="bg-slate-50 border-2 p-2 m-2 border rounded">
      <h2 className="pb-3">{question}</h2>
      <div>
        {options.map((option) => (
          <QuizOption option={option}> </QuizOption>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
