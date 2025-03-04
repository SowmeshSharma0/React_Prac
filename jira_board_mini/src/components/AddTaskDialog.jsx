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
import { useClickOutside } from "../hooks/useClickOutside";


function AddTaskDialog({ openModal, closeModal, card=null, initialEditMode=false }) {

    const {main_axis_state_mapping} = useContext(GlobalContext)
    const {addCard, deleteCard}= useContext(CardContext)

    const ref = useRef();

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    //understand callbacks better
    const [callBack, setCallBack] = useState(null);

    const [isEditing, setIsEditing] = useState(initialEditMode);

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

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    const wrapperRef = useClickOutside(() => closeModal());

    const handleDelete = (e) => {
        e.stopPropagation();
        setIsConfirmOpen(true);

        //state must be something be something that changes the ui; not a function
        //use callback must be used instead of this state.
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

    // generic component for a dialog box {children}
  
    return (
        <>
            <dialog
                ref={ref}
                onCancel={closeModal}
                className="AddTaskDialog"
            >
                <div ref={wrapperRef}>
                    <div className="edit-delete-wrapper">
                        {card &&
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
                            disabled={!isEditing && card}
                            {...register("title", 
                                {
                                    required: "Title is required",
                                    minLength: {
                                        value: 5,
                                        message: "Title must be at least 5 characters long"
                                    },
                                    validate: (value) => value[0] === value[0].toUpperCase() ? true : "Title must start with a capital letter"
                                })}
                        />
                        {/* {errors.title && <p className="error-message">{errors.title.message}</p>} */}
                        {errorMsg({msg: errors.title?.message, isError: errors.title})}

                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            className="input" 
                            disabled={!isEditing && card}
                            {...register("description", {
                                minLength: {
                                    value: 10,
                                    message: "Description must be at least 10 characters long"
                                },
                            })}
                        ></textarea>
                        {/* {errors.description && <p className="error-message">{errors.description.message}</p>} */}
                        {errorMsg({msg: errors.description?.message, isError: errors.description})}

                        <label htmlFor="priority">Priority</label>
                        <select 
                            name="priority" 
                            id="priority" 
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
                        {/* {errors.priority && <p className="error-message">{errors.priority.message}</p>} */}
                        {errorMsg({msg: errors.priority?.message, isError: errors.priority})}


                        <label htmlFor="assignee">Assignee</label>
                        <input 
                            type="text" 
                            name="assignee" 
                            id="assignee" 
                            disabled={!isEditing && card}
                            {...register("assignee", {
                                required: "Assignee is required"
                            })}
                        />
                        {/* {errors.assignee && <p className="error-message">{errors.assignee.message}</p>} */}
                        {errorMsg({msg: errors.assignee?.message, isError: errors.assignee})}

                        <label htmlFor="reporter">Reporter</label>
                        <input 
                            type="text" 
                            name="reporter" 
                            id="reporter" 
                            disabled={!isEditing && card}
                            {...register("reporter", {
                                required: "Reporter is required"
                            })}
                        />
                        {/* {errors.reporter && <p className="error-message">{errors.reporter.message}</p>} */}
                        {errorMsg({msg: errors.reporter?.message, isError: errors.reporter})}

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
                        {/* {errors.due_date && <p className="error-message">{errors.due_date.message}</p>} */}
                        {errorMsg({msg: errors.due_date?.message, isError: errors.due_date})}

                        {card ? isEditing && <button type="button" onClick={handleEdit}>Save and Update</button> : <button type="submit">Add Task</button>}
                    </StyledForm>
                </div>
            </dialog>
            {card && 
                <Confirmation 
                    isConfirmModalOpen={isConfirmOpen} 
                    closeConfirmModal={(e) => {
                        setIsConfirmOpen(false)
                    }} 
                    callBack={callBack} 
                    reset={reset}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                /> 
            }
        </>
    );
}

//add fnc to the component on top; convention: 1 comp per file
const errorMsg = ({msg, isError}) => {
    if (isError) {
        return <p className="error-message">{msg}</p>
    }
    return <p className="error-message hidden">Title is required</p>
}

export default memo(AddTaskDialog)
