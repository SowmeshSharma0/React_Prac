import styled from "styled-components";

export const StyledAddTransactionForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
    }

    label{
        margin: 0.5rem 0;
    }

    input{
        padding: 0.5rem;
        margin: 0.5rem 0;
    }

    button{
        padding: 0.5rem;
        margin: 0.5rem 0;
        background-color: #9c88ff;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover{
        transform: scale(0.98);
        transition: transform 0.8s;
    }

    h2:after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin: 1rem 0;
    }
`