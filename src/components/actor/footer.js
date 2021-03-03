import {
    FaStopCircle as Stop,
} from 'react-icons/fa';

import { Footer, FooterButton, FooterLapse } from '../../styled/footer';

export default function ActorFooter() {
    return (
        <Footer>
            <FooterLapse><h6>00:00:000</h6></FooterLapse>
            <FooterButton background={"#2d8eff"}>준비/시작</FooterButton>
            <FooterButton background={"#2d8eff"}>녹음</FooterButton>
            <FooterButton background={"#2d8eff"}>컨퍼런스콜</FooterButton>
            <FooterButton background={"deeppink"}>
                <Stop color="white" style={{verticalAlign: "middle", marginRight: "6px"}}/>
                중지
            </FooterButton>
            <FooterButton color={"black"}>신규 트랙</FooterButton>
        </Footer>
    )
}