import {TimeNumber, TimerBottom, TimerCheckBox, TimerExtra, TimerFileName, TimerLapse, TimerProgress, TimerSelect, TimerWrapper } from '../../../styled/main/timer';

export default function ActorMainTimer() {
    return (
        <TimerWrapper>
            <TimerFileName>
                <TimerLapse>
                    <TimeNumber>
                        <h3 style={{margin: "0 auto", color: "deeppink"}}>2</h3>
                    </TimeNumber>
                    <h4>21:10:033</h4>
                </TimerLapse>
                <p>allvoice.xxx</p>
            </TimerFileName>
            <div style={{display: 'flex', alignItems: "center"}}>
                <TimerSelect name="" id="">
                    <option value="44.1Khz">44.1Khz</option>
                </TimerSelect>
                <TimerCheckBox>
                    <input type="checkbox" />
                    <span style={{fontSize: 14, marginLeft: 4}}>에코 캔슬링</span>
                </TimerCheckBox>
                <TimerCheckBox>
                    <input type="checkbox" />
                    <span style={{fontSize: 14, marginLeft: 4}}>노이즈 서프레션</span>
                </TimerCheckBox>
                <TimerCheckBox>
                    <input type="checkbox" />
                    <span style={{fontSize: 14, marginLeft: 4}}>녹음 모니터링</span>
                </TimerCheckBox>
                <TimerExtra></TimerExtra>
            </div>
            <TimerProgress max="100" value="1"></TimerProgress>
            <TimerBottom></TimerBottom>
        </TimerWrapper>
    )
}