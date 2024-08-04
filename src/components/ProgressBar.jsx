import React, { useEffect } from 'react'
import { useState } from 'react'

function ProgressBar({time, insertNull, mode}) {
    const [userTime , setUserTime] = useState(time)

    useEffect(()=>{
      const timeout = setTimeout(insertNull, time)

        return () =>{
          clearTimeout(timeout)
        }
    },[time,insertNull])

    useEffect(()=>{
      const interval = setInterval(()=>{
            setUserTime(prevTime => prevTime - 100)
        }, 100)

        return () =>{
          clearInterval(interval)
        }
    },[])

  return (
    <div>
      <progress id='question-time' value={userTime} max={time} className={mode} />
    </div>
  )
}

export default ProgressBar
