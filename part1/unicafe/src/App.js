import React, { useState } from 'react'

const Heading = ({ headingText }) => <h1>{headingText}</h1>

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}

const StatCounter = ({ text, count }) => {
  return (
    <div>
      {text} {count}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading headingText='give feedback' />

      <Button 
        text='good' 
        handleClick={() => setGood(good + 1)} 
      />
      <Button 
        text='neutral' 
        handleClick={() => setNeutral(neutral + 1)} 
      />
      <Button 
        text='bad' 
        handleClick={() => setBad(bad + 1)} 
      />

      <Heading headingText='statistics' />
      
      <StatCounter 
        text='good' 
        count={good} 
      />
      <StatCounter 
        text='neutral' 
        count={neutral} 
      />
      <StatCounter 
        text='bad' 
        count={bad} 
      />
    </div>
  )
}

export default App