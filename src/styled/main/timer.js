import { Resizable } from 're-resizable';
import styled from 'styled-components';

export const MainRow = styled.div`
    display: flex;
    align-items: center;
`

export const MainSelect = styled.div`
    height: 48px;
    padding: 14px 25px 14px 15px;
    background-color: #f8f7f7;
    display: flex;
    align-items: center;
`

export const SubTitle = styled.div`
    height: 245px;
    margin: 5px 6px 6px 9px;
`

export const SubTitleLeft = styled(SubTitle)`
    width: 100%;
    max-width: 367px;
    background-color: #d3ffda;
`

export const SubTitleRight = styled(SubTitle)`
    position: relative;
    width: 100%;
    max-width: 388px;
    background-color: #ffffff;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    & p {
        margin: 29px 26px 4px;
        font-size: 12px;
        line-height: 1.83;
    }
    & > button {
        width: 72px;
        height: 32px;
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
        border: 0px;
        border-radius: 4px;
        background-color: #44d7b6;
        position: absolute;
        bottom: 10px;
        right: 15px;
    }
`

export const TimerBox = styled(Resizable)`
    background-color: #f8f7f7;
    border-bottom: 14px solid gray;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const TimerWrapper = styled.div`
  max-width: 761px;
  height: 264px;
  margin: 4px 4px 0 9px;
  padding: 12px 16px 24px 12px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(220, 238, 255, 0.64);
`

export const Timer = styled.div`
    height: 43px;
    border-radius: 21.5px;
`

export const TimerLapse = styled(Timer)`
    width: 143px;
    background-color: #44d7b6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & > h4 {
        color: white;
        text-align: center;
    }
`

export const TimeNumber = styled.div`
    margin: 0 8px 0 6px;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TimerFileName = styled(Timer)`
    width: 360px;
    background-color: white;
    display: flex;
    align-items: center;
    & p {
        margin-left: 24px;
    }
`

export const TimerSelect = styled.select`
    width: 110px;
    height: 37px;
    padding: 9px 12px 8px;
    background-color: #ffffff;
    margin: 8px 8px 12px 0;
    border: 0px;
`

export const TimerCheckBox = styled.div`
    height: 37px;
    margin: 8px 0 12px 8px;
    background-color: #e6f1fc;
    display: flex;
    align-items: center;

    & span {
        font-size: 14px;
        margin-left: 4px;
    }
`

export const TimerExtra = styled.input`
    -webkit-appearance: none;
    height: 8px;
    margin: 0 10px;
    border-radius: 4px;
    background-color: #ffffff;
`

export const TimerProgress = styled.progress`
    width: 100%;
    border: 0px;
    height: 16px;
    margin-bottom: 8px;
    border-radius: 4px;
    &::-webkit-progress-value {
        background: #44d7b6;
    }
`

export const TimerBottom = styled.div`
    width: 100%;
    height: 112px;
    margin: 6px 0 0 0;
    border: solid 1px rgba(184, 193, 203, 0.4);
    background-color: #d3ffda;
`