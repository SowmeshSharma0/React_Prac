import { StyledTodoList } from "./styles/TodoList.styled"
import TodoCard from "./TodoCard"
import { Todo } from "./TodoInterface"

interface Props {
    todos: Todo[]
    handleDelete: (id: string) => void
}

const TodoList = ({todos, handleDelete} : Props) => {
  return (
    <StyledTodoList>
        {todos.map((todo : Todo) => {
            return <TodoCard todo={todo} Delete={handleDelete}/>
        })}
    </StyledTodoList>
  )
}

export default TodoList
