import { StyledConfirmation, StyledConfirmationWrapper } from "./styles/Confirmation.styled";
import GenericDialog from "./GenericDialog";

const Confirmation = ({isConfirmModalOpen, closeConfirmModal, callBack, reset, isEditing, setIsEditing=null}) => {

    return (
        <GenericDialog openModal={isConfirmModalOpen} closeModal={closeConfirmModal} Component={StyledConfirmationWrapper}>
            
            <StyledConfirmation>
                <h2>Do you really want to proceed with this Action ?</h2>
                <div className="buttons">
                    <button 
                        className="confirm"
                        onClick={() => {
                            callBack();
                        }}
                    >Confirm</button>
                    <button className="cancel" onClick={() => {
                        closeConfirmModal()
                        reset()
                        if(isEditing){
                            setIsEditing(!isEditing)
                        }
                    }}>Cancel</button>
                </div>
            </StyledConfirmation>
        </GenericDialog>
    )
}

export default Confirmation

// logic optimizations : reduce re-renders, make the code more readable, etc : very imp, make sure you are sure of the code : no changes in the code review : 
//think why race conditions , with this mind-map method u can figure out
//if probs : stash the change.
// think very high level, think where it can be simple; whiteboard things out;