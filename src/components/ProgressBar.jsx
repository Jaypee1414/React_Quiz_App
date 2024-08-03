import React, { useEffect } from 'react'
import { useState } from 'react'

function ProgressBar({time, insertNull}) {
    const [userTime , setUserTime] = useState(time)

    useEffect(()=>{
      console.log("set Timeout")
      const timeout = setTimeout(insertNull, time)

        return () =>{
          console.log("clear Timeout")
          clearTimeout(timeout)
        }
    },[time,insertNull])

    useEffect(()=>{
      console.log("set Interval")
      const interval = setInterval(()=>{
            setUserTime(prevTime => prevTime - 100)
        }, 100)

        return () =>{
          console.log("clear Interval")
          clearInterval(interval)
        }
    },[])

  return (
    <div>
      <progress id='question-time' value={userTime} max={time} />
    </div>
  )
}

export default ProgressBar
