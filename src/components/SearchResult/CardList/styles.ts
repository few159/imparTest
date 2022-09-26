import styled from 'styled-components'

export const CardListElement = styled.div`
    width: 77vw;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    grid-column-gap: 38px;
    grid-row-gap: 38px;
    justify-items: center;

    & > *{
        margin-right: 1rem;
    }
`