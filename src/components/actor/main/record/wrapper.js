import {
    FaVolumeOff as Off,
    FaVolumeUp as Up

} from 'react-icons/fa'
import { RecordFile, RecordRight, RecordType, RecordWrapper } from '../../../../styled/main/record'

export default function ActorRecordWrapper() {
    return (
        <RecordWrapper>
            {
            Array.from({length: 3}).map(()=>(
                <div style={{display: "flex", alignItems: "flex-end", margin: "10px 0 10px 0"}}>
                    <div>
                        <RecordFile><span>file_1611.wav</span></RecordFile>
                        <div style={{display: "flex", width: "170px", justifyContent: "flex-end"}}>
                        {
                        ["Mute", "Solo", "Delete", "Select"].map(e => (
                            <RecordType><span>{e}</span></RecordType>
                        ))
                        }
                        </div>
                        <div style={{display: "flex", width: "170px", justifyContent: "flex-end", alignItems: "center"}}>
                            <Off width="9" height="14" color="#2d8eff"/>
                            <input type="range" name="volume" min="0" max="120" step="0.1" style={{width: "124px"}}/>
                            <Up width="9" height="14" color="#2d8eff"/>
                        </div>
                    </div>
                    <RecordRight></RecordRight>
                </div>
            ))
            }
        </RecordWrapper>
    )
}