import styled from "styled-components";

export const StyledConfirmation = styled.dialog`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 20vw;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    border: none;
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