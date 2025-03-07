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
                        e.preventDefault()
                        e.stopPropagation()
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
