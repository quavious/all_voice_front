import styled from 'styled-components';
import {
    BsDownload as Download,
    BsUpload as Upload,
} from 'react-icons/bs';

export const SideBarLeft = styled.div`
    width: 170px;
    min-width: 170px;
    height: 1130px;
    margin-right: 13px;
    margin-left: 110px;
    background-color: #f8f7f7;
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
`

export const ListSelect = styled.div`
    height: 32px;
    padding: 1px 15px 1px 14px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    display: flex;
    justify-content: ${props => props.right ? "flex-end" : "start"};
    align-items: center;
`

export const SelectTitle = styled.span`
    font-size: 11px;
    color: ${props => props.file? "blue" : props.muted ? "lightgrey" : "#000a12"};
    ${props => props.file ? "font-weight: 800;" : null}
    margin-left: 4px;
`;

export const SaveButton = styled(Download)`
    margin-left: auto;
    margin-right: 8px;
    width: 15px;
    height: 12px;
    color: blue;
`

export const SelectFile = styled.div`
    width: 100%;
    height: ${props => props.file ? "37px" : "84px"};
    padding: 10px 10px 16px 14px;
    background-color: #ffffff;
    border: solid 1px rgba(0, 0, 0, 0.1);
`

export const SelectName = styled.div`
    width: 145px;
    height: 30px;
    margin: 7px 0 0;
    padding: 2px 5.4px 0px 6px;
    background-color: #f8f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FileNameText = styled.span`
    width: 96px;
    height: 17px;
    font-size: 11px;
    color: ${props => props.muted ? "lightgrey" : "#000a12"};
`

export const UploadButton = styled(Upload)`
    margin-left: 5px;
    margin-right: 8px;
    width: 15px;
    height: 12px;
    color: blue;
`

export const SelectSource = styled.div`
    width: 100%;
    height: 37px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border: solid 1px rgba(0, 0, 0, 0.1);
`