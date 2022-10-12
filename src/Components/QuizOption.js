import React from "react";
import toast from "react-hot-toast";

const QuizOption = ({ option, answerHandler, correctAns, setCorrectAns, isRight }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          answerHandler(e);
        }}
        className={`w-full flex items-center pl-4 rounded border border-gray-200 bg-white px-5 py-3 rounded-lg dark:border-gray-700 my-2 `}
      >
        {option}
      </button>
    </div>
  );
};

export default QuizOption;
