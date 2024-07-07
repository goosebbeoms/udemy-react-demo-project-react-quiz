import { useState, useCallback } from "react"

import QUESTIONS from "../questions.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import Question from "./Question.jsx"

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer])
    },
    []
  )

  const handleSkipAnser = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    )
  }

  return <div id="quiz">
    <Question key={activeQuestionIndex} index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnser} />
  </div>
}

export default Quiz
