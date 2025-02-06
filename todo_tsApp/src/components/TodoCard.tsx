import { StyledTodoCard } from "./styles/TodoCard"
import { Todo } from "./TodoInterface"

interface Props {
    todo: Todo
    Delete : (id: string) => void
}

const TodoCard = ({todo, Delete} : Props) => {
  return (
    <StyledTodoCard key={todo.id}>
        <div className="card">
            <h3>{todo.text}</h3>
            <div className="buttons">
                <button className="edit">Edit</button>
                <button className="delete">Del</button>
                <button className="Done">Done</button>
            </div>
        </div>
    </StyledTodoCard>
  )
}

export default TodoCard
