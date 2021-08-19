import React from 'react'

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Title = ({ course }) => <h2>{course}</h2>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => {
        return (
          <Part 
            key={id} 
            name={name} 
            exercises={exercises} 
          /> 
        )
      })}
    </div>
  )
}

const Total = ({ parts }) =>{
  return (
    <div>
      <p><strong>total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</strong></p>
    </div>
  )
} 

const Course = ({ course }) => {
  const { name, parts } = course
  return (
    <div>
      <Title course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course