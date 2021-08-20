import React from 'react'

const Filter = ({ personSearch, handlePersonSearchInput }) => {
  return (
    <div>
      filter shown with <input 
        value={personSearch}
        onChange={handlePersonSearchInput}
      />
    </div>
  )
}

export default Filter