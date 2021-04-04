import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return <h1>{course.name}</h1>
  }
  
  const Total = ({ parts }) => {
    const sum =
      parts.reduce((s, p) => s + p.exercises, 0)
    return <b>Number of exercises {sum}</b>
  }
  
  const Part = props => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    )
  }

  export default Course