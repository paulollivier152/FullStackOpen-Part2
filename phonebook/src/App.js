import React, { useState } from "react"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'




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
      <Filter onChange={handleFilterChanged} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handlePersonChanged={handlePersonChanged}
        handleNumberChanged={handleNumberChanged}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
