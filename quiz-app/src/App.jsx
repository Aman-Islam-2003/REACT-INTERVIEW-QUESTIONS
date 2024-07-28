import React, { useState } from 'react'
import questions from './constants/questions.json'
import Question from './components/Question';
import Result from './components/Result';


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([ ...userAnswers, isCorrect ]);
  }
  console.log(userAnswers)

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  }
  return (
    <div>

      <h1 className='text-5xl font-bold text-center'>Quiz</h1>
      {/* question  */}
      {
        currentQuestion < questions.length && <Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion} />

      }
      {/* result */}
      {
        currentQuestion === questions.length && <Result userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />

      }


    </div>
  )
}

export default App
