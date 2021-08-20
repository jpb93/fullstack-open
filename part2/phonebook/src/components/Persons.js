import React from 'react'

const Persons = ({ persons }) => {
  return (
    <div>
      {
        persons.map(person => {
          return (
            <div key={person.name}>
              {person.name} {person.phoneNumber}
            </div>
          )
        })
      }
    </div>
  )
}

export default Persons