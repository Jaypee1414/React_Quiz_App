import React from 'react'
import Trophy from '../assets/quiz-complete.png'
import Question from '../Data/Question'
function Summary({userQuestion}) {
    const skippedAnswer = userQuestion.filter((skipped) => skipped === null) 

    const correctAnswer = userQuestion.filter((correct,index) => correct === Question[index].answers[0])

    const skippedPercentage = Math.round((skippedAnswer.length / userQuestion.length) * 100)

    const correctPercentage = Math.round((correctAnswer.length / userQuestion.length) * 100)

    const incorrectPercentage = 100 - skippedPercentage - correctPercentage
    
  return (
    <div id='summary'>
        <img src={Trophy} alt="" />
        <h2>Quiz Completed</h2>
        <div id='summary-stats'>
            {/* skipped answer */}
            <p> 
                <span className='number'>{skippedPercentage}%</span>
                <span className='text'>Skipped Answer</span>
            </p>
            {/* correct answer */}
            <p>
                <span className='number'>{correctPercentage}%</span>
                <span className='text'>Correct Answer</span>
            </p>
            {/* incorrect answer */}
            <p>
                <span className='number'>{incorrectPercentage}%</span>
                <span className='text'>Incorrect Answer</span>
            </p>
        </div>
        <ol>
            {userQuestion.map((userAnswer,index)=>{
                let cssClass = 'user-answer'

                if(userAnswer === null) {
                    cssClass += ' skipped'
                }

                if(userAnswer === Question[index].answers[0]){
                    cssClass += ' correct'
                }else{
                    cssClass += ' wrong'
                }


                return(
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{Question[index].text}</p>
                        <p className={cssClass}>{userAnswer ?? <p className='user-answer'>skipped answer</p>}</p>
                    </li>
                )
            })}
        </ol>
    </div>
  )
}

export default Summary
