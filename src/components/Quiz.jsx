import { useState } from "react";
import QUESTIONS from '../questions.js'

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length

  function handleSeletAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer])
  }

  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map(answer => (
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