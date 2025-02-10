import styled from "styled-components";

export const StyledTaskCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .cardHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #f0f0f0;
        padding: 0.5rem;
        border-radius: 5px;
        h3{
            font-size: 1.5rem;
            margin: 0;
        }

        .priority{
            background-color: ${({cardPrio}) => {
                if(cardPrio === 2){
                    return "red"
                }else if(cardPrio === 1){
                    return "yellow"
                }else if(cardPrio === 0){
                    return "blue"
                }else{
                    return "#f0f0f0"
                }
            }};
            /* background-color:rgba(255, 255, 255, 0.14);
            color: ${({cardPrio}) => {
                if(cardPrio === 2){
                    return "red"
                }else if(cardPrio === 1){
                    return "yellow"
                }else if(cardPrio === 0){
                    return "blue"
                }else{
                    return "#f0f0f0"
                }
            }}; */
            font-weight: 600;
            box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
            padding: 1rem;
            border-radius: 5px;
            
        }
    }
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 1rem;
    margin: 0.8rem;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    p{
        font-size: 1.2rem;
    }
`