import styled from "styled-components";

export const StyledCardDialog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    p, input, textarea{
        font-size: 1.2rem;
        width: 100%;
        box-sizing: border-box;
    }

    input, textarea {
        padding: 0.5rem;
        border: 1px solid #dfe1e6;
        border-radius: 4px;
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }

    .dialogCardHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f0f0;
        padding: 1rem;
        border-radius: 5px;
        gap: 1rem;
        flex-wrap: wrap;

        h2, .title-span{
            font-size: 1.5rem;
            margin: 0;
            flex: 1;
            min-width: 200px;
            /* margin-right: 1rem; */
        }
        input {
            flex: 1;
            min-width: 200px;
        }

        .actions {
            display: flex;
            gap: 0.5rem;
        }

        .delete-wrapper, .edit-wrapper{
            margin: 0;
            background-color: white;
            border-radius: 40%;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 1.5rem;
            }

            &:hover {
                transform: scale(1.1);
                transition: all 0.3s;
            }
        }

        .edit-wrapper:hover {
            color: #00f;
            cursor: pointer;
        }

        .delete-wrapper:hover {
            color: #f00;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        .dialogCardHeader {
            padding: 0.8rem;
            
            h2, .title-span {
                font-size: 1.2rem;
                min-width: 150px;
            }

            input {
                min-width: 150px;
            }

            .edit-wrapper, .delete-wrapper {
                padding: 0.3rem;
                
                svg {
                    font-size: 1.2rem;
                }
            }
        }

        p, input, textarea {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .dialogCardHeader {
            padding: 0.6rem;
            
            h2, .title-span {
                font-size: 1.1rem;
                min-width: 120px;
            }

            input {
                min-width: 120px;
            }
        }
    }
`