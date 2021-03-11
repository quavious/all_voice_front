import styled from 'styled-components';
import {Resizable} from 're-resizable'

export const SideBarLeft = styled(Resizable)`
    min-height: 1130px;
    margin-left: 110px;
    background-color: #f8f7f7;
    border-right: 13px solid gray;
`;

export const ListHead = styled.div`
    width: 100%;
    height: 58px;
    padding: 16px 0 18px 15px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #e9f4ff;
`;

export const ListTitle = styled.span`
    font-size: 16px;
    color: #1f2d3d;
    height: 19px;

    & img {
        margin-right: 9px;
    }
`

export const ListSelect = styled.div`
    height: 32px;
    padding: 1px 15px 1px 14px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    display: flex;
    justify-content: ${props => props.right ? "flex-end" : "start"};
    align-items: center;
    & img {
        margin-left: auto;
    }
`

export const SelectTitle = styled.span`
    font-size: 11px;
    color: ${props => props.file? "#2d8eff" : props.muted ? "lightgrey" : "#000a12"};
    ${props => props.file ? "font-weight: 800;" : null}
    margin-left: 4px;
`;

export const SelectFile = styled.div`
    width: 100%;
    min-height: ${props => props.file ? "37px" : "84px"};
    padding: 10px 10px 16px 14px;
    background-color: #ffffff;
    border: solid 1px rgba(0, 0, 0, 0.1);
`

export const SelectName = styled.div`
    min-height: 30px;
    margin: 7px 0 0;
    padding: 2px 5.4px 0px 3px;
    background-color: #f8f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FileNameText = styled.p`
    margin: 4px;
    width: 96px;
    font-size: 11px;
    color: ${props => props.muted ? "lightgrey" : "#000a12"};
    white-space: nowrap;
`

export const SelectSource = styled.div`
    width: 100%;
    min-height: 37px;
    padding: 0 16px 0 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    border: solid 1px rgba(0, 0, 0, 0.1);
`

export const SelectType = styled.h5`
    margin: 0px;
    min-width: 32px;
    max-width: 32px;
    height: 22px; 
    background-color: lightgreen;
    color: white;
    font-size: 12px;
    text-align: center;
    padding-top: 4px;
    border-radius: 4px;
`

export const Delete = styled.span`
    color: lightgray;
    font-size: 9px;
    white-space: nowrap;
    margin-left: auto;
`