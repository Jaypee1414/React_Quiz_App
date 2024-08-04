import React from 'react' 
import { useState, useCallback } from 'react'
import Question from '../Data/Question'
import Trophy from '../assets/quiz-complete.png'
import QuestionComponents from './Question'

function Quiz() {
    const [userQuestion , setUserQuestion] =useState([])
    
    const userQuestionIndex = userQuestion.length
    const Checklength = userQuestionIndex === Question.length

    const handleClick = useCallback(
      function handleClick (userSelectAnswer){
        setUserQuestion((prevAnswer )=> [...prevAnswer , userSelectAnswer])
      }
    ,[])

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

  return (
    <div id='quiz'>
      <QuestionComponents
        key={userQuestionIndex}
        index={userQuestionIndex}
        handleSaveCallback={handleSaveCallback}
        handleClick={handleClick}
      />
    </div>
  )
}

export default Quiz
