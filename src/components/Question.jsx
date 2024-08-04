import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Answer from './Answer'
import QuestionData from '../Data/Question'
function Question({
  index, 
  handleSaveCallback,
  handleClick,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  let timer = 10000

  if(answer.selectedAnswer){
    timer = 1000 
  }

  if(answer.isCorrect !== null){
    timer  = 2000 
  }
  function handleAnswer(useranswer){
    setAnswer({
      selectedAnswer : useranswer, 
      isCorrect: null
    })

    setTimeout(()=>{
      setAnswer({
        selectedAnswer : useranswer, 
        isCorrect: QuestionData[index].answers[0] === useranswer
      })

      setTimeout(()=>{
        handleClick(useranswer)
      },2000)

    },1000)
  }
  let answerState ='';

  if(answer.selectedAnswer && answer.isCorrect !== null ){
    answerState = answer.isCorrect ? 'correct' : 'wrong'
  }else if(answer.selectedAnswer){
    answerState = 'answered'
  }

  console.log(answerState)
  return (
    <div id='question'>
    <ProgressBar key={timer} time={timer} insertNull={answer.selectedAnswer === '' ?  handleSaveCallback : null} mode={answerState}/>
    <h2>{QuestionData[index].text}</h2>
    <Answer userAnswer={answerState} userQuestion={QuestionData[index].answers} selectedAnswer={answer.selectedAnswer} handleClick={handleAnswer} />
  </div>
  )
}

export default Question
