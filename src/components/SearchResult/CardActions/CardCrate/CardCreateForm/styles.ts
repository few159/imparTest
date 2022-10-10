import styled from 'styled-components'

export const CreateFormElement = styled.div`
    background: var(--cor-branco);
    width: 40rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;

    header{
        display: flex;
        margin-left: 2rem;
        
        border-bottom: 1px solid rgba(212, 212, 212, 1);

        img{

        }

        h2{
            color: var(--cor-primaria);
            font-size: 2rem;
            margin-left: 0.5rem;
            font-weight: bold;
        }
    }

    form{
        div{
            display: flex;
            flex-direction: column;
            margin: 4rem 2rem;
            position: relative;

            label{
                color: var(--cor-texto);
                font-weight: bold;
                margin-bottom: .5rem;
            }

            input{
                border: 1px solid rgba(185, 185, 185, 1);
                border-radius: 8px;
                height: 3.5rem;
                color: rgba(117, 117, 117, 1);
                font-size: 18px;
                padding: 0 1rem;
            }

            button{
                background: transparent;
                color: var(--cor-destaque);
                font-weight: bold;
                border: 1px solid var(--cor-destaque);
                border-radius: 8px;
                position: absolute;
                width: 30%;
                height: 2.5rem;
                right: 0.5rem;
                top: 2.3rem;
                cursor: pointer;
                transition: 300ms;

                &:hover{
                    filter: brightness(.6);
                }
            }
        }

        footer{
            display: flex;
            justify-content: flex-end;
            margin: 2.5rem;

            button{
                background: var(--cor-destaque);
                color: var(--cor-branco);
                font-weight: bold;
                border: none;
                border-radius: 8px;
                width: 30%;
                height: 2.5rem;
                right: 0.5rem;
                top: 2.3rem;
                cursor: pointer;
                transition: 300ms;
                
                &:hover{
                    transform: scale(1.05);
                    filter: brightness(.9);
                }
            }
        }
    }
`
export const InputFileElement = styled.div`
    display: none !important;
`