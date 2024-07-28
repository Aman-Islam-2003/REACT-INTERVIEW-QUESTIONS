import React from 'react'

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className='flex flex-col border w-1/2 mx-auto mt-5 p-6'>
      <h2 className='font-bold text-2xl text-center'>{question.question}</h2>
      <ul className='grid grid-cols-2'>
        {question.answerOptions.map((option) =>
        (<li key={option.text} className='border rounded-lg p-2 text-center m-2 cursor-pointer bg-gray-200 hover:bg-gray-300'>
          <button onClick={() => onAnswerClick(option.isCorrect)}>{option.text}</button>
        </li>)
        )}

      </ul>

    </div>
  )
}

export default Question
