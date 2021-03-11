import { Delete, FileNameText, ListHead, ListSelect, ListTitle, SelectFile, SelectName, SelectSource, SelectTitle, SelectType, SideBarLeft } from '../../../styled/sidebar/left';

export default function ActorSideLeft({widthLeft, setWidthLeft, widthMain, setWidthMain}) {
    return (
        <SideBarLeft enable={{right: true}} defaultSize={{width: widthLeft}} minWidth={170} onResizeStop={(evt, dir, ref, d) => {
            setWidthLeft(widthLeft + d.width)
            setWidthMain(widthMain - d.width)
        }}>
            <div style={{height: "510px"}}>
                <ListHead>
                    <ListTitle>
                        <img src="/sidebar/left/folder.png" alt="folder" width="16px" height="13px"/>
                        파일 목록
                    </ListTitle>
                </ListHead>
                <ListSelect>
                    <input type="checkbox" />
                    <SelectTitle>전체 선택</SelectTitle>
                    <img src="/sidebar/left/download.png" alt="direct-download" width="15px" height="12px"/>
                </ListSelect>
                {Array.from({length:3}).map((_, idx) => (
                <SelectFile>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="checkbox" style={{marginBottom: 0}}/>
                        <SelectTitle muted={idx === 0 ? true : false}>김성우</SelectTitle>
                    </div>
                    <SelectName>
                        <FileNameText muted={idx <= 1 ? true : false}>AllVoice Recording</FileNameText>
                        {idx === 0 && <img src="/sidebar/left/pencil.png" alt="pencil" width="13px" height="13px"/>}
                        {idx === 1 && <img src="/sidebar/left/checked.png" alt="checked" width="10.6px" height="8px"/>}
                    </SelectName>
                </SelectFile>
                ))}
            </div>
            <div style={{height: "560px"}}>
                <ListHead>
                    <ListTitle>
                        <img src="/sidebar/left/source.png" alt="source" width="15px" height="14px"/>
                        소스
                    </ListTitle>
                </ListHead>
                <ListSelect right={true}>
                    <SelectTitle file={true}>파일 추가</SelectTitle>
                    <img src="/sidebar/left/upload.png" alt="direct-upload" width="15px" height="12px" style={{marginLeft: 4}}/>
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