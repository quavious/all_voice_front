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
                    <option value="48Khz">48Khz</option>
                </TimerSelect>
                <TimerCheckBox>
                    <input type="checkbox" />
                    <span>에코 캔슬링</span>
                </TimerCheckBox>
                <TimerCheckBox>
                    <input type="checkbox" />
                    <span>노이즈 서프레션</span>
                </TimerCheckBox>
                <TimerCheckBox>
                    <input type="checkbox" />
                    <span>녹음 모니터링</span>
                </TimerCheckBox>
                <TimerExtra type="range" name="volume" min="0" max="120" step="0.1" style={{width: "width: 122px;"}}/>
            </div>
            <TimerProgress max="100" value="1"></TimerProgress>
            <TimerBottom></TimerBottom>
        </TimerWrapper>
    )
}