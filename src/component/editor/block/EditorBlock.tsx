import {FC} from "react";
import EditorGroup from "../group";
import IBlock, {BlockIdType} from "../../../interface/block/IBlock";
import {useRecoilValue} from "recoil";
import {blockAtomFamily} from "../../../recoil/editor/blockAtom";


interface Props {
    id: BlockIdType
}

const EditorBlock: FC<Props> = ({id}) => {
    const blockAtom = useRecoilValue<IBlock>(blockAtomFamily(id));

    if (!blockAtom) return <></>;

    const {groupIds} = blockAtom

    return <div>
        {groupIds.map((id) => <EditorGroup key={id} id={id}/>)}
    </div>
}

export default EditorBlock