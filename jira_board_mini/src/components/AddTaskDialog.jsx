import { useEffect, useRef, useState, useContext, useCallback, useMemo} from "react";
import { StyledForm } from "./styles/AddTaskDialog.styled";
import { CardContext } from "../context/CardContext";
import { use } from "react";

function AddTaskDialog({ openModal, closeModal }) {
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

    const {addCard}= useContext(CardContext)

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
      <dialog
        ref={ref}
        onCancel={closeModal}
        style={
            {border: "1px solid black", padding: "1rem", borderRadius: "0.5rem", width: "30%", height: "50%"}
        }
      >
        <div ref={wrapperRef}>
            <StyledForm onSubmit={handleSubmit}>
                {/* gotta add value attr */}
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={FormData.title} onChange={handleChange}/>

                <label htmlFor="description">Description</label>
                {/* <input type="text" name="description" id="description" value={FormData.description} onChange={handleChange}/> */}
                <textarea name="description" id="description" value={FormData.description} onChange={handleChange} className="input"></textarea>

                <label htmlFor="priority">Priority</label>
                <select name="priority" id="priority" value={Number(FormData.priority)} onChange={handleChange}>
                    <option value={2}>High</option>
                    <option value={1}>Medium</option>
                    <option value={0}>Low</option>
                </select>

                <label htmlFor="assignee">Assignee</label>
                <input type="text" name="assignee" id="assignee" value={FormData.assignee} onChange={handleChange}/>

                <label htmlFor="reporter">Reporter</label>
                <input type="text" name="reporter" id="reporter" value={FormData.reporter} onChange={handleChange}/>

                <label htmlFor="due_date">Due Date</label>
                {/* <input type="date" name="due_date" id="due_date" value={FormData.due_date} onChange={handleChange}/> */}
                <input type="date" onFocus = {
                    useCallback(e => {
                        e.currentTarget.setAttribute(
                            "min",
                            new Date().toISOString().slice(0, 10)
                        );
                    }, [])
                }
                name="due_date" id="due_date" value={FormData.due_date} onChange={handleChange}
                />

                <button type="submit">Add Task</button>
            </StyledForm>
        </div>
      </dialog>
    );
}

export default AddTaskDialog
