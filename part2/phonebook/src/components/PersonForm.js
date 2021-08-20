import React from 'react'

const PersonForm = (
  { newName, newPhoneNumber, addNewPerson, handleNameChange, handlePhoneNumberChange }
  ) => {
  return (
    <div>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          number: <input
            value={newPhoneNumber}
            onChange={handlePhoneNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm