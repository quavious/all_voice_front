import { Resizable } from 're-resizable';
import styled from 'styled-components';

export const RecordBox = styled(Resizable)`
    max-width: 781px;
    height: 100%;
    margin: 28px auto 42px auto;
    padding: 35px 10px 11px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #f8f7f7;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const RecordHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderItems = styled.div`
    display: flex;
    align-items: center;
`

export const RecordButton = styled.button`
    width: 72px;
    height: 32px;
    margin: 0 6px;
    padding: 7px 8px;
    border-radius: 6px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    font-size: 12px;
`

export const subTitleExample = `
얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따듯한 봄바람이다. 인생에 따듯한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이사의 꽃이 피고 희망의 놀이
`

export const ResetButton = styled.button`
    width: 72px;
    height: 32px;
    margin: 0 0 0 8px;
    font-size: 12px;
    background-color: lightgray;
    border: 0px;
    border-radius: 4px;
    color: white;
`

export const RecordWrapper = styled.div`
    height: 330px;
    margin: 42px 0 0;
    padding: 0 0 25px;
    border: solid 1px rgba(184, 193, 203, 0.4);
    background-color: #ffffff;
`

export const RecordFile = styled.div`
    width: 170px;
    height: 24px;
    padding: 4px 2px 0px 10px;
    background-color: #778f9b;
    & p {
        color: #ffffff;
        font-size: 11px;
        margin: 0px;
    }
`

export const RecordType = styled.div`
    width: 40px;
    height: 32px;
    margin: 10px 0 6px 0;
    border: solid 1px #dedddd;
    background-color: white;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        font-size: 11px;
        font-weight: 500;
        color: #778f9b;
        margin-bottom: 1px;
    }
`

export const RecordRight = styled.div`
    width: 590px;
    height: 64px;
    border: solid 1px rgba(184, 193, 203, 0.4);
    background-color: ${props => props.playing === 0 ? "#ffffff" : "#d3ffda"};
`

export const ButtonStyle = {
    "left": {},
    "right": {backgroundColor: "white", padding: "4px 4px", border: "1px solid #dedddd"}
}