import {useEffect, useState} from "react";
import EditorPage from "./page";
import {useRecoilState} from "recoil";
import {editorAtom} from "../../recoil/editor/atom";

const Editor = () => {
    const [editor, setEditor] = useRecoilState(editorAtom);
    const [load, setLoad] = useState(false);


    useEffect(() => {
        //fetching
        setLoad(true);
    }, [])

    if (!load) return (<div>loading...</div>);

    return (<div>
        <EditorPage {...editor}/>
    </div>);
}

export default Editor;