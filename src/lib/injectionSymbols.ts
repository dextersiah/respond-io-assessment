import type { InjectionKey } from "vue";

export type SHEET_INJECT_PARAMS = {
    hideSheet: () => void;
}
export const SHEET_INJECTION_KEY = Symbol() as InjectionKey<SHEET_INJECT_PARAMS>
export const NODES_INJECTION_KEY = Symbol() as InjectionKey<Node[]>