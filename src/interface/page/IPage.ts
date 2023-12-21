import {LayoutIdType} from "../layout/ILayout";

export type PageIdType = `page_${string}`;

interface IPage {
    id: PageIdType;
    layoutIds: LayoutIdType[];
    style: any
}

export default IPage