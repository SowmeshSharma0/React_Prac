import { useEffect, useRef } from "react";
import { StyledCardDialog } from "./styles/CardDialog.styled";

const CardDialog = ({IsOpenModal, closeModal, card}) => {
    const ref = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                closeModal();
            }
        }
        if (IsOpenModal) {
            ref.current?.showModal();
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            ref.current?.close();
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [IsOpenModal]);

    return (
        <dialog 
            ref={ref}
            onCancel={closeModal}
            style={
                {border: "1px solid black", padding: "1rem", borderRadius: "0.5rem"}
            }
        >
            <div
                ref={wrapperRef}
            >
                <StyledCardDialog>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>{card.assignee}</p>
                    <p>{card.reporter}</p>
                    <p>Due Date: {card.due_date}</p>
                </StyledCardDialog>
            </div>

        </dialog>
    )
}

export default CardDialog
