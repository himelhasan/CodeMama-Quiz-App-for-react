import React from "react";

const QuizOption = ({ option }) => {
  console.log(option);
  return (
    <div>
      <div className="flex items-center pl-4 rounded border border-gray-200 bg-white px-5 py-3 rounded-lg dark:border-gray-700">
        <label className="label cursor-pointer">
          <input
            type="radio"
            className="w-4 h-4 mr-2 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <span className="w-4 h-4   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            {option}
          </span>
        </label>
      </div>
    </div>
  );
};

export default QuizOption;
