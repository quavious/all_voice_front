import { MainRow, MainSelect, SubTitleLeft, SubTitleRight } from '../../../styled/main/timer';
import { RecordBox, subTitleExample } from '../../../styled/main/record';
import ActorMainTimer from './timer';
import ActorRecordHeader from './record/header';
import ActorRecordWrapper from './record/wrapper';
export default function ActorMain() {
    return (
            <div style={{width: 780, height: 595, backgroundColor: "#f8f7f7"}}>
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
                    <p style={{margin: "29px 26px 4px", fontSize: 12, lineHeight: 1.83}}>{subTitleExample}</p>
                </SubTitleRight>
            </MainRow>
            <ActorMainTimer />
            <RecordBox>
                <ActorRecordHeader />
                <ActorRecordWrapper />
            </RecordBox>
        </div>
    )
}