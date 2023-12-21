import {LayoutIdType} from "../layout/ILayout";
import {GroupIdType} from "../group/IGroup";

export type BlockIdType = `layout_${string}`;

interface IBlock {
    id: BlockIdType;
    groupIds: GroupIdType[];
    parentId: LayoutIdType;
}

export default IBlock;