import {FC} from "react";
import {IContent, IContentsTypes} from "../../../interface/contents/IContents";
import {css} from "@emotion/css";
import EditorEmptyContents from "./empty";


const EditorContent: FC<IContent<IContentsTypes>> = (props) => {
    const {contentsType} = props;

    const contentsElem = () => {
        switch (contentsType) {
            case "TEXT":
                return <div>text</div>;
            case 'IMAGE':
                return <div>image</div>;
            case 'EMPTY':
                return <EditorEmptyContents id={props.id}/>
            default:
                return <></>;
        }
    }

    return <div className={css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 150px;
    border: 1px dashed black; 
    cursor: pointer;
    `}>{contentsElem()}</div>
}

export default EditorContent