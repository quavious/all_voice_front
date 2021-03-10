import styled from 'styled-components';

export const Setting = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Main = styled.div`
    ${props => `
        width: ${props.width}px;
        height: ${props.height}px;
    `}
    position: relative;
    background-color: white;
    & > img {
        position: absolute;
        top: 24px;
        left: 24px;
    }
`