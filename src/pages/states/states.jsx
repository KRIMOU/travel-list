import React from 'react'

function States({ lenghtItems, lenghtItemsPacked }) {
  //never use state for that , we use derived state instead
  //use template literal exemple : {lenghtItems}
  const pourcentage = Math.round((lenghtItemsPacked / lenghtItems) * 100)
  return (
    <footer className="states">
      <em>
        {pourcentage === 100
          ? '🎉🎉🎉'
          : `You have${lenghtItems}items on your list and you already packeed ${lenghtItemsPacked} ${pourcentage}%`}
      </em>
    </footer>
  )
}

export default States
