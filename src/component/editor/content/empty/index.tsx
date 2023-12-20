import {FC} from "react";
import {IContent, IContentsTypes} from "../../../../interface/contents/IContents";
import {useRecoilCallback} from "recoil";


const EditorEmptyContents: FC<IContent<IContentsTypes>> = () => {

    const addContents = useRecoilCallback(async () => () => {
        //add Contents
    });


    return <div>
        <button onClick={async () => {
            await addContents();
        }
        }>+
        </button>
    </div>
}

export default EditorEmptyContents;