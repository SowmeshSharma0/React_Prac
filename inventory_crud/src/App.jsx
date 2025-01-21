import './App.css'
import Inventory from './inventory'
import AddItemForm from './addItemForm'

import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  
  const AddItem = (newItem) =>{
    console.log(newItem)
    setItems(PrevItems => [...PrevItems, newItem])
  }

  const deleteItem = (itemID) => {
    console.log(itemID)
    setItems(
      items.filter(item => item.id!=itemID)
    )
  }

  return (
    <>
      <Inventory items={items} deleteItemCallback = {deleteItem}/>
      <AddItemForm addItemCallback = {AddItem}/>
    </>
  )
}

export default App
