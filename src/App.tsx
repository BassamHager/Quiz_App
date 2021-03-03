import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
// API & types
import { fetchQuizQuestions, Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="start" onClick={() => startTrivia()}>
        Start
      </button>
      <p className="score">Score:</p>
      <p className="score">Loading Questions...</p>

      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        cb={checkAnswers}
      /> */}

      <button onClick={() => nextQuestion()} className="next">
        Next Question
      </button>
    </div>
  );
}

export default App;
