import { FileNameText, ListHead, ListSelect, ListTitle, SaveButton, SelectFile, SelectName, SelectSource, SelectTitle, SideBarLeft, UploadButton } from '../../../styled/sidebar/left';
import {
    BsFolderFill as Folder,
    BsCheck as Check,
} from 'react-icons/bs';

export default function ActorSideLeft() {
    return (
        <SideBarLeft>
            <ListHead>
                <ListTitle>
                    <Folder width="19" height="13" color="lightgray"/> 파일 목록
                </ListTitle>
            </ListHead>
            <ListSelect>
                <input type="checkbox" />
                <SelectTitle>전체 선택</SelectTitle>
                <SaveButton />
            </ListSelect>
            {Array.from({length:3}).map((_, idx) => (
            <SelectFile>
                <input type="checkbox" />
                <SelectTitle muted={idx === 0 ? true : false}>김성우</SelectTitle>
                <SelectName>
                    <FileNameText muted={idx <= 1 ? true : false}>AllVoice Recording</FileNameText>
                    <Check color="lightgreen" width="5" fontWeight="600"/>
                </SelectName>
            </SelectFile>
            ))}
            <ListHead style={{marginTop: 173}}>
                <ListTitle>
                    <Folder width="19" height="13" color="lightgray"/> 소스
                </ListTitle>
            </ListHead>
            <ListSelect right={true}>
                <SelectTitle file={true}>파일 추가</SelectTitle>
                <UploadButton />
            </ListSelect>
            {Array.from({length:2}).map((_, idx) => (
            <SelectSource>
                <SelectTitle style={{fontWeight: 800, borderBottom: "1px solid black"}}>김성우</SelectTitle>
                <span style={{color: 'lightgray', fontSize: 11}}>삭제</span>
            </SelectSource>
            ))}
        </SideBarLeft>
    )
}