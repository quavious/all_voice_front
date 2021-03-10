import {
    FaPlayCircle as Play,
    FaPauseCircle as Pause,
    FaStopCircle as Stop,
    FaFastBackward as Backward,
    FaFastForward as Forward,
    FaHeadphones as Headphones,
    FaSearchPlus as Plus,
    FaSearchMinus as Minus,
    FaItalic as Italic,
    FaArrowsAltH as Arrow,
} from 'react-icons/fa';
import { ButtonStyle, HeaderItems, RecordButton, RecordHeader, ResetButton } from '../../../../styled/main/record';

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
                <Plus width="24" style={ButtonStyle["right"]}/>
                <Minus width="24" style={ButtonStyle["right"]}/>
                <Headphones width="24" style={ButtonStyle["right"]}/>
                <Italic width="24" style={ButtonStyle["right"]}/>
                <Arrow width="24" style={ButtonStyle["right"]}/>
                <ResetButton>초기화</ResetButton>
            </HeaderItems>
        </RecordHeader>
    )
}