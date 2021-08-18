import React, { useState } from 'react'

const Heading = ({ headingText }) => <h1>{headingText}</h1>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Votes = ({ voteCount }) => <div>has {voteCount} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  const increaseVote = () => {
    const voteCopy = { ...votes }
    voteCopy[selected]++
    setVotes(voteCopy)
  }

  const getMostVoted = () => Object.keys(votes).reduce((a ,b) => votes[a] > votes[b] ? a : b)

  return (
    <div>
      <Heading headingText='Anecdote of the day' />
      {anecdotes[selected]}
      <Votes voteCount={votes[selected]} />
      <Button text='vote' handleClick={increaseVote} />
      <Button text='next anecdote' handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <Heading headingText='Anecdote with most votes' />
      {anecdotes[getMostVoted()]}
      <Votes voteCount={votes[getMostVoted()]} />
    </div>
  )
}

export default App