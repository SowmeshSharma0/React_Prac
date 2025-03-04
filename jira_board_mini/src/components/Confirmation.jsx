import { useEffect, useRef } from "react";
import { StyledConfirmation } from "./styles/Confirmation.styled";

const Confirmation = ({isConfirmModalOpen, closeConfirmModal, callBack, reset, isEditing, setIsEditing=null}) => {

    const confRef = useRef();

    useEffect(() => {
        if (isConfirmModalOpen) {
            confRef.current.showModal();
        } else {
            confRef.current.close();
        }
    }, [isConfirmModalOpen]);

    return (
        <dialog 
            ref={confRef} 
            onCancel={closeConfirmModal}
            className="confirmation-dialog"
        >
            <StyledConfirmation>
                <h2>Do you really want to proceed with this Action ?</h2>
                <div className="buttons">
                    <button 
                        className="confirm"
                        onClick={(e) => {
                            e.preventDefault();
                            callBack();
                        }}
                    >Confirm</button>
                    <button className="cancel" onClick={(e) => {
                        // e.preventDefault()
                        // e.stopPropagation() : see how the behaviour changes
                        closeConfirmModal()
                        reset()
                        if(isEditing){
                            setIsEditing(!isEditing)
                        }
                    }}>Cancel</button>
                </div>
            </StyledConfirmation>
        </dialog>
    )
}

export default Confirmation

// logic optimizations : reduce re-renders, make the code more readable, etc : very imp, make sure you are sure of the code : no changes in the code review : 
//think why race conditions , with this mind-map method u can figure out
//if probs : stash the change.
// think very high level, think where it can be simple; whiteboard things out;