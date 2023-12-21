import {FC} from "react";
import EditorBlock from "../block/EditorBlock";
import ILayout, {LayoutIdType} from "../../../interface/layout/ILayout";
import {css} from "@emotion/css";
import {useRecoilValue} from "recoil";
import {layoutAtomFamily} from "../../../recoil/editor/layoutAtom";

interface Props {
    id: LayoutIdType
}

const EditorLayout: FC<Props> = ({id}) => {
    const layoutAtom = useRecoilValue<ILayout>(layoutAtomFamily(id));

    if (!layoutAtom) return <></>;

    const {blockIds} = layoutAtom

    return <div className={css`
        
    `}>
        {blockIds.map((id) => <EditorBlock key={id} id={id}/>)}
    </div>
}

export default EditorLayout