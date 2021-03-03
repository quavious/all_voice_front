import { ChatBar, ChatButton, ChatInput, ChatMention, ChatStatus, Member, MemberName, MemberStatus, SideBarRight } from '../../../styled/sidebar/right';
import {
    BsFillPersonFill as Person,
} from 'react-icons/bs'

export default function ActorSideRight() {
    return (
        <SideBarRight>
            <Member>
                <Person color="blue"/>
                <MemberName>올보이스/디렉터</MemberName>
                <MemberStatus textColor="lightgreen">• 대기</MemberStatus>
            </Member>
            <Member>
                <Person color="mint"/>
                <MemberName>올보이스 성우/성우1</MemberName>
                <MemberStatus textColor="deeppink">• Recording</MemberStatus>
            </Member>
            <Member>
                <Person color="gray"/>
                <MemberName>참관회원/참관</MemberName>
            </Member>
            <ChatBar>
                <ChatStatus>17:22:32 디렉터가 참여하였습니다.</ChatStatus>
                <div style={{margin: "12px 0"}}>
                    <Person color="blue"/>
                    <MemberName>올보이스/성우</MemberName>
                    <ChatMention>마이크 괜찮으세요?</ChatMention>
                    <span style={{color: 'lightgray', fontSize: 11}}>17:25:32</span>
                </div>
                <div style={{margin: "12px 0"}}>
                    <Person color="blue"/>
                    <MemberName>올보이스/성우</MemberName>
                    <ChatMention>마이크 괜찮으세요?</ChatMention>
                    <span style={{color: 'lightgray', fontSize: 11}}>17:25:32</span>
                </div>
                <ChatStatus>17:25:32 디렉터가 녹음을 중지하였습니다.</ChatStatus>
                <div style={{margin: "12px 0", textAlign: "end"}}>
                    <ChatMention>마이크 괜찮으세요?</ChatMention>
                    <span style={{color: 'lightgray', fontSize: 11}}>17:25:32</span>
                </div>
            </ChatBar>
            <ChatInput>
                <p style={{color: "#000a12", fontSize: 12, margin: 0}}>준비해주세요.</p>
            </ChatInput>
            <ChatButton>보내기</ChatButton>
        </SideBarRight>
    )
}