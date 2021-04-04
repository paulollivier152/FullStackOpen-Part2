import React, { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "0400111222" }])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handlePersonChanged = (event) => setNewName(event.target.value)
  const handleNumberChanged = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    // If person name already contained
    if (persons.some((p) => p.name === newName)) {
      // Send alert
      window.alert(`${newName} is already added to phonebook`)
    } else {
      // Else add person
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handlePersonChanged} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChanged} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
