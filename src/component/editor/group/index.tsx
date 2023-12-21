import {FC} from "react";
import EditorContent from "../content";
import IGroup, {GroupIdType} from "../../../interface/group/IGroup";
import {groupAtomFamily} from "../../../recoil/editor/groupAtom";
import {useRecoilValue} from "recoil";


interface Props {
    id: GroupIdType
}

const EditorGroup: FC<Props> = ({id}) => {
    const groupAtom = useRecoilValue<IGroup>(groupAtomFamily(id));

    if (!groupAtom) return <></>;

    const {contentsIds} = groupAtom;

    return <div>
        {contentsIds.map((id) => <EditorContent key={id} id={id}/>)}
    </div>
}

export default EditorGroup