import { Address, Copy, Header, Logo, NavBarTop, Working } from '../../styled/header';
import { Generate, Hide, Setting, SubButton, SubHeader } from '../../styled/subheader';

export default function ActorHeader() {
    return (
        <>
            <NavBarTop />
            <Header>
                <Logo>ALL VOICE</Logo>
                <img src="/header/record.png" alt="voice-recording" width={13} height={24}/>
                <Working>AllVoice Recording...</Working>
                <Copy>
                    <Address>https://allvoice.kr/recording02</Address>
                    <img src="/header/url.png" alt="url-link" width={21} height={12}/>
                </Copy>
            </Header>
            <SubHeader>
                <Hide>목록 숨기기 {"<<"}</Hide>
                <SubButton>
                    <Setting>대본 숨김</Setting>
                    <Setting>멀티 트랙 숨김</Setting>
                    <Setting>마이크 설정</Setting>
                    <Generate>
                        온라인 레코드 생성
                        <img src="/subheader/plus.png" alt="plus" />
                    </Generate>
                </SubButton>
            </SubHeader>
        </>
    )
}