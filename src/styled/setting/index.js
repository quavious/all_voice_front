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
    background-color: white;
    padding: 24px 24px 56px;

    & h3 {
        font-size: 21px;
    }
`

export const MicSelect = styled.select`
    width: 156px;
    height: 37px;
    padding: 8px 12px 8px 6px;
    background-color: #f8f7f7;
    border: 0px;
`

export const MicForm = styled.div`
    width: 733px;
    height: 56px;
    margin: 16px 0 8px;
    border: solid 1px rgba(184, 193, 203, 0.4);
    background-color: #d3ffda;
`

export const MicButton = styled.div`
  width: 98px;
  height: 36px;
  margin: 0 16px 0 0;
  padding: 8px 21px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  ${props => `
    background-color: ${props && props.color};
  `}
  & h5 {
    margin: 0 0 8px 0;
    font-size: 14px;
    text-align: center;
    color: ${
        props => props.color === "#ffffff" ? "black" : "#ffffff"
    };
  }
`