import React, { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  const handlePersonChanged = (event) => {
    setNewName(event.target.value)
  }

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
      }
      setPersons(persons.concat(personObject))
      setNewName("")
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
