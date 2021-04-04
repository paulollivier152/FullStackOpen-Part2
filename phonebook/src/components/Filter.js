import React from 'react'

const Filter = ({ onChange }) => {
    return (
      <div>
        filter shown with
        <input onChange={onChange} />
        <br />
        <h2>add a new</h2>
      </div>
    )
  }
  
export default Filter