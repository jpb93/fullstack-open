import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises }) => {
        return <Part name={name} exercises={exercises} />
      })}
    </div>
  )
}

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ parts }) =>{
  return (
    <div>
      <p>Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}</p>
    </div>
  )
} 


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App