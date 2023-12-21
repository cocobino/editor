import {useEffect, useState} from "react";
import EditorPage from "./page";
import useEditorEvent from "./useEditorEvent";

const Editor = () => {
    const [load, setLoad] = useState(false);
    const {callback} = useEditorEvent()

    useEffect(() => {
        //fetching
        (async () => await callback())();
        setLoad(true);
    }, [])

    if (!load) return (<div>loading...</div>);

    return (<div>
        <EditorPage/>
    </div>);
}

export default Editor;