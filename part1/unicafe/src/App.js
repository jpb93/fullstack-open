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

const StatisticLine = ({ text, count }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{count}</td> 
    </tr>
  )
}

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const total = goodCount + neutralCount + badCount
  const Average = (good, bad) => ((good * 1) + (bad * -1)) / total

  if (total === 0) 
    return (
      <div>No feedback given</div>
    )

  return (
    <div>
      <table>
        <StatisticLine text='good' count={goodCount} />
        <StatisticLine text='neutral' count={neutralCount} />
        <StatisticLine text='bad' count={badCount} />
        <StatisticLine text='all' count={total} />
        <StatisticLine text='average' count={Average(goodCount, badCount).toFixed(1)} />
        <StatisticLine text='positive' count={`${((goodCount / total) * 100).toFixed(1)} %`}/>
      </table>
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
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />

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