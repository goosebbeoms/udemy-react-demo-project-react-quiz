import { useState } from "react";

import QUESTIONS from '../questions.js'
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer])
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    )
  }

  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
  suffledAnswers.sort(() => Math.random() - 0.5)

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />   {/* 해당 질문에 어떠한 답도 선택되지 않았다고 알려주는 placeholder */}
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {suffledAnswers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;