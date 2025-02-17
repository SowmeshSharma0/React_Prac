
import { useState } from "react"
import { StyledTodoCard } from "./styles/TodoCard.styled"
import { Todo } from "./TodoInterface"

interface Props {
    todo: Todo
    Delete : (id: string) => void
    markDone : (id: string) => void
    Edit: (id: string, newStr: string) => void
}

const TodoCard = ({todo, Delete, markDone, Edit} : Props) => {

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [newStr, setNewStr] = useState<string>(todo.text)

  return (
    <StyledTodoCard key={todo.id}>
        <form className="card" onSubmit={(e) => {
            e.preventDefault()
            if(isEditing) {
                Edit(todo.id, newStr)
                setIsEditing(false)
            } else {
                setIsEditing(true)
            }
        }}>
            {/* {
                todo.isDone ? <s>{todo.text}</s> : <h3>{todo.text}</h3>
            } */}
            {
                isEditing ? 
                <input 
                    type="text"
                    value={newStr}
                    onChange={(e) => setNewStr(e.target.value)}
                    disabled={todo.isDone}
                /> : 
                todo.isDone ? <s>{todo.text}</s> : <h3>{todo.text}</h3>
            }
            <div className="buttons">
                <button className="edit" type="submit">Edit</button>
                <button className="delete" onClick={(e) => {
                  // e.preventDefault()
                  Delete(todo.id)
                }} type="button">Del</button>
                <button className="Done" onClick={(e) => {
                  // e.preventDefault()
                  markDone(todo.id)
                }} type="button">Done</button>
            </div>
        </form>
    </StyledTodoCard>
  )
}

//learnt that by default any button's type inside a form is submit and that was causing issues

export default TodoCard
