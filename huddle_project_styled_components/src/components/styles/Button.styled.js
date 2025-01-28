import styled from "styled-components";

// export const Button = styled.button`
//     background-color: ${({primary, theme}) => primary ? theme.colorsLight.footer : theme.colorsLight.header};
//     color: ${({primary, theme}) => primary ? theme.colorsLight.header : theme.colorsLight.footer};
//     padding: 0.8rem 2.5rem;
//     font-size: 1rem;
//     border: none;
//     border-radius: 25px;
//     cursor: pointer;
//     transition: background-color 0.5s, color 0.5s;
//     &:hover {
//         background-color: ${({primary, theme}) => primary ? theme.colorsLight.header : theme.colorsLight.footer};
//         color: ${({primary, theme}) => primary ? theme.colorsLight.footer : theme.colorsLight.header};
//     }
// `

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    /* box-shadow: 0 10px 20px -10px ${({theme}) => theme.colorsLight.header}; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    padding: 1rem 2rem;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`