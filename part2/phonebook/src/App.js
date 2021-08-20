import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456' },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber] = useState('')
  const [ personSearch, setPersonSearch ] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handlePhoneNumberChange = event => setNewPhoneNumber(event.target.value)
  const handlePersonSearchInput = event => setPersonSearch(event.target.value)

  const nameInPhonebook = currentName => 
    persons.some(p => p.name.toLowerCase() === currentName.toLowerCase())

  const filteredPersons = persons
    .filter(person => person.name.toLowerCase().includes(personSearch.toLowerCase()))

  const addNewPerson = event => {
    event.preventDefault()
    
    if (!nameInPhonebook(newName)){
      const personObject = {
        name: newName,
        phoneNumber: newPhoneNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhoneNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        personSearch={personSearch}
        handlePersonSearchInput={handlePersonSearchInput}
      />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        addNewPerson={addNewPerson}
        handleNameChange={handleNameChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
