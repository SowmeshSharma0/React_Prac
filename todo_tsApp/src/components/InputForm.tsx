import React from 'react'
import { StyledInputForm } from './styles/InputForm.styled'
import { Todo } from './TodoInterface'

interface Props {
  todo: Todo
  setTodo: React.Dispatch<React.SetStateAction<Todo>>
  addToList: () => void
}

const InputForm = ({todo, setTodo, addToList} : Props) => {

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const changedStr : string = e.target.value
    const newID : string = crypto.randomUUID()

    setTodo({
      ...todo,
      id: newID,
      text: changedStr
    })
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addToList()
    setTodo({
      id: "",
      text: "",
      isDone: false
    })
  }
  return (
    <StyledInputForm onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Enter Todo"
            value={todo.text}
            onChange={handleChange}
        />
        <button 
          type="submit">Add</button>
    </StyledInputForm>
  )
}

export default InputForm
