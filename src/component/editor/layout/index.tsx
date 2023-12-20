import {FC} from "react";
import EditorBlock from "../block/EditorBlock";
import ILayout from "../../../interface/layout/ILayout";
import {css} from "@emotion/css";

const EditorLayout: FC<ILayout> = (props) => {
    const {childrenItem} = props

    return <div className={css`
        
    `}>
        {childrenItem.map((block) => <EditorBlock key={block.id} {...block}/>)}
    </div>
}

export default EditorLayout