import { useEffect, useRef } from "react";
import { StyledConfirmation } from "./styles/Confirmation.styled";

const Confirmation = ({isConfirmModalOpen, closeConfirmModal, callBack, card, setEditingCard, isEditing, setIsEditing=null}) => {

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
            style={{
                border: 'none',
                padding: 0,
                backgroundColor: 'transparent',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
            }}
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
                        setEditingCard(card)
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
