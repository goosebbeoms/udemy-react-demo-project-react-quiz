import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import QUESTIONS from "../questions.js"

const Question = ({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer }) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} /> {/* 해당 질문에 어떠한 답도 선택되지 않았다고 알려주는 placeholder */}
      <p>{questionText}</p>
      <Answers answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSelect={onSelectAnswer} />
    </div>
  )
}

export default Question
