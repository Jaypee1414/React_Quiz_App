import React from 'react' 
import { useState, useCallback } from 'react'
import Question from '../Data/Question'
import Trophy from '../assets/quiz-complete.png'
import ProgressBar from './ProgressBar'

function Quiz() {
    const [userQuestion , setUserQuestion] =useState([])
    const [userAnswer , setUserAnswer] =useState('')

   
    const userQuestionIndex = userAnswer ===''? userQuestion.length : userQuestion.length - 1 ;
    const Checklength = userQuestionIndex === Question.length

    const handleClick = useCallback(
      function handleClick (userSelectAnswer){
        setUserAnswer('answered')
        setUserQuestion(prevAnswer => [...userQuestion , userSelectAnswer])

        setTimeout( ()=>{
          if(userSelectAnswer === Question[userQuestionIndex].answers[0]){
            setUserAnswer('correct')
          }else{
            setUserAnswer('wrong')
          }
          setTimeout(()=>{
            setUserAnswer('')
          },2000)
        },1000)
      }
    ,[userQuestionIndex])

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
            const selected  = userQuestion[userQuestion.length - 1] === answer
            let cssClass = ''

            if(userAnswer === 'answered' && selected){
              cssClass = 'selected'
            }

            if((userAnswer === 'wrong' || userAnswer === 'correct') && selected){
              cssClass = 'wrong'
            }
            return(
              <li key={answer} className='answer'>
                <button onClick={()=> handleClick(answer)} className={cssClass} >{answer}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Quiz
