import { Main, Setting } from "../../styled/setting";
import Confirm from './confirm'
import Mic from './mic';
import Create from './create'

export default function SettingComponent() {
    return <Setting>
        <Main width={780} height={435}>
            <img src="/logo.png" width="106px" alt="all-voice-logo"/>
            <Mic />
        </Main>
    </Setting>
}