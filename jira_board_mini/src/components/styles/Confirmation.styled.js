import styled from "styled-components";

export const StyledConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    
    h2 {
        font-size: 1.5em;
        text-align: center;
        color: #333;
        margin-bottom: 4em;
    }
    
    .buttons{
        display: flex;
        justify-content: space-around;
        gap: 1rem;

        button{
            padding: 0.5rem 1rem;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 600;
            transition: all 0.3s ease;

            &:hover{
                transform: scale(0.98);
            }
        }
        .confirm{
            background-color: green;
            color: white;

            &:hover{
                background-color: #27ae60;
            }
        }
        .cancel{
            background-color: red;
            color: white;

            &:hover {
                background-color: #c0392b;
            }
        }
    }
`

export const StyledConfirmationWrapper = styled.dialog`
    position: absolute;
    border: none;
    padding: 0;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 25%;

    @media (max-width: 1024px) {
        width: 30%;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
    ::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
    }
`