const quizTopicLoader = async () => {
  const quizData = await fetch("https://openapi.programming-hero.com/api/quiz");
  const quizJson = await quizData.json();
  return { quizJson };
};

//

export default quizTopicLoader;
