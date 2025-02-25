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
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        h3{
            font-size: 1.5rem;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .priority{
            color: ${({cardprio}) => {
                if(cardprio === 1){
                    return "#333333"
                }
                return "white"
            }};
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
            font-weight: 600;
            box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
            padding: 1rem;
            border-radius: 5px;
            
        }
    }
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &:active{
        transform: scale(0.95);
        transition: transform 0.2s ease-in-out;
    }
    .content{
        display: flex;
        flex-direction: column; 
        justify-content: space-evenly;
        width: 100%;
        p{
            font-size: 1.2rem;
            margin: 0.5rem;
        }
        .description{
            /* width: 100%; */
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
`