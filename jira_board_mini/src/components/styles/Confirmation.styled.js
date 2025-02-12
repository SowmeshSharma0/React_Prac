import styled from "styled-components";

export const StyledConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    .buttons{
        display: flex;
        justify-content: space-around;
        width: 100%;
        button{
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 600;
        }
        .confirm{
            background-color: green;
            color: white;
        }
        .cancel{
            background-color: red;
            color: white;
        }
    }
`