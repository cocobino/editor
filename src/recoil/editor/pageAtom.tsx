import {atom} from "recoil";
import IPage from "../../interface/page/IPage";
import {v1} from "uuid";

export const pageAtom = atom<IPage>({
    key: 'pageAtom',
    default: {
        id: `page_${v1()}`,
        layoutIds: [],
        style: {}
    }
});