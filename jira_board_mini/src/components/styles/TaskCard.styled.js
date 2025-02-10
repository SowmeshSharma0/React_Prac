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
            color: white;
            background-color: ${({cardprio}) => {
                if(cardprio === 2){
                    return "red"
                }else if(cardprio === 1){
                    return "yellow"
                }else if(cardprio === 0){
                    return "green"
                }else{
                    return "#f0f0f0"
                }
            }};
            /* background: ${({cardprio}) => {
                if(cardprio === 2){
                    return "url('../../assets/high.png')"
                }
                else if(cardprio === 1){
                    return "url('../../assets/medium.png')"
                }
                else{
                    return "url('../../assets/low.png')"
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
    &:active{
        transform: scale(0.95);
        transition: transform 0.2s ease-in-out;
    }
`