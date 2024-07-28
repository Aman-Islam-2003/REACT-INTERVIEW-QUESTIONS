import React, { useState } from 'react'

const Result = ({ questions, resetQuiz = () => { }, userAnswers }) => {
    const correctAnswers = userAnswers.filter((answer) => answer).length
    return (
        <div>
            <h2 className='font-bold text-2xl text-center mt-12'>Results</h2>
            <p className='text-xl font-semibold text-center mt-2'>You answered {correctAnswers} correctly out of {questions.length} questions</p>
            <div onClick={resetQuiz} className='cursor-pointer underline text-blue-500 text-center m-2'>Click here to retry</div>
            <ul className='mx-auto w-1/2'>
                {
                    questions.map((question, index) => {
                        const correctAnswer = question.answerOptions.find(option => option.isCorrect).text;
                        return (
                            <li className={`${userAnswers[index] === true ? 'text-green-500' : 'text-red-500'} p-1 font-semibold`}>
                                <span className='font-bold text-black'>Q{index + 1}: </span>{question.question}
                                {
                                    userAnswers[index] === false && <span className='text-gray-500'> - Correct Answer: {correctAnswer}</span>
                                }

                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Result
