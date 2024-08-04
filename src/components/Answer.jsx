import React, { useRef } from 'react'

function Answer({selectedAnswer, userAnswer, userQuestion,handleClick}) {

    const shuffle = useRef()
    if(!shuffle.current){
        shuffle.current = [...userQuestion]
        shuffle.current.sort(() => Math.random() - 0.5)
    }
  return (
    <div>
      <ul id='answers'>
          {shuffle.current.map((answer)=>{
            const selected  = selectedAnswer === answer
            let cssClass = ''

            if(userAnswer === 'answered' && selected){
              cssClass = 'selected'
            }

            if((userAnswer === 'wrong' || userAnswer === 'correct') && selected){
              cssClass = userAnswer
            }
            return(
              <li key={answer} className='answer'>
                <button onClick={()=> handleClick(answer)} className={cssClass} disabled={userAnswer !== ''}>{answer}</button>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Answer
