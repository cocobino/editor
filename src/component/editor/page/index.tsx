import EditorLayout from "../layout";
import {FC} from "react";
import IPage from "../../../interface/page/IPage";
import {css} from "@emotion/css";


const EditorPage: FC<IPage> = (props) => {
    const {childrenItem} = props;

    return <div className={css`
        width: 100%;
        height: 100%;
    `}>
        {childrenItem.map((props => <EditorLayout key={props.id} {...props}/>))}
    </div>
}

export default EditorPage