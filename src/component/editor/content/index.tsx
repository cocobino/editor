import {FC} from "react";
import {ContentsIdType} from "../../../interface/contents/IContents";
import {css} from "@emotion/css";
import EditorEmptyContents from "./empty";
import {useRecoilValue} from "recoil";
import {contentsAtomFamily} from "../../../recoil/editor/contentAtom";

interface Props {
    id: ContentsIdType
}

const EditorContent: FC<Props> = ({id}) => {
    const contentAtom = useRecoilValue(contentsAtomFamily(id));

    const {contentsType} = contentAtom;

    const contentsElem = () => {
        switch (contentsType) {
            case "TEXT":
                return <div>text</div>;
            case 'IMAGE':
                return <div>image</div>;
            case 'EMPTY':
                return <EditorEmptyContents id={id}/>
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