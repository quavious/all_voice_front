import { MainRow, MainSelect, SubTitleLeft, SubTitleRight, TimerBox } from '../../../styled/main/timer';
import { RecordBox, subTitleExample } from '../../../styled/main/record';
import ActorMainTimer from './timer';
import ActorRecordHeader from './record/header';
import ActorRecordWrapper from './record/wrapper';
import {Resizable} from 're-resizable';
import { useState } from 'react';

export default function ActorMain({widthLeft, setWidthLeft, widthMain, setWidthMain, widthRight, setWidthRight}) {
    const [heightTimer, setHeightTimer] = useState(594)
    const [heightRecord, setHeightRecord] = useState(470)
    return (
        <Resizable style={{width: "100%"}} enable={null} maxWidth={widthMain} minWidth={0}>
            <TimerBox style={{height: heightTimer}} enable={{bottom: true}} onResizeStop={(evt, dir, ref, d) => {
                setHeightTimer(heightTimer + d.height);
                setHeightRecord(heightRecord - d.height)
            }}>
                <MainRow>
                {
                ["기본", "동영상", "대본", "대본 크게"].map(el => (
                    <MainSelect>
                        <input type="checkbox" />
                        <span style={{fontSize: 14, marginLeft: 4}}>{el}</span>
                    </MainSelect>
                ))
                }
                </MainRow>
                <MainRow>
                    <SubTitleLeft></SubTitleLeft>
                    <SubTitleRight>
                        <p>{subTitleExample}</p>
                        <button>작성 완료</button>
                    </SubTitleRight>
                </MainRow>
                <ActorMainTimer />
            </TimerBox>
            <RecordBox style={{height: heightRecord}} maxHeight={heightRecord}>
                <ActorRecordHeader />
                <ActorRecordWrapper />
            </RecordBox>
        </Resizable>
    )
}