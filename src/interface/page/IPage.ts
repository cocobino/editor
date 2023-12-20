import ILayout from "../layout/ILayout";

export type PageIdType = `page_${string}`;

interface IPage {
    id: PageIdType;
    childrenItem: ILayout[];
    type: 'PAGE'
}

export default IPage