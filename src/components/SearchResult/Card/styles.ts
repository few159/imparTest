import styled from 'styled-components'

export const CardElement = styled.div`
    height: 267px;
    width: 234px;
    border-radius: 8px;
    background: var(--cor-branco);
    border: 1px solid #E4E4E4;
    box-shadow: 0px 3px 6px #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ImageAndDescriptionElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 1.25rem;

    div{
        overflow: hidden;
        margin-bottom: 2rem;

        img{
            border: 1px solid #E4E4E4;
            border-radius: 100%;
            width: 95px;
            height: 95px;
            transition: 300ms;

            &:hover{
                filter: brightness(.9);
            }
        }
    }
    span{
        color: #263238;
        text-align: center;
        font-weight: 600;
    }
`

export const CardButtonsGroupElement = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    button{
        width: 50%;
        height: 2.5rem;
        background: transparent;
        border: none;
        color: #263238;
        cursor: pointer;
        transition: 300ms;

        span{
            display: flex;
            justify-content: center;
            img{
                margin-right: 12px;
            }
        }

        &:hover{
            transform: scale(1.05);
            filter: brightness(.8);
            color: var(--cor-destaque);
            
            &:first-child{
                color: var(--cor-erro);
            }
        }
    }
`