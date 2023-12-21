import {atom, atomFamily} from "recoil";
import ILayout, {LayoutIdType} from "../../interface/layout/ILayout";

export const layoutAtom = atom<LayoutIdType[]>({
    key: 'layoutIdsAtom',
    default: [],
});

export const layoutAtomFamily = atomFamily<ILayout, LayoutIdType>({
    key: 'layoutAtomFamily',
});
