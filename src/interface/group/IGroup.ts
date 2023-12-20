import {BlockIdType} from "../block/IBlock";
import {IContent, IContentsTypes} from "../contents/IContents";

export type GroupIdType = `group_${string}`;

interface IGroup {
    id: GroupIdType;
    childrenItem: IContent<IContentsTypes>[];
    parentId: BlockIdType;
    type: 'GROUP'
}

export default IGroup;