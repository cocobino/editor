import {PageIdType} from "../page/IPage";
import {BlockIdType} from "../block/IBlock";

export type LayoutIdType = `layout_${string}`;

interface ILayout {
    id: LayoutIdType;
    blockIds: BlockIdType[];
    parentId: PageIdType;
}

export default ILayout;