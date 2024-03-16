import React from 'react'

export default function ItemValue(item, onHandleDelete, onUpdateItem) {
  return (
    <div>
      <li
        key={item.id}
        style={{
          color: item.packed ? 'green' : 'red',
          textDecoration: item.packed ? 'line-through' : 'none',
        }}>
        {item.quantity}
        {item.description}
        {item.packed ? (
          <div>'✔️'</div>
        ) : (
          <div onClick={() => onHandleDelete(item.id)}>'❌'</div>
        )}
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onUpdateItem(item.id)}></input>
      </li>
    </div>
  )
}
