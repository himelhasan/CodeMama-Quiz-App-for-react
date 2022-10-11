import React, { useContext } from "react";
import Quiz from "./Quiz";
import { QuizContext } from "../Layout/Main";

const Topics = () => {
  const quiz = useContext(QuizContext);
  const quizData = quiz.quizJson.data;
  return (
    <div>
      <h2 className="text-3xl text-center pt-10">
        Justify your skills <br></br>with out top {quizData.length} Quiz
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-4/5 mx-auto py-5">
        {quizData.map((eachQuiz) => (
          <Quiz key={eachQuiz.id} eachQuiz={eachQuiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
