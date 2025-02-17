import React, { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import { Todo } from './components/TodoInterface'
import TodoList from './components/TodoList'


const App: React.FC = () => {

  const [todo, setTodo] = useState<Todo>({id: "", text: "", isDone: false})
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = () => {
    setTodos([...todos, todo])
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo : Todo) => todo.id !== id ))
  }

  const handleDone = (id: string) => {
    setTodos(todos.map(todo => {
      if(todo.id === id)
        return {...todo, isDone: !todo.isDone}
      else
        return todo
    }))
  }

  const handleEdit = (id: string, newStr: string) => {
    setTodos(todos.map(todo => {
      if(todo.id === id)
        return {...todo, text: newStr}
      else
        return todo
    }))
  }

  return (
    <div className="Todo-App">
      <h1>Todo App</h1>
      <InputForm todo={todo} setTodo={setTodo} addToList={handleAdd}/>
      <TodoList todos={todos} handleDelete= {handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
    </div>
  )
}

export default App

