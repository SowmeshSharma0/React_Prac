import styled from 'styled-components'

export const FilterInfoContainer = styled.dialog`
    display : ${(props) => props.open ? 'block' : 'none'};
    background-color: #f0f0f0;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 1rem;
    position: fixed;
    top: 5%;
    right: 30%;
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 20%;

    @media (max-width: 768px) {
        width: 35%;
    }

    @media (max-width: 480px) {
        width: 45%;
    }
`