import { useEffect, useRef } from "react";

const GenericDialog = ({children, openModal, closeModal}) => {

    const dialogRef = useRef(null);

    useEffect(() => {
        if (openModal) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [openModal]);
    
    return (
        <dialog ref={dialogRef} open={open} onCancel={closeModal}>
            {children}
        </dialog>
    )
}

export default GenericDialog
