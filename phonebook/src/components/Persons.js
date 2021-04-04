import React from 'react'

const Persons = ({ personsToShow }) => {
    return (
      <div>
        <ul>
          {personsToShow.map((person) => (
            <Person name={person.name} number={person.number} />
          ))}
        </ul>
      </div>
    )
  }
  
  const Person = ({ name, number }) => {
    return (
      <li key={name}>
        {name} {number}
      </li>
    )
  }
  
export default Persons