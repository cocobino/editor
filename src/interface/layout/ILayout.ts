import {PageIdType} from "../page/IPage";
import IBlock from "../block/IBlock";

export type LayoutIdType = `layout_${string}`;

interface ILayout {
    id: LayoutIdType;
    childrenItem: IBlock[];
    parentId: PageIdType;
    type: 'LAYOUT'
}

export default ILayout;