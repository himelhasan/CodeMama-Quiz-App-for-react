import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export const QuizContext = createContext([]);

const Main = () => {
  const quizData = useLoaderData();

  return (
    <QuizContext.Provider value={quizData}>
      <div>
        <Header></Header>
        <Outlet />
        <Footer />
      </div>
    </QuizContext.Provider>
  );
};

export default Main;
