import type { NodeData } from "@/types/NodeData";

export type SHEET_INJECT_PARAMS = {
    hideSheet: () => void;
}

export type NODES_INJECT_PARAMS = {
    nodeData: NodeData | undefined,
    formCallback: () => void
}