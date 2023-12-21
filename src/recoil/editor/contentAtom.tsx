import {atom, atomFamily} from "recoil";
import {ContentsIdType, IContent, IContentsTypes} from "../../interface/contents/IContents";

export const contentsIdsAtom = atom<ContentsIdType[]>({
    key: 'contentsIdsAtom',
    default: [],
});

export const contentsAtomFamily = atomFamily<IContent<IContentsTypes>, string>({
    key: 'contentsState',
});
