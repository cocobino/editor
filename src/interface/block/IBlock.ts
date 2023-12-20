import {LayoutIdType} from "../layout/ILayout";
import IGroup from "../group/IGroup";

export type BlockIdType = `layout_${string}`;

interface IBlock {
    id: BlockIdType;
    childrenItem: IGroup[];
    parentId: LayoutIdType;
    type: 'BLOCK'
}

export default IBlock;