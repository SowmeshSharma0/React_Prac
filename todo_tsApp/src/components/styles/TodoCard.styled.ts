import styled from "styled-components";

export const StyledTodoCard = styled.li`
    width: 30vw;
    margin: 1rem 0;
    .card{
        background-color: #f9f9f9;
        padding: 1.5rem;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 5px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        &:hover {
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
        }
        .buttons{
            display: flex;
            gap: 0.5rem;
            button{
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
                &:hover {
                    transform: scale(1.1);
                }
            }
            .edit{
                background-color: #f1c40f;
                color: white;
            }
            .delete{
                background-color: #e74c3c;
                color: white;
            }
            .Done{
                background-color: #2ecc71;
                color: white;
            }
        }
        h3{
            color: #333;
            font-size: 1.5rem;
            margin: 0;
        }
        s{
            font-size: 1.5rem;
            margin: 0;
        }
    }
`