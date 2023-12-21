import {v1} from "uuid";

const pageIds = `page_${v1()}`;
const layoutIds = `layout_${v1()}`;
const blockIds = `block_${v1()}`;
const groupIds = `group_${v1()}`;
const contentsIds = `contents_${v1()}`;


export const EDITOR_API_V1 = {
    page: [{
        id: pageIds,
        layoutIds: [layoutIds],
        style: {}
    }],
    layout: [
        {
            id: layoutIds,
            parentId: pageIds,
            blockIds: [blockIds]
        }
    ],
    block: [
        {
            id: blockIds,
            parentId: layoutIds,
            groupIds: [groupIds]
        }
    ],
    group: [
        {
            id: groupIds,
            parentId: blockIds,
            contentsIds: [contentsIds]
        }
    ],
    contents: [
        {
            id: contentsIds,
            parentId: groupIds,
            type: 'EMPTY'
        }
    ]
}