import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colorsLight.header};
    padding: 40px 0;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: ${({theme}) => theme.sizes.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media (max-width: ${({theme}) => theme.sizes.mobile}) {
        margin-bottom: 40px;
    }
`

export const Image = styled.img`
    width: 375px;
    margin-left: 50px;

    @media (max-width: ${({theme}) => theme.sizes.mobile}) {
        margin: 40px 0 30px;
    }
`