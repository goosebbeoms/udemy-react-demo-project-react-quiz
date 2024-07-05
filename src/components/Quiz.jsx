import { useState } from "react";
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  function handleSeletAnswer(selectedAnswer) {
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
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {suffledAnswers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleSeletAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;