import {atom} from "recoil";
import {EDITOR_API_V1} from "../../api/editor.api";

export const editorAtom = atom({
    key: '@editorAtom',
    default: EDITOR_API_V1
});