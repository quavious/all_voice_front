import { TimerProgress } from "../../styled/main/timer";
import { MicButton, MicForm, MicSelect } from "../../styled/setting";

export default function Mic(){
    return (
        <>
            <h3>마이크 설정</h3>
            <MicSelect>
            <option value="마이크 없음">마이크 없음</option>
            </MicSelect>
            <MicForm />
            <TimerProgress max="100" value="1"/>
            <div style={{display: "flex", alignItems: "flex-end", justifyContent: "center", height: "180px", paddingBottom: "60px"}}>
                <MicButton color={"#ffffff"}><h5>취소</h5></MicButton>
                <MicButton color={"#2d8eff"}><h5>확인</h5></MicButton>
            </div>
        </>
    )
}
