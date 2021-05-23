import { useState, useEffect } from 'react'
import styled, { keyframes } from "styled-components";

const StyledClock = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 1rem;
  transition: all .1s;
`

const blink = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }  
`

const ClockColon = styled.span`
  animation: ${blink} 1s infinite;
  animation-timing-function: ease-in;
`

const Clock = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const prefixWithZero = (i) => {
    if (i < 10){
      i = "0" + i
    }
    return i
  }
  
  useEffect(() => {
    let intervalId = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      minutes = prefixWithZero(minutes);
      setHours(hours)
      setMinutes(minutes)
    }, 1000)
  
    return () => clearInterval(intervalId);
  })
  
  return (
    <StyledClock>
      <span>{hours}</span>
      <ClockColon>:</ClockColon>
      <span>{minutes}</span>
    </StyledClock>
  )
}

export default Clock;
