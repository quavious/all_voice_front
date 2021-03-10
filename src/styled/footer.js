import styled from 'styled-components';

export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    height: 64px;
    padding: 10px 320px 10px 190px;
    background-image: linear-gradient(to left, #92e9d6, #a5d7ff, #2d8eff);
    display: flex;
    align-items: center;
`

export const FooterLapse = styled.div`
    width: 136px;
    height: 43px;
    margin: 0 63px 0 0;
    padding: 8px 21px;
    border-radius: 21.5px;
    background-color: #ffffff;
    & h6 {
        margin: 0px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #44d7b6;
    }
`

export const FooterButton = styled.button`
    height: 36px;
    margin: 4px 8px;
    padding: 8px 21px;
    border-radius: 5px;
    white-space: nowrap;
    background-color: ${props => props && props.background};
    color: ${props => (props && props.color) || "white"};
    font-size: 14px;
    border: 0px;
`