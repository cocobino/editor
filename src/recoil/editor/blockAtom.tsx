import IBlock, {BlockIdType} from "../../interface/block/IBlock";
import {atom, atomFamily} from "recoil";

export const blockIdsAtom = atom<BlockIdType[]>({
    key: 'blockIdsAtom',
    default: [],
});

export const blockAtomFamily = atomFamily<IBlock, BlockIdType>({
    key: 'blockAtomFamily',
});