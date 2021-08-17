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

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const total = goodCount + neutralCount + badCount
  const Average = (good, bad) => ((good * 1) + (bad * -1)) / total

  if (total === 0 ) 
    return (
      <div>
        No feedback given
      </div>
    )

  return (
    <div>
      <StatCounter 
        text='good' 
        count={goodCount} 
      />
      <StatCounter 
        text='neutral' 
        count={neutralCount} 
      />
      <StatCounter 
        text='bad' 
        count={badCount} 
      />
      <StatCounter 
        text='all' 
        count={total} 
      />
      <StatCounter 
        text='average' 
        count={Average(goodCount, badCount)} 
      />
      <StatCounter
        text='positive'
        count={`${(goodCount / total) * 100} %`}
      />
      
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
      
      
      <Statistics 
        goodCount={good}
        neutralCount={neutral}
        badCount={bad}
      />

    </div>
  )
}

export default App