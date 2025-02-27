import { useCallback, useState } from "react";
import { StyledAddTask } from "./styles/AddTask.styled"
import AddTaskDialog from "./AddTaskDialog";

function AddTask({BtnTxt = '+'}) {
    const [modal, setModal] = useState(false);
    // conditional rendering of dialog: instead of rendering the dialog twice; i render the dialog only once;

    const updateModal = useCallback(() => {
        setModal(prev => !prev)
    }, [])

    return (
        <>
            <StyledAddTask onClick={updateModal}>
                {BtnTxt}
            </StyledAddTask>
            {modal && <AddTaskDialog 
                openModal={modal}
                closeModal={updateModal}
            />
            }
        </>
     )
}

export default AddTask
