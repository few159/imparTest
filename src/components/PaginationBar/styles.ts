import styled from 'styled-components'

export const PaginationBarElement = styled.div`
    width: 75vw;
    margin: 1.5rem auto;
    display: flex;
    justify-content: flex-end;
    padding: 0px 0 1.5rem 0;

    div{
        cursor: pointer;
        font-size: 1.25rem;
        background: var(--cor-destaque);
        color: var(--cor-branco);
        height: 1.75rem;
        width: 1.5rem;
        border-radius: 4px;
        text-align: center;
        font-weight: bold;
        margin-left: 0.45rem;
        transition: 300ms;

        &:hover{
            filter: brightness(.85);
            transform: scale(1.05);
        }

        &.active{
            background: var( --cor-texto);
        }

        &.lastPage, &.firstPage{
            width: 1.8rem;
        }
    }
`