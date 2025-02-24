import styled from "styled-components";

// export const StyledDialog = styled.dialog`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: white;
//     padding: 1rem;
//     border: 1px solid #dfe1e6;
//     border-radius: 0.5rem;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 100;
//     width: 50%;
//     height: 50%;
    
// `

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
        font-size: 0.8rem;
        font-weight: 600;
    }
`