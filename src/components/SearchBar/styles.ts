import styled from 'styled-components'

export const SearchBarElement = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -7rem;

        input{
            font-family: Quicksand;
            width: 77vw;
            height: 4.68rem;
            border: none;
            border-radius: 8px;
            font-size: 1.5rem;
            color: #757575;
            padding: 0 1rem;
        }

        img{
            position: relative;
            left: -4rem;
            top: -2px;
            cursor: pointer;
            transition: 300ms;
            height: 41px;

            &:hover{
                filter: brightness(.7);
            }
        }
`