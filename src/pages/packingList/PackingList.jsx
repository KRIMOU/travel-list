import React, { useState } from 'react'
import ItemValue from '../item/ItemValue'
function PackingList({ items, onHandleDelete, onUpdateItem, onDeleteAll }) {
  //use controlledvalue and onChange
  const [typeOrder, setTypeOrder] = useState('1')
  const sortByInputOrder = (a, b) => a.id - b.id
  const sortByDescription = (a, b) => {
    if (a.description < b.description) return -1
    if (a.description > b.description) return 1
    return 0
  }
  const sortByQuantity = (a, b) => a.quantity - b.quantity

  const sortList =
    typeOrder === '1'
      ? items.sort(sortByInputOrder)
      : typeOrder === '2'
      ? items.sort(sortByDescription)
      : items.sort(sortByQuantity)

  return (
    <ul className="list">
      {' '}
      {sortList.map((item) => (
        <ItemValue
          key={item.id}
          item={item}
          onHandleDelete={onHandleDelete}
          onUpdateItem={onUpdateItem}
        />
      ))}
      <select
        type="select"
        value={typeOrder}
        onChange={(e) => setTypeOrder(e.target.value)}>
        <option value="1">sort by input order</option>
        <option value="2">sort by description</option>
        <option value="3">sort by quantity</option>
      </select>
      <button onClick={() => onDeleteAll()}>Delete all</button>
    </ul>
  )
}

export default PackingList
