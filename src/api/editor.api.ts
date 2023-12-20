import {v1} from "uuid";

const pageIds = `page_${v1()}`;
const layoutIds = `layout_${v1()}`;
const blockIds = `block_${v1()}`;
const groupIds = `group_${v1()}`;


export const EDITOR_API_V1 = {
    id: pageIds,
    childrenItem: [
        {
            id: layoutIds,
            parentId: pageIds,
            childrenItem: [
                {
                    id: blockIds,
                    parentId: layoutIds,
                    childrenItem: [
                        {
                            id: groupIds,
                            parentId: blockIds,
                            childrenItem: [
                                {
                                    id: `contents_${v1()}`,
                                    parentId: groupIds,
                                    type: 'CONTENTS',
                                    contentsType: 'EMPTY',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}