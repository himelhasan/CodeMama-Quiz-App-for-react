import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ eachQuiz }) => {
  const { id, logo, name, total } = eachQuiz;

  return (
    <div>
      <Link
        to={`/quiz/${id}`}
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-8 m-5 bg-slate-200"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="justify-between flex">
          <div>
            <h5 className="text-xl font-bold text-gray-900">
              {name ? name : "Random Quiz"}
            </h5>

            <p className="mt-1 text-xs font-medium text-gray-600">By {name} Hero</p>
          </div>

          <div className="ml-3  flex-shrink-0 sm:block">
            <img
              alt="Paul Clapton"
              src={logo}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
            <dt className="text-sm font-medium text-gray-600">Published</dt>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dd className="text-xs text-gray-500">{total}</dd>
            <dt className="text-sm font-medium text-gray-600">Total Quiz</dt>
          </div>
        </dl>
      </Link>
    </div>
  );
};

export default Quiz;
