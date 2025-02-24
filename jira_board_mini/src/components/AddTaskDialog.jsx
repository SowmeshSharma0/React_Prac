import { useEffect, useRef, useState, useContext, useCallback, useMemo} from "react";
import { StyledForm } from "./styles/AddTaskDialog.styled";
import { CardContext } from "../context/CardContext";
import { GlobalContext } from "../context/GlobalContext";
import Confirmation from "./Confirmation";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close';
import { memo } from "react";
import { useForm } from "react-hook-form";


function AddTaskDialog({ openModal, closeModal, card=null, initialEditMode=false }) {
    const {main_axis_state_mapping} = useContext(GlobalContext)

    const {register, handleSubmit, formState: {errors}, reset, getValues} = useForm({
        defaultValues: {
            id: card?.id || "",
            title: card?.title || "",
            description: card?.description || "",
            priority: card?.priority || 0,
            assignee: card?.assignee || "",
            reporter: card?.reporter || "",
            due_date: card?.due_date || new Date().toISOString().slice(0, 10),
            cross_status: card?.cross_status || 0
        }
    })

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
        // addCard(FormData, FormData.priority, FormData.cross_status)
        const data = getValues();
        addCard(data, data.priority, data.cross_status)
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

    const OnSubmit = (data) =>{
        data.id = crypto.randomUUID()
        addCard(data, data.priority, 0)
        closeModal();
    }
  
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
                                            handleSubmit(handleEdit)
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
                    <StyledForm onSubmit={handleSubmit(OnSubmit)}>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            value={!card ? FormData.title: isEditing ? FormData.title: card.title}  
                            disabled={!isEditing && card}
                            {...register("title", 
                                {required: "Title is required",
                                minLength: {
                                    value: 5,
                                    message: "Title must be at least 5 characters long"
                                }
                                })}
                        />
                        {errors.title && <p className="error-message">{errors.title.message}</p>}

                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            className="input" 
                            value={!card ? FormData.description : isEditing ? FormData.description : card.description} 
                            disabled={!isEditing && card}
                            {...register("description", {
                                minLength: {
                                    value: 10,
                                    message: "Description must be at least 10 characters long"
                                },
                            })}
                        ></textarea>
                        {errors.description && <p className="error-message">{errors.description.message}</p>}

                        <label htmlFor="priority">Priority</label>
                        <select 
                            name="priority" 
                            id="priority" 
                            value={!card ? FormData.priority : isEditing ? FormData.priority : card.priority} 
                            disabled={!isEditing && card}
                            {...register("priority", {
                                required: "Priority is required"
                            })}
                        >
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
                        {errors.priority && <p className="error-message">{errors.priority.message}</p>}
                        <label htmlFor="assignee">Assignee</label>
                        <input 
                            type="text" 
                            name="assignee" 
                            id="assignee" 
                            value={!card ? FormData.assignee : isEditing ? FormData.assignee : card.assignee} 
                            disabled={!isEditing && card}
                            {...register("assignee", {
                                required: "Assignee is required"
                            })}
                        />
                        {errors.assignee && <p className="error-message">{errors.assignee.message}</p>}

                        <label htmlFor="reporter">Reporter</label>
                        <input 
                            type="text" 
                            name="reporter" 
                            id="reporter" 
                            value={!card ? FormData.reporter : isEditing ? FormData.reporter : card.reporter} 
                            disabled={!isEditing && card}
                            {...register("reporter", {
                                required: "Reporter is required"
                            })}
                        />
                        {errors.reporter && <p className="error-message">{errors.reporter.message}</p>}
                        <label htmlFor="due_date">Due Date</label>
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
                            disabled={!isEditing && card}
                            {...register("due_date", {
                                required: "Due date is required",
                                validate: (value) => {
                                    let date1 = new Date(value).toISOString().slice(0, 10)
                                    let date2 = new Date().toISOString().slice(0, 10)
                                    if (date1 >= date2) {
                                        return true
                                    }
                                    return "Due date cannot be in the past!"
                                }
                            })}
                        />
                        {errors.due_date && <p className="error-message">{errors.due_date.message}</p>}

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
                    reset={reset}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                /> 
            : null
            }
        </>
    );
}

export default memo(AddTaskDialog)
