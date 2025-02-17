import styled from "styled-components";

export const StyledConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    /* height: 20vh;
    width: 20vw; */
    background-color: white;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    border-radius: 8px;
    min-width: 400px;
    min-height: 200px;
    
    h2 {
        font-size: 1.5rem;
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
    }
    
    .buttons{
        display: flex;
        justify-content: space-around;
        width: 100%;
        gap: 1rem;

        button{
            padding: 10px 20px;
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