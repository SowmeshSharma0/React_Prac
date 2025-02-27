import styled from 'styled-components';

export const StyledFilterPanelContainer = styled.div`
    position: sticky;
    left: 0;
    display: flex;
    align-items: center;
    overflow-x: auto;
    min-width: 0;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-x: none;  // IE and Edge
    scrollbar-width: none;  // Firefox
    
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        color: #4a4a4a;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        white-space: nowrap;
        flex-shrink: 0;
    }
`

export const StyledFilterHorizontalPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    min-width: fit-content;
    padding: ${({len}) => len > 0 ? '1.2rem' : '0'};
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(67, 66, 66);
    width: 100%;
`


const toggleActiveColor = (isToggleActive) => {
    // if(isToggleActive){
    //     return 'green'
    // }
    // return 'red'
    // if(isToggleActive){
    //     return 'linear-gradient(to right, #1D976C 0%, #1D976C  51%, #93F9B9 100%)'
    // }
    // return 'linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)'

    if(isToggleActive){
        // Calming green gradient
        return 'linear-gradient(to right, #2ecc71 0%, #27ae60 100%)'
    }
    // return 'linear-gradient(to right, #e74c3c 0%, #c0392b 100%)'
    return 'linear-gradient(to right,rgb(232, 231, 231) 0%,rgb(216, 219, 221) 100%)'
}

export const StyledFilterBox = styled.div`   
    text-align: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    p{
        margin: 0;
        font-weight: ${({isToggleActive}) => isToggleActive ? '600' : '400'};
        font-size: ${({isToggleActive}) => isToggleActive ? '1rem' : '1.06rem'};
        color: white;
    }
    background: ${({isToggleActive}) => toggleActiveColor(isToggleActive)};
    &:hover{
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }
    &:active{
        transform: scale(1.05);
    }
    width: 190px;
    max-width: fit-content;

    @media (max-width: 768px) {
        width: 150px;
    }

    @media (max-width: 480px) {
        width: 100px;
    }
`