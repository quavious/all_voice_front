import {
    FaPlayCircle as Play,
    FaPauseCircle as Pause,
    FaStopCircle as Stop,
    FaFastBackward as Backward,
    FaFastForward as Forward,
} from 'react-icons/fa';
import { HeaderItems, RecordButton, RecordHeader, ResetButton } from '../../../../styled/main/record';

export default function ActorRecordHeader() {
    return (
        <RecordHeader>
            <HeaderItems>
                <Play style={{width: "32", height: "32", color: '#2d8eff', margin: "0 6px"}}/>
                <Pause style={{width: "32", height: "32", color: 'lightgreen', margin: "0 6px"}} />
                <Stop color="deeppink" style={{width: "32", height: "32", margin: "0 6px"}} />
                <Backward style={{border: "1px", backgroundColor: "#2d8eff", width: "20", height: "32", borderRadius: "50%", color: 'white', margin: "0 6px", padding: "0 6px"}} />
                <Forward style={{border: "1px", backgroundColor: "#2d8eff", width: "20", height: "32", borderRadius: "50%", color: 'white', margin: "0 6px", padding: "0 6px"}} />
                <RecordButton>신규 트랙</RecordButton>
            </HeaderItems>
            <HeaderItems>
                <img src="/record/size-up.png" alt="size-up" />
                <img src="/record/size-down.png" alt="size-down" />
                <img src="/record/headphones.png" alt="headphones" />
                <img src="/record/italic.png" alt="italic" />
                <img src="/record/stretch.png" alt="stretch" />
                <ResetButton>초기화</ResetButton>
            </HeaderItems>
        </RecordHeader>
    )
}