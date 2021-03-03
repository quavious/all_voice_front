import { Address, Copy, Header, Logo, NavBarTop, Working } from '../../styled/header';
import { Generate, Hide, PlusButton, Setting, SubButton, SubHeader } from '../../styled/subheader';
import {
    BsMicFill as MicIcon, 
    BsLink as CopyLink, 
} from 'react-icons/bs';

export default function ActorHeader() {
    return (
        <>
            <NavBarTop />
            <Header>
                <Logo>ALL VOICE</Logo>
                <MicIcon width="32" color="#ff2c78"/>
                <Working>AllVoice Recording...</Working>
                <Copy><Address>https://allvoice.kr/recording02</Address><CopyLink width="21" height="12" color="#44d7b6"></CopyLink></Copy>
            </Header>
            <SubHeader>
                <Hide>목록 숨기기 {"<<"}</Hide>
                <SubButton>
                    <Setting>대본 숨김</Setting>
                    <Setting>멀티 트랙 숨김</Setting>
                    <Setting>마이크 설정</Setting>
                    <Generate>온라인 레코드 생성 <PlusButton width="19" height="19" color="white"/></Generate>
                </SubButton>
            </SubHeader>
        </>
    )
}