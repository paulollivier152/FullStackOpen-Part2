import React, { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  const handlePersonChanged = (event) => setNewName(event.target.value)
  const handleNumberChanged = (event) => setNewNumber(event.target.value)
  const handleFilterChanged = (event) => setFilter(event.target.value)

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
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }

  const personsToShow = persons.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input onChange={handleFilterChanged} />
      <br />
      <h2>add a new</h2>
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
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
