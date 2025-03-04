import { useEffect, useRef } from "react";

const GenericDialog = ({children, openModal, closeModal, Component="dialog", ...props}) => {

    const dialogRef = useRef(null);
    
    useEffect(() => {
        if (openModal) {
            if (dialogRef.current && !dialogRef.current.open) {
                dialogRef.current.showModal();
            }
        } else {
            dialogRef.current?.close();
        }
    }, [openModal]);
    
    return (
        <Component ref={dialogRef} open={open} onCancel={closeModal} {...props}>
            {children}
        </Component>
    )
}

export default GenericDialog
