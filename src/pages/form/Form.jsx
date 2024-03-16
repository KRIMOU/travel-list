import React, { useState } from 'react'

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1)
  const [description, setDescription] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false,
    }
    setDescription('')
    setQuantity(1)
    onAddItem(newItem)
    /*
	  const formData = new FormData(e.target)
    const jsonValues = Object.fromEntries(formData.entries())
    console.log(jsonValues)*/
    //une maniere
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for ur trip 😍 ?</h3>
      <select
        name="quantity"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value))
        }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <option value={i} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        name="description"
        type="text"
        placeholder="Add item"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <input type="submit" />
    </form>
  )
}

export default Form
