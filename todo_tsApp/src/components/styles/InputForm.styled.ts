import styled from "styled-components";

export const StyledInputForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    input {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 0.5rem;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`