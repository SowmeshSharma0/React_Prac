import { StyledTodoList } from "./styles/TodoList.styled"
import TodoCard from "./TodoCard"
import { Todo } from "./TodoInterface"

interface Props {
    todos: Todo[]
    handleDelete: (id: string) => void
    handleDone : (id: string) => void
    handleEdit : (id: string, newStr: string) => void
}

const TodoList = ({todos, handleDelete, handleDone, handleEdit} : Props) => {
  return (
    <StyledTodoList>
        {todos.map((todo : Todo) => {
            return <TodoCard todo={todo} Delete={handleDelete} markDone={handleDone} Edit={handleEdit} key={todo.id}/>
        })}
    </StyledTodoList>
  )
}

export default TodoList
