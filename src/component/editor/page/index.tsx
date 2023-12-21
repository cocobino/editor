import EditorLayout from "../layout";
import {css} from "@emotion/css";
import {useRecoilValue} from "recoil";
import {pageAtom} from "../../../recoil/editor/pageAtom";


const EditorPage = () => {
    const page = useRecoilValue(pageAtom);


    const {layoutIds} = page

    return <div className={css`
        width: 100%;
        height: 100%;
    `}>
        {layoutIds.map((id => <EditorLayout key={id} id={id}/>))}
    </div>
}

export default EditorPage