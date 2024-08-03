import React from 'react' 
import { useState, useCallback } from 'react'
import Question from '../Data/Question'
import Trophy from '../assets/quiz-complete.png'
import ProgressBar from './ProgressBar'

function Quiz() {
    const [userQuestion , setUserQuestion] =useState([])
   
    const userQuestionIndex = userQuestion.length;
    const Checklength = userQuestionIndex === Question.length

    const handleClick = useCallback(
      function handleClick (userSelectAnswer){
        setUserQuestion(prevAnswer => [...userQuestion , userSelectAnswer])
      }
    ,[userQuestion])

    const handleSaveCallback = useCallback(()=>{
      handleClick(null)
    },[handleClick])

    if(Checklength){
       return (
        <div id='summary'>
        <img src={Trophy} alt="" />
        <h2>Quiz Completed</h2>
        </div>
      )
    }

    let shuffle = [...Question[userQuestionIndex].answers]
    shuffle.sort(() => Math.random() - 0.5)
  return (
    <div id='quiz'>
      <div id='question'>
        <ProgressBar key={userQuestionIndex} time={10000} insertNull={handleSaveCallback}/>
        <h2>{Question[userQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffle.map((answer)=>{
            return(
              <li key={answer} className='answer'>
                <button onClick={()=> handleClick(answer)}>{answer}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Quiz
