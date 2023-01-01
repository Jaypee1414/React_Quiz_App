import React from 'react' 
import { useState, useCallback } from 'react'
import Question from '../Data/Question'
import QuestionComponents from './Question'
import Summary from './Summary'

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
     return <Summary userQuestion={userQuestion} />
    }
    console.log(setUserQuestion)

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
