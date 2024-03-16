import './App.css'
import Form from './pages/form/Form'
import PackingList from './pages/packingList/PackingList'
import States from './pages/states/states'
import Logo from './pages/logo/Logo'
import { useState } from 'react'
function App() {
  const [items, setItems] = useState([])

  function addItem(item) {
    setItems([...items, item])
  }

  const handleDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId))
  }

  const handleTakeElement = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, packed: !item.packed }
        }
        return item
      })
    )
  }

  //derived state
  const lenghtItemsPacked = items.filter((item) => item.packed).length

  //lift up state is to put the state to a parent component and use it in the childs components as props, same also for funtion
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList
        items={items}
        setItems={setItems}
        onHandleDelete={handleDelete}
        onUpdateItem={handleTakeElement}
        onDeleteAll={() => setItems([])}
      />
      <States
        lenghtItems={items.length}
        lenghtItemsPacked={lenghtItemsPacked}
      />
    </div>
  )
}

export default App
