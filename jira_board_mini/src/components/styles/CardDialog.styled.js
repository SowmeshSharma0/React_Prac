import styled from "styled-components";

export const StyledCardDialog = styled.div`
    display: flex;
    flex-direction: column;
    p, input{
        font-size: 1.2rem;
    }
    max-width: 40vw;
    .dialogCardHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f0f0;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        
        border-radius: 5px;
        h2, .title-span{
            font-size: 1.5rem;
            margin: 0;
            margin-right: 1rem;
        }
        svg{
            cursor: pointer;
        }

        .edit-wrapper{
            margin: 1rem;
            background-color: white;
            border-radius: 40%;
            text-align: center;
            .edit-icon{
                font-size: 1.5rem;
                padding: 0.5rem;
            }
            &:hover{
                color: #00f;
                transform: scale(1.1);
                transition: all 0.3s;
            }
        }
    }
`