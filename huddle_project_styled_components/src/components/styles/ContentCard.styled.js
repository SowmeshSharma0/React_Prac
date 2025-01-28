import styled from "styled-components";

export const StyledContentCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colorsLight.body};
    /* color: ${({ theme }) => theme.colorsLight.text}; */
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin: 2rem 0;
    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }
    @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
        flex-direction: column;
        text-align: center;
    }

    flex-direction: ${({ layout }) => layout || 'row'};
`