import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    input{
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #dfe1e6;
    }
    select{
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #dfe1e6;
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
`