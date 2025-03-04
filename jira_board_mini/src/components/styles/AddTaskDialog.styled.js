import styled from "styled-components";

export const StyledWrapper = styled.dialog`
    border: 1px solid black;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 50%;
    overflow-y: auto;
    position: relative;
    /* height: 78%; */

    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
    }
    
    &::backdrop{
        background-color: rgba(0, 0, 0, 0.5);
    }

    .edit-delete-wrapper{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        gap: 0.5rem;
    
        .delete-wrapper, .edit-wrapper{
            margin: 0;
            background-color: white;
            border-radius: 40%;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
    
            svg {
                font-size: 1.5rem;
            }
    
            &:hover {
                transform: scale(1.1);
                transition: all 0.3s;
            }
        }
    
        .edit-wrapper:hover {
            color: #00f;
            cursor: pointer;
        }
    
        .delete-wrapper:hover {
            color: #f00;
            cursor: pointer;
        }

        button{
        background-color: transparent;
        border: none;
        cursor: pointer;

        &:hover{
            color: red;
        }
        }
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    input, .input, select, option, textarea, .error-message{
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #dfe1e6;
    }
    label{
        margin: 0.5rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
    button{
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #dfe1e6;
        background-color: #0052cc;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: #0065ff;
            transform: scale(0.98);
            transition: all 0.2s;
        }
    }

    .error-message{
        border: none;
        padding: 0;
        color: red;
        font-size: 0.7rem;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0;
    }
    .hidden{
        visibility: hidden;
    }
`