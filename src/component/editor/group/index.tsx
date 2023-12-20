import {FC} from "react";
import EditorContent from "../content";
import IGroup from "../../../interface/group/IGroup";


const EditorGroup: FC<IGroup> = (props) => {
    const {childrenItem} = props

    return <div>
        {childrenItem.map((props) => <EditorContent key={props.id} {...props}/>)}
    </div>
}

export default EditorGroup