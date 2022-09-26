import styled from 'styled-components'

export const OverlayElement = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(246, 244, 246, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;

    display: flex;
    justify-content: flex-end;
`

export const CreateFormPosition = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;

    display: flex;
    justify-content: flex-end;
`

export const DeleteOverlayElement = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(246, 244, 246, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
`