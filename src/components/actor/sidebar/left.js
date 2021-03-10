import { Delete, FileNameText, ListHead, ListSelect, ListTitle, SaveButton, SelectFile, SelectName, SelectSource, SelectTitle, SelectType, SideBarLeft, UploadButton } from '../../../styled/sidebar/left';
import {
    BsFolderFill as Folder,
    BsCheck as Check,
} from 'react-icons/bs';

export default function ActorSideLeft({widthLeft, setWidthLeft, widthMain, setWidthMain}) {
    return (
        <SideBarLeft enable={{right: true}} defaultSize={{width: widthLeft}} onResizeStop={(evt, dir, ref, d) => {
            setWidthLeft(widthLeft + d.width)
            setWidthMain(widthMain - d.width)
        }}>
            <div style={{height: "510px"}}>
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
            </div>
            <div style={{height: "560px"}}>
                <ListHead>
                    <ListTitle>
                        <Folder width="19" height="13" color="lightgray"/> 소스
                    </ListTitle>
                </ListHead>
                <ListSelect right={true}>
                    <SelectTitle file={true}>파일 추가</SelectTitle>
                    <UploadButton />
                </ListSelect>
                {["a.mp3", "b_cc_00000000.mp3"].map((el, idx) => (
                <SelectSource>
                    <SelectType>영상</SelectType>
                    <SelectTitle style={{marginRight: "auto",textDecoration: "underline", margin: "2px 6px 4px 6px", fontWeight: 400, wordBreak: "break-all", fontSize: 12}}>{el}</SelectTitle>
                    <Delete>삭제</Delete>
                </SelectSource>
                ))}
            </div>
        </SideBarLeft>
    )
}