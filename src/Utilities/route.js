import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Topics from "../Components/Topics";
import Main from "../Layout/Main";
import quizTopicLoader from "./dataLoader";
import QuizSingle from "../Components/QuizSingle";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: quizTopicLoader,
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "topics", element: <Topics></Topics> },
      { path: "blog", element: <Blog></Blog> },
      { path: "Statistics", element: <Statistics></Statistics> },
      {
        path: "quiz/:id",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
        },
        element: <QuizSingle> </QuizSingle>,
      },
    ],
  },
]);

export default router;
