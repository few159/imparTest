import styled from 'styled-components'

export const CardDeleteModalBody = styled.div`
    height: 438px;
    width: 438px;
    background: var(--cor-branco);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 68px;
        height: 68px;
    }

    h2{
        color: var(--cor-erro);
        font-weight: bolder;
        font-size: 2rem;
    }

    span{
        color: var(--cor-texto);
        font-weight: bold;
        margin-bottom: 3rem;
    }

    footer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            font-size: 18px;
            font-weight: bold;
            border-radius: 8px;
            width: 40%;
            height: 3rem;
            border: 1px solid var(--cor-erro);
            background: var(--cor-branco);
            color: var(--cor-erro);
            cursor: pointer;
            transition: 300ms;
            
            &:first-child{
                border: none;
                background: var(--cor-erro);
                color: var(--cor-branco);
                margin-right: 5%;
            }

            &:hover{
                filter: brightness(.9);
                transform: scale(1.04);
            }
        }
    }
`