import { useEffect, useRef, useState, useContext, useCallback, useMemo} from "react";
import { StyledForm } from "./styles/AddTaskDialog.styled";
import { CardContext } from "../context/CardContext";
import { GlobalContext } from "../context/GlobalContext";
import Confirmation from "./Confirmation";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close';
import { memo } from "react";


function AddTaskDialog({ openModal, closeModal, card=null, initialEditMode=false }) {
    const {main_axis_state_mapping} = useContext(GlobalContext)

    const ref = useRef();
    const wrapperRef = useRef();

    const handleClickOutside = useCallback((e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            closeModal();
        }
    }, [wrapperRef, closeModal])
    
    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            ref.current?.close();
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [handleClickOutside, openModal]);

    const initFormData = useMemo(() => {
        return {
            title: "",
            description: "",
            priority: 0,
            assignee: "",
            reporter: "",
            due_date: new Date().toISOString().slice(0, 10)
        }
    }, [])

    const [FormData, setFormData] = useState(initFormData)

    const {addCard, deleteCard}= useContext(CardContext)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [callBack, setCallBack] = useState(null);

    const [isEditing, setIsEditing] = useState(initialEditMode);

    const handleDelete = (e) => {
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

    const handleChangeSubmit = (e) => {
        e.preventDefault();
        deleteCard(card.id);
        addCard(FormData, FormData.priority, FormData.cross_status)
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

    const handleChange = useCallback((e) =>{
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }, [FormData])

    const handleSubmit = useCallback((e) =>{
        e.preventDefault();
        FormData.id = crypto.randomUUID()
        addCard(FormData, FormData.priority, 0)
        setFormData(initFormData);
        closeModal();
    }, [FormData, addCard, closeModal, initFormData])
  
    return (
        <>
            <dialog
                ref={ref}
                onCancel={closeModal}
                className="AddTaskDialog"
            >
                <div ref={wrapperRef}>
                    <div className="edit-delete-wrapper">
                        {card ?
                            <>
                                <div className="delete-wrapper">
                                    <DeleteIcon onClick={handleDelete}/>
                                </div>
                                <div className="edit-wrapper">
                                    <EditIcon 
                                        onClick={isEditing ? handleEdit : () => {
                                            setIsEditing(!isEditing)
                                            setFormData(card)
                                        }}
                                    />
                                </div>
                            </>
                        : null
                        }
                        <button type="button" onClick={() => {
                            setIsEditing(false)
                            closeModal()
                        }}>
                            <CloseIcon />
                        </button>
                    </div>
                    <StyledForm onSubmit={handleSubmit}>
                        {/* gotta add value attr */}
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            value={!card ? FormData.title: isEditing ? FormData.title: card.title} 
                            onChange={handleChange} 
                            disabled={!isEditing && card}
                        />

                        <label htmlFor="description">Description</label>
                        {/* <input type="text" name="description" id="description" value={FormData.description} onChange={handleChange}/> */}
                        <textarea 
                            name="description" 
                            id="description" 
                            className="input" 
                            value={!card ? FormData.description : isEditing ? FormData.description : card.description} 
                            onChange={handleChange} 
                            disabled={!isEditing && card}
                        ></textarea>

                        <label htmlFor="priority">Priority</label>
                        <select 
                            name="priority" 
                            id="priority" 
                            value={!card ? FormData.priority : isEditing ? FormData.priority : card.priority} 
                            onChange={handleChange}
                            disabled={!isEditing && card}
                        >
                            {/* {card ? 
                                isEditing ? 
                                    <option value={card.priority}>{main_axis_state_mapping[card.priority]}</option>
                                : null
                            : (
                                <>
                                    <option value={2}>High</option>
                                    <option value={1}>Medium</option>
                                    <option value={0}>Low</option>
                                </>
                            )} */}
                            {
                                !card || isEditing ?
                                    <>
                                        <option value={2}>High</option>
                                        <option value={1}>Medium</option>
                                        <option value={0}>Low</option>
                                    </>
                                : <option value={card.priority}>{main_axis_state_mapping[card.priority]}</option>
                            }
                        </select>

                        <label htmlFor="assignee">Assignee</label>
                        <input 
                            type="text" 
                            name="assignee" 
                            id="assignee" 
                            value={!card ? FormData.assignee : isEditing ? FormData.assignee : card.assignee} 
                            onChange={handleChange}
                            disabled={!isEditing && card}
                        />

                        <label htmlFor="reporter">Reporter</label>
                        <input 
                            type="text" 
                            name="reporter" 
                            id="reporter" 
                            value={!card ? FormData.reporter : isEditing ? FormData.reporter : card.reporter} 
                            onChange={handleChange}
                            disabled={!isEditing && card}
                        />

                        <label htmlFor="due_date">Due Date</label>
                        {/* <input type="date" name="due_date" id="due_date" value={FormData.due_date} onChange={handleChange}/> */}
                        <input 
                            type="date" 
                            onFocus = {
                            useCallback(e => {
                                e.currentTarget.setAttribute(
                                    "min",
                                    new Date().toISOString().slice(0, 10)
                                );
                                }, [])
                            }
                            name="due_date" 
                            id="due_date" 
                            value={!card ? FormData.due_date : isEditing ? FormData.due_date : card.due_date} 
                            onChange={handleChange}
                            disabled={!isEditing && card}
                        />

                        {card ? isEditing ?<button type="button" onClick={handleEdit}>Save and Update</button> : null : <button type="submit">Add Task</button>}
                    </StyledForm>
                </div>
            </dialog>
            {card ? 
                <Confirmation 
                    isConfirmModalOpen={isConfirmOpen} 
                    closeConfirmModal={(e) => {
                        setIsConfirmOpen(false)
                    }} 
                    callBack={callBack} 
                    card={card}
                    setEditingCard={setFormData}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                /> 
            : null
            }
        </>
    );
}

export default memo(AddTaskDialog)
