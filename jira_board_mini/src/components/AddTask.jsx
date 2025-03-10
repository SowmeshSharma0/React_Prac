import { StyledAddTask } from "./styles/AddTask.styled"
import AddTaskDialog from "./AddTaskDialog";
import { useToggle } from "../hooks/useToggle";

function AddTask({BtnTxt = '+'}) {
    // conditional rendering of dialog: instead of rendering the dialog twice; i render the dialog only once;

    const [modal, toggleModal] = useToggle(false)

    return (
        <>
            <StyledAddTask onClick={toggleModal}>
                {BtnTxt}
            </StyledAddTask>
            {modal && <AddTaskDialog 
                openModal={modal}
                closeModal={toggleModal}
            />
            }
        </>
     )
}

export default AddTask
