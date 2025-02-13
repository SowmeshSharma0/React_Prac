import { useContext, useEffect, useRef, useState } from "react";
import { StyledCardDialog } from "./styles/CardDialog.styled";
import MiniCard from "./MiniCard";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardContext } from "../context/CardContext";
import Confirmation from "./Confirmation";

const CardDialog = ({IsOpenModal, closeModal, card}) => {
    const ref = useRef();
    const wrapperRef = useRef();

    const [isEditing, setIsEditing] = useState(false);
    const [EditingCard, setEditingCard] = useState(card);

    const {addCard, deleteCard, Cards} = useContext(CardContext);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target) && !e.target.closest('.confirmation-dialog')) {
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

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditingCard({
            ...EditingCard,
            [name]: value
        });
    }

    const handleChangeSubmit = (e) => {
        //edit is the only thing that breaks the flow of the app
        e.preventDefault();
        deleteCard(card.id);
        addCard(EditingCard, EditingCard.priority, EditingCard.cross_status);
    }

    const handleDelete = (e) => {
        //this getting way too complex lmaoo
        e.stopPropagation();
        setIsConfirmOpen(true);
        setCallBack(() => {
            return () => {
                deleteCard(card.id);
                setIsConfirmOpen(false);
                closeModal();
            }
        })
    }

    const handleEdit = (e) => {
        e.stopPropagation();
        setIsConfirmOpen(true);
        setCallBack(() => {
            return () => {
                setIsConfirmOpen(false);
                handleChangeSubmit(e);
                setIsEditing(!isEditing);
                closeModal();
            }
        })
    }

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [callBack, setCallBack] = useState(null);

    return (
        <>
            <dialog 
                ref={ref}
                onCancel={closeModal}
                className="cardDialog"
            >
                <div
                    ref={wrapperRef}
                >
                    <StyledCardDialog>
                        <div className="dialogCardHeader">
                            <div></div>
                            {isEditing ? (
                                <>
                                    <span className="title-span"><b>Card Title :</b></span>
                                    <label htmlFor="title" hidden></label>
                                    <input type="text" value={EditingCard.title} onChange={handleChange} name="title" id="title"/>
                                    <div className="edit-wrapper">
                                        <EditIcon 
                                            onClick={(e) => {
                                                handleEdit(e)
                                            }} 
                                            className="edit-icon"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2>Card Title : {card.title}</h2>
                                    <div className="edit-wrapper">
                                        <EditIcon onClick={() => setIsEditing(!isEditing)} className="edit-icon"/>
                                    </div>
                                    <div className="delete-wrapper">
                                        <DeleteIcon 
                                            onClick={(e)=>{
                                                handleDelete(e)
                                            }} 
                                            className="delete-icon"/>
                                    </div>
                                </>
                            )
                        }
                        </div>
                        <MiniCard type="Card Description" content={card.description} isEditing={isEditing} EditingCard={EditingCard} handleChange={handleChange}/>
                        <MiniCard type="Assignee" content={card.assignee} isEditing={isEditing} EditingCard={EditingCard} handleChange={handleChange}/>
                        <MiniCard type="Reporter" content={card.reporter} isEditing={isEditing} EditingCard={EditingCard} handleChange={handleChange}/>
                        <MiniCard type="Due Date" content={card.due_date} isEditing={isEditing} EditingCard={EditingCard} handleChange={handleChange}/>
                        {/* <p>Card Description : </p>
                        <p>{card.description}</p>
                        <p>Assignee : {card.assignee}</p>
                        <p>Reporter : {card.reporter}</p>
                        <p>Due Date: {card.due_date}</p> */}
                    </StyledCardDialog>
                </div>

            </dialog>
            <Confirmation 
                isConfirmModalOpen={isConfirmOpen} 
                closeConfirmModal={(e) => {
                    setIsEditing(false)
                    setIsConfirmOpen(false)
                }} 
                callBack={callBack} 
                card={card}
                setEditingCard={setEditingCard}
            />
        </>
    )
}

export default CardDialog
