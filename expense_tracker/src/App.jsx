import { useState } from 'react'
import './App.css'
import Container from './components/Container'

function App() {
  const [TransList, setTransList] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOpenItems, setIsOpenItems] = useState([])

  const [FormData, setFormData] = useState({title:"", amount:0, description: ""})
  return (
    <Container
        TransList={TransList}
        setTransList={setTransList}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        isOpenItems={isOpenItems}
        setIsOpenItems={setIsOpenItems}
        FormData={FormData}
        setFormData={setFormData}
    />
  )
}

export default App
