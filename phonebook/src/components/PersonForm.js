import React from 'react'

const PersonForm = ({
    newName,
    newNumber,
    handlePersonChanged,
    handleNumberChanged,
    addPerson,
  }) => {
    return (
      <div>
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
      </div>
    )
  }

export default PersonForm