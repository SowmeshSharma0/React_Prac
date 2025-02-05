import { useEffect, useRef, useState, useContext} from "react";
import { StyledForm } from "./styles/AddTaskDialog.styled";
import { CardContext } from "../context/CardContext";

function AddTaskDialog({ openModal, closeModal }) {
    const ref = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                closeModal();
            }
        }
        if (openModal) {
            ref.current?.showModal();
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            ref.current?.close();
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [openModal]);

    const initFormData = () =>{
        return {
            title: "",
            description: "",
            priority: 0,
            assignee: "",
            reporter: "",
            due_date: new Date().toISOString().slice(0, 10)
        }
    }

    const [FormData, setFormData] = useState(initFormData)
    const {addHTodoCard, addMTodoCard, addLTodoCard}= useContext(CardContext)

    const handleChange = (e) =>{
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        FormData.priority = Number(FormData.priority);
        FormData.id = crypto.randomUUID();
        FormData.cross_status = 0;

        console.log(FormData);

        switch(FormData.priority){
            case 2:
                addHTodoCard(FormData);
                break;
            case 1:
                addMTodoCard(FormData);
                break;
            case 0:
                addLTodoCard(FormData);
                break;
        }
        setFormData(initFormData());
        closeModal();
    }
  
    return (
      <dialog
        ref={ref}
        onCancel={closeModal}
      >
        <div ref={wrapperRef}>
            <StyledForm onSubmit={handleSubmit}>
                {/* gotta add value attr */}
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={FormData.title} onChange={handleChange}/>

                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={FormData.description} onChange={handleChange}/>

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
                <input type="date" name="due_date" id="due_date" value={FormData.due_date} onChange={handleChange}/>

                <button type="submit">Add Task</button>
            </StyledForm>
        </div>
      </dialog>
    );
}

export default AddTaskDialog
