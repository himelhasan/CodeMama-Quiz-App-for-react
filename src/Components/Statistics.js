import React, { useContext, PureComponent } from "react";
import { QuizContext } from "../Layout/Main";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const statData = useContext(QuizContext);
  const stat = statData.quizJson.data;
  // const { id, total, name } = stat;
  console.log(stat);
  return (
    <div>
      <div className="relative bg-deep-purple-accent-400">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Check your
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900"> Quiz Analytics</span>
              </span>
              <br className="hidden md:block" />
              and Insights
            </h2>

            <a
              href="#quiz"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-0 md:mx-auto w-full md:w-1/3 my-20">
        <BarChart width={400} height={400} data={stat} className="mx-auto">
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="total">
            {stat.map((index) => (
              <Cell cursor="pointer" fill={"#651FFF"} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
        <h1 className="text-2xl font-semibold text-center my-5">
          {" "}
          Number of Questions Per Quiz Test
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
