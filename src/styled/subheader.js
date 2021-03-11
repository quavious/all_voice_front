import styled from 'styled-components';

export const SubHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const Hide =styled.small`
    margin-left: 110px;
    width: 90px;
    height: 18px;
    font-size: 12px;
    color: #8e8e93;
    margin-top: 21px;
    margin-bottom: 37px;
`
export const SubButton = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 110px;
    align-items: center;
`;

export const Setting = styled.button`
    height: 26px;
    margin-left: 6px;
    padding: 4px 8px;
    border-radius: 6px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    color: #2d8eff;
    font-size: 12px;
    background-color: transparent;
`;

export const Generate = styled.button`
    width: 219px;
    height: 44px;
    margin-left: 28px;
    border-radius: 12.5px;
    border: 0px;
    background-color: #2d8eff;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 19px;
        margin-left: 8px;
    }
`;