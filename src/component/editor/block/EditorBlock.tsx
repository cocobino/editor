import {FC} from "react";
import EditorGroup from "../group";
import IBlock from "../../../interface/block/IBlock";


const EditorBlock: FC<IBlock> = (props) => {
    const {childrenItem} = props;

    return <div>
        {childrenItem.map((group) => <EditorGroup key={group.id} {...group}/>)}
    </div>
}

export default EditorBlock