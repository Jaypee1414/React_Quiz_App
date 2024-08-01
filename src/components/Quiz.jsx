import React from 'react' 
import { useState } from 'react'
import Question from '../Data/Question'

function Quiz() {
    const [userQuestion , setUserQuestion] =useState([])
    const userQuestionIndex = userQuestion.length;
    
  return (
    <div>
        <h1>{Question[userQuestionIndex].text}</h1>
    </div>
  )
}

export default Quiz
