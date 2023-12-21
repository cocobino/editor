import {BlockIdType} from "../block/IBlock";
import {ContentsIdType} from "../contents/IContents";

export type GroupIdType = `group_${string}`;

interface IGroup {
    id: GroupIdType;
    contentsIds: ContentsIdType[];
    parentId: BlockIdType;
}

export default IGroup;