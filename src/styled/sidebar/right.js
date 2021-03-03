import styled from 'styled-components';

export const SideBarRight = styled.div`
    width: 240px;
    min-width: 240px;
    height: 960px;
    margin: 0px 109px 0px 17px;
    background-color: #ffffff;
`

export const Member = styled.div`
    width: 100%;
    height: 32px;
    background-color: #f8f7f7;
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding: 7px 0px 7px 12px;
    display: flex;
    align-items: center;
`;

export const MemberName = styled.span`
    height: 18px;
    margin: 0 8px 0 6px;
    font-size: 12px;
    color: #465262;
`;

export const MemberStatus = styled.span`
    height: 15px;
    margin: 0 0 0 2px;
    font-size: 9px;
    color: ${props => (props && props.textColor) || "black"};
    font-weight: 700;
`

export const ChatBar = styled.div`
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding-left: 12px;
    padding-right: 9px; 
    height: 820px;
`;

export const ChatMention = styled.p`
    height: 18px;
    margin: 4px 0;
    padding: 4px 6px 3px;
    border-radius: 4px;
    background-color: #f8f7f7;
    color: #000a12;
    font-size: 11px;
`;

export const ChatStatus = styled.p`
    height: 13px;
    font-size: 9px;
    color: #778f9b;
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: center;
`;

export const ChatInput = styled.div`
    height: 84px;
    padding: 12px 0px 54px 10px;
    margin-bottom: 8px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
`

export const ChatButton = styled.button`
    background-color: lightgreen;
    border: 0;
    padding: 6px 12px;
    border-radius: 6px;
    color: white;
    float: right;
`