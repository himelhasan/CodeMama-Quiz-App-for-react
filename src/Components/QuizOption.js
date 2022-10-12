import React from "react";

const QuizOption = ({ option, answerHandler }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          answerHandler(e);
        }}
        className={`w-full flex items-center text-left pl-4 rounded border border-gray-200 bg-white px-5 py-3 rounded-lg dark:border-gray-700 my-2 `}
      >
        <p> {option}</p>
      </button>
    </div>
  );
};

export default QuizOption;
