import {atom, atomFamily} from "recoil";
import IGroup, {GroupIdType} from "../../interface/group/IGroup";

export const groupIdsAtom = atom<GroupIdType[]>({
    key: 'groupIdsAtom',
    default: [],
});

export const groupAtomFamily = atomFamily<IGroup, GroupIdType>({
    key: 'groupState',
});
