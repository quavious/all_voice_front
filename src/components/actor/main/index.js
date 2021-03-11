import { MainRow, MainSelect, SubTitleLeft, SubTitleRight, TimerBox } from '../../../styled/main/timer';
import { RecordBox, subTitleExample } from '../../../styled/main/record';
import ActorMainTimer from './timer';
import ActorRecordHeader from './record/header';
import ActorRecordWrapper from './record/wrapper';
import {Resizable} from 're-resizable';
import { useState } from 'react';

export default function ActorMain({widthMax, widthMain, setWidthMain, widthRight, setWidthRight}) {
    const [heightTimer, setHeightTimer] = useState(594)
    const [heightRecord, setHeightRecord] = useState(470)
    
    return (
        <Resizable enable={{right: true}} size={{width: widthMain}} maxWidth={widthMax} minWidth={400} onResizeStop={(evt, dir, ref, d)=>{
            setWidthMain(widthMain + d.width)
            setWidthRight(widthRight - d.width)
        }}>
            <TimerBox size={{height: heightTimer}} enable={{bottom: true}} onResizeStop={(evt, dir, ref, d) => {
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
                    <SubTitleLeft style={{height: heightTimer - 350}}></SubTitleLeft>
                    <SubTitleRight style={{height: heightTimer - 350}}>
                        <p>{subTitleExample}</p>
                        <button>작성 완료</button>
                    </SubTitleRight>
                </MainRow>
                <ActorMainTimer />
            </TimerBox>
            <RecordBox size={{height: heightRecord}} maxHeight={heightRecord}>
                <ActorRecordHeader />
                <ActorRecordWrapper height={heightRecord}/>
            </RecordBox>
        </Resizable>
    )
}