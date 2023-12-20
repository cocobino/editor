import {GroupIdType} from "../group/IGroup";

export type ContentsIdType = `contents_${string}`;
export type IContentsTypes = any;

export type IContent<T> = {
    id: ContentsIdType;
    parentId: GroupIdType;
    type: "CONTENTS"
    contentsType: 'TEXT' | 'IMAGE' | 'EMPTY'
} & T
