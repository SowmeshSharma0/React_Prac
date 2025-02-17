import { useState } from "react";
import { StyledAddTask } from "./styles/AddTask.styled"
import AddTaskDialog from "./AddTaskDialog";

function AddTask() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <StyledAddTask onClick={() => setModal(true)}>
                +
            </StyledAddTask>
            <AddTaskDialog 
                openModal={modal}
                closeModal={() => setModal(false)}
            />
        </>
     )
}

export default AddTask
