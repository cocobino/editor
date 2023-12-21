import {EDITOR_API_V1} from "../../api/editor.api";
import IPage from "../../interface/page/IPage";
import {pageAtom} from "../../recoil/editor/pageAtom";
import {layoutAtom, layoutAtomFamily} from "../../recoil/editor/layoutAtom";
import ILayout from "../../interface/layout/ILayout";
import {blockAtomFamily, blockIdsAtom} from "../../recoil/editor/blockAtom";
import IBlock from "../../interface/block/IBlock";
import {groupAtomFamily, groupIdsAtom} from "../../recoil/editor/groupAtom";
import IGroup from "../../interface/group/IGroup";
import {contentsAtomFamily, contentsIdsAtom} from "../../recoil/editor/contentAtom";
import {IContent, IContentsTypes} from "../../interface/contents/IContents";
import {useRecoilCallback} from "recoil";

const useEditorEvent = () => {
    const callback = useRecoilCallback(({set}) => async () => {
        const {page, layout, block, group, contents} = EDITOR_API_V1;


        for await(const pageRs of page) {
            const {layoutIds} = pageRs as IPage

            set(pageAtom, {...pageRs});
            set(layoutAtom, [...layoutIds]);
        }

        for await(const layoutRs of layout) {
            const {id, blockIds} = layoutRs as ILayout;

            set(layoutAtomFamily(id), {...layoutRs});
            set(blockIdsAtom, [...blockIds]);
        }

        for await(const blockRs of block) {
            const {id, groupIds} = blockRs as IBlock;

            set(blockAtomFamily(id), {...blockRs});
            set(groupIdsAtom, [...groupIds]);
        }

        for await(const groupRs of group) {
            const {id, contentsIds} = groupRs as IGroup;

            set(groupAtomFamily(id), {...groupRs});
            set(contentsIdsAtom, [...contentsIds]);
        }

        for await(const contentRs of contents) {
            const {id} = contentRs as IContent<IContentsTypes>;

            set(contentsAtomFamily(id), {...contentRs});
        }


    });

    return {
        callback
    }
}

export default useEditorEvent