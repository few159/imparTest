import styled from 'styled-components'

export const ResultHeaderElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 77vw;
    margin: auto;
    margin-top: -2.5rem;

    h3{
        font-size: 2rem;
        color: var(--cor-primaria)
    }

    button{
        border: none;
        border-radius: 8px;
        width: 173px;
        height: 47px;
        background: var(--cor-destaque);
        box-shadow: 0px 3px 6px #92207242;
        font-size: 1.1rem;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: 300ms;

        &:hover{
            transform: scale(1.02);
            filter: brightness(.88);
        }
    }
`